'use client'
//モーダルを作るコンポーネント
import React from 'react'
import { useState } from 'react'
import SampleButton from './Genrebutton'
import RandomColorButton from './Genrebutton'


function Modal() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreClick = (genreName:string) => {
    setSelectedGenres((prevGenres) => {
      const isAlreadySelected = prevGenres.includes(genreName);

      if (isAlreadySelected) {
        return prevGenres.filter(genre => genre !== genreName);
      } else {
        return [...prevGenres, genreName];
      }
    });
  };

  return (
    <div>
      <RandomColorButton />
      <RandomColorButton />
      <RandomColorButton />
      <RandomColorButton />
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