import React from "react"
import { getClient } from "@/app/lib/client";

import { gql } from "@apollo/client";

const query = gql`query Now {
    now(id: "1")
}`;

const Page = async () => {
  const { data } = await getClient().query({ query });

  return (
    <div>
      <div>Hello Sample</div>
      <div>{data}</div>
    </div>
  )
}

export default Page