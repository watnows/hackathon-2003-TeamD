'use client'
import { useCreateRoom } from "@/gql/useGraphQL";

const CreateRoom = () => {
    const {createRoom } = useCreateRoom()

    const handleClick = () => {
        createRoom(20000, "test")
    }
    return (
        <button className="bg-background text-font text-lg text-3xl m-auto p-8 py-10 w-fit rounded-3xl shadow-boxOut" onClick={handleClick}>
            <h2>ルーム作成</h2>
        </button>
    )
}

export default CreateRoom;