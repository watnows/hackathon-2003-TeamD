import { gql, ApolloClient, InMemoryCache, useSuspenseQuery } from "@apollo/client";

interface Song {
    songName: string;
    category: string[];
  }

const GET_SONG_BY_ROOM_ID = gql`
  query GetSongByRoomId($roomId: Int!) {
    song(roomId: $roomId) {
      songName
      categories
    }
  }
`;

const useSongByRoomId = (roomId: number) => {
  const { data } = useSuspenseQuery<{ song: Song[] }>(GET_SONG_BY_ROOM_ID, {
    variables: { roomId }
  });

  return data?.song;
};


export default useSongByRoomId;