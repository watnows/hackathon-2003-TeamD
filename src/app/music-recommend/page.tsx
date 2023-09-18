'use client'
import React, { Suspense } from "react";
import useSongByRoomId from "@/lib/useSongByRoomId";
import NeumourList from "@/components/NeumorList";
import ShowRoomID from "@/components/ShowRoomID";
import ModalWhole from "@/components/ModalWhole";
import { useSearchParams } from "next/navigation";

interface SongListProps {
  roomId: number;
}

const SongList: React.FC<SongListProps> = ({ roomId }) => {
  const songs = useSongByRoomId(roomId);
  const songNames = songs ? songs.map(song => song.songName) : [];

  return (
    <>
      <ModalWhole />
      <ShowRoomID roomID={String(roomId)} />
      <NeumourList listItems={songNames} />
    </>
  );
};

interface SuspendedSongListProps {
  roomId?: number;
}

const SuspendedSongList: React.FC<SuspendedSongListProps> = ({
  roomId }) => {
  const searchParams = useSearchParams();

  // クエリパラメータを取得
  const roomID = searchParams.get("roomID");
  const userID = searchParams.get("userID");
  // クエリがまだ利用できない場合のハンドリング
  if (!roomID || !userID) {
    return <div>Loading...</div>;
  }
  if (typeof roomID !== "string" || typeof userID !== "string") {
    return <p>ルームIDまたはユーザーIDが不正です。</p>
  }
  if (!roomId) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SongList roomId={5711} />
      </Suspense>)
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SongList roomId={Number(roomID)} />
    </Suspense>
  );
};

export default SuspendedSongList;