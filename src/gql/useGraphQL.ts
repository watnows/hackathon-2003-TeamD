import { useQuery, useMutation, ApolloQueryResult, MutationResult } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import gql from "graphql-tag";

const GET_SONG = gql`
query Song($songName: String!) {
  song(keyword: $songName) {
    songName
    category
  }
}`;

const JOIN_ROOM = gql`
mutation JoinRoom($userId: Int!, $roomId: Int!) {
  joinRoom(join: {userId: $userId, roomId: $roomId}) {
    userId
    roomId
  }
}`;

const CREATE_ROOM = gql`
mutation createRoom($userId: Int!, $roomName: String!) {
  createRoom(room: { userId: $userId, roomName: $roomName }) {
    roomId
    userId
    name
  }
}`;
interface SongData {
    songName: string;
    category: string[];
}

interface RoomData {
    roomId: number;
    userId: number;
    name: string;
}

const useSongData = (songName: string) => {
    const { data, error } = useSuspenseQuery<{ song: SongData }>(GET_SONG, {
        variables: { songName },
    });

    return { songData: data?.song, error };
};

const useJoinRoom = () => {
    const [joinRoomMutation, mutationState] = useMutation<RoomData>(JOIN_ROOM, {});

    const joinRoom = (userId: number, roomId: number) => joinRoomMutation({ variables: { userId, roomId } });

    return { joinRoom, ...mutationState };
};

const useCreateRoom = () => {
    const [createRoomMutation, mutationState] = useMutation<RoomData>(CREATE_ROOM, {});

    const createRoom = (userId: number, roomName: string) => createRoomMutation({ variables: { userId, roomName } });

    return { createRoom, ...mutationState };
};

export { useSongData, useJoinRoom, useCreateRoom };