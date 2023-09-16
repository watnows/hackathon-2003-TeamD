const RoomInButton = () => {
    return(
        <div className="bg-background text-font text-lg text-3xl p-8 py-10 w-fit rounded-3xl shadow shadow-boxOut">
            <h2>ルームID入力</h2>
            <input type="text" className="bg-background rounded-tl-2xl rounded-bl-2xl shadow shadow-boxIn" />
        </div>
    )
}

export default RoomInButton;