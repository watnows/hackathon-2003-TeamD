"use client"
import React,{ useState } from 'react'
import Image from 'next/image'
import close from "../../public/close.svg"
import done from "../../public/done.svg"

interface iRandomColorButton {
  name: string,
  color: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function RandomColorButton(props:iRandomColorButton) {
  const {name, color, onClick} = props

  const initialBackgroundColor = '#f5f5f5';
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleColors = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsClicked(!isClicked);
    onClick && onClick(event); //propsから渡されたonClickを呼ぶ
    //配列に名前を加えるようにする
  };
  // サーバー側とクライアント側で選ばれる色が違う

  return (
    <>
      <div>
        <div>name:{name}</div>
        <div>color:{color}</div>
      </div>
      <button 
        onClick={toggleColors}
        className={`px-4 py-2 ground flex items-center `} 
        style={{ 
          backgroundColor: isClicked ? color : initialBackgroundColor,
          color: isClicked ? initialBackgroundColor : color,
          borderRadius: '16px' }}
        >
        {isClicked ? <Image src={done} alt="Done Icon" /> : <Image className='origin-center rotate-45' src={close} alt="Close Icon" />}
        クリックして色を変更
      </button>
    </>
  );
}

export default RandomColorButton;