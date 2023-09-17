'use client'
// app/page.js
import { getClient } from "@/lib/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


import { TypedDocumentNode, gql } from "@apollo/client";
import { useState } from "react";

interface SongData {
  songName: string;
  category: string[];
}

interface Variables {
  songName: string;
}

const GET_SONG: TypedDocumentNode<SongData, Variables> = gql`
query Song($songName: String!) {
  song(keyword: $songName) {
    songName
    category
  }
}`;

const query = gql`
query{
  song(keyword:"yoasobi"){
    songName
  }
}
`;
interface SongData {
  song:{
    songName: string;
    category: string[];
  }
}

export default function Page() {
  // const { data } = await getClient().query({ query }).then((res) => { console.log(res.data.song); return res.data; });
  const data = useSuspenseQuery(GET_SONG)

  return (

    <main>
      <div>
        <div>
          {data.data.song.songName}
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}