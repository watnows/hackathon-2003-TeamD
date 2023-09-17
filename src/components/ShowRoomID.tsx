interface ShowRoomIDProps {
    roomID: string;
}
const ShowRoomID = (props:ShowRoomIDProps) => {
    const { roomID } = props;
    return (
        <div>
            <h2>ルームID</h2>
            <div className="text-font bg-background shadow shadow-boxOut">
                <h2>{roomID}</h2>
            </div>
            <h1>Room ID</h1>
        </div>
    ) 
}

export default ShowRoomID;