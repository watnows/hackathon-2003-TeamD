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
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#FF33FF', '#33FFFF'];

  const initialBackgroundColor = '#f5f5f5';
  const initialFontColor = colors[Math.floor(Math.random() * colors.length)];

  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);
  const [fontColor, setFontColor] = useState(initialFontColor);
  const [isClicked, setIsClicked] = useState(false);

  const toggleColors = () => {
    console.log('hoge')
    if (isClicked) {
      // 初期状態に戻す
      setBackgroundColor(initialBackgroundColor);
      setFontColor(initialFontColor);
    } else {
      // クリックされた状態にする
      setBackgroundColor(fontColor);
      setFontColor(initialBackgroundColor);
    }
    setIsClicked(!isClicked);
    onClick && onClick(); //propsから渡されたonClickを呼ぶ
  };

  return (
    <>
      <div>
        <div>name:{name}</div>
        <div>color:{color}</div>
      </div>
      <button 
        onClick={toggleColors}
        className={`px-4 py-2 flex items-center`} 
        style={{ backgroundColor: backgroundColor, color: fontColor }}
        >
        {isClicked ? <Image src={done} alt="Done Icon" /> : <Image src={close} alt="Close Icon" />}
        クリックして色を変更
      </button>
    </>
  );
}

export default RandomColorButton;