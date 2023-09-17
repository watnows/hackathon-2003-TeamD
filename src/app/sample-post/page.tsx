'use client'
// app/page.js
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useMutation } from "@apollo/client";
const GET_SONG = gql`
query Song($songName: String!) {
  song(keyword: $songName) {
    songName
    category
  }
}`;

const query = gql`
mutation {
  createRoom(
    room:{
      userId:12346
      roomName: "よろしくお願いしまあああああああああああす"
    }){
    userId
    roomId
  }
  
}
`;
interface SongData {
  songName: string;
  category: string[];
}

export default function Page() {
  const [mutateFunction, { data, loading, error }] = useMutation(query);
  const handleClick = () => {
    console.log("clicked");
    mutateFunction().then(() => {
      console.log(data);
    })
  }
  return <main onClick={handleClick}>hogehoge</main>;
}