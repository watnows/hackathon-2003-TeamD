"use client";
//モーダルを作るコンポーネント
import React from "react";
import { useState, useEffect } from "react";
import SampleButton from "./Genrebutton";
import RandomColorButton from "./Genrebutton";

function Modal() {
  const genreList = ["jpop", "kpop"];
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreClick = (genreName: string) => {
    setSelectedGenres((prevGenres) => {
      const isAlreadySelected = prevGenres.includes(genreName);

      if (isAlreadySelected) {
        return prevGenres.filter((genre) => genre !== genreName);
      } else {
        return [...prevGenres, genreName];
      }
    });
  };

  //初期色の設定をこっちでやって、RandomColorButtonにpropsで当てる

  // function RandColor() {

  //   const [selectedColorClass, setSelectedColorClass] = useState('');

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * colors.length);
  //   setSelectedColorClass(colors[randomIndex]);
  // }, []);
  // return  (
  //   <RandomColorButton colorClass={selectedColorClass} />
  //   );
  // }


  //ランダムな初期値を一つ決めて返す
  const getColor: () => string = () => {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FFFF33",
      "#FF33FF",
      "#33FFFF",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {genreList.map((genre, i) => {
        return (
          <RandomColorButton
            key={i}
            name={genre}
            color={getColor()}
            onClick={() => {}}
          />
        );
      })}
      <div>
        <h3>Selected Genres:</h3>
        <ul>
          {selectedGenres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;

//モーダルの中でuseStateの配列使いながら選択したジャンル持ってたら大丈夫
