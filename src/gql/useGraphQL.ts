import { useSongQuery, useCreateRoomMutation, useJoinRoomMutation } from "@/generated/graphql"

const useGraphQL = () => {
    return {
        useSongQuery,
        useCreateRoomMutation,
        useJoinRoomMutation
    }
}