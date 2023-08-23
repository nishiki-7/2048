import './App.css';

import React, { useState } from 'react'

const App = () => {
  // const [gameBoardArray, setGameBoardArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [gameBoardArray, setGameBoardArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  // const [gameBoardArray, setGameBoardArray] = useState([8, 4, 2, 2]);
  // const [gameBoardArray, setGameBoardArray] = useState([[8, 4, 2, 2], [16, 4, 4, 2], [0, 32, 8, 16], [16, 2, 0, 4]]);
  // const [gameBoardArray, setGameBoardArray] = useState([[8, 4, 2, 2], [16, 4, 4, 2], [0, 32, 8, 16], [16, 0, 0, 4]]);
  const [gameBoardArray, setGameBoardArray] = useState([[8, 8, 2, 2], [16, 0, 4, 2], [0, 32, 0, 16], [16, 0, 0, 4]]);

  // const [newGameBoardArray, setNewGameBoardArray] = useState([]);

  const createNumber = () => {
    const newGameBoardArray = [...gameBoardArray];

    let canInsertNumber = true
    while (canInsertNumber) {

      let randomNumber = Math.floor(Math.random() * 16);
      console.log(randomNumber);

      // TODO:なんかマックスになった後に無限ループしてバグる 0807
      if (newGameBoardArray[randomNumber] !== 2) {
        newGameBoardArray[randomNumber] = 2;
        setGameBoardArray(newGameBoardArray);
        canInsertNumber = false
      }
    }
  }


  const shiftRight = () => {
    const newGameBoardArray = [...gameBoardArray];

    console.log("右ボタンがクリックされた");

    for (let row = 0; row <= 3; row++) {
      for (let col = 3; col >= 0; col--) {
        // 右端の値をselfNumberに格納
        let selfNumber = newGameBoardArray[row][col];

        // 基準値以外の数字を詰める処理
        for (let targetCol = col - 1; targetCol >= 0; targetCol--) {
          if (selfNumber === 0) {
            if (newGameBoardArray[row][targetCol] !== 0) {
              newGameBoardArray[row][col] = newGameBoardArray[row][targetCol];
              selfNumber = newGameBoardArray[row][targetCol];
              newGameBoardArray[row][targetCol] = 0;
              continue;
            }
          }

          if (newGameBoardArray[row][targetCol] === selfNumber) {
            newGameBoardArray[row][col] *= 2;
            newGameBoardArray[row][targetCol] = 0;
            continue;
          }

        }
      }
    }
    setGameBoardArray(newGameBoardArray);
  }


  const newGameBoardArray = [...gameBoardArray];


  const shiftDown = () => {
    const newGameBoardArray = [...gameBoardArray];

    console.log("下ボタンがクリックされた");

    for (let col = 0; col <= 3; col++) {
      for (let row = 3; row >= 0; row--) {
        // 下の値が0なら、それ以降の項目を詰める
        if (newGameBoardArray[row][col] === 0) {
          for (let i = row; i >= 0; i--) {
            newGameBoardArray[i][col] = newGameBoardArray[i - 1][col]
          }
          newGameBoardArray[0][col] = 0;
        }

        // 上下の値を合計する
        if (newGameBoardArray[row][col] === newGameBoardArray[row - 1][col]) {
          newGameBoardArray[row][col] *= 2;
          newGameBoardArray[row - 1][col] = 0
        }
      }
    }
    setGameBoardArray(newGameBoardArray);
  }

  return (
    <div className='gameBoard'>
      <div className='gameBoardRow'>
        <div>{gameBoardArray[0][0]}</div>
        <div>{gameBoardArray[0][1]}</div>
        <div>{gameBoardArray[0][2]}</div>
        <div>{gameBoardArray[0][3]}</div>
      </div>
      <div className='gameBoardRow'>
        <div>{gameBoardArray[1][0]}</div>
        <div>{gameBoardArray[1][1]}</div>
        <div>{gameBoardArray[1][2]}</div>
        <div>{gameBoardArray[1][3]}</div>
      </div>
      <div className='gameBoardRow'>
        <div>{gameBoardArray[2][0]}</div>
        <div>{gameBoardArray[2][1]}</div>
        <div>{gameBoardArray[2][2]}</div>
        <div>{gameBoardArray[2][3]}</div>
      </div>
      <div className='gameBoardRow'>
        <div>{gameBoardArray[3][0]}</div>
        <div>{gameBoardArray[3][1]}</div>
        <div>{gameBoardArray[3][2]}</div>
        <div>{gameBoardArray[3][3]}</div>
      </div>
      {/* <button onClick={createNumber}>２を入れる</button> */}
      <button onClick={shiftRight}>→</button>
      <button onClick={shiftDown}>↓</button>

    </div>
  )
}

export default App

