import { useState } from 'react';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);

  let status;
  let winner = calculateWinner();
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (next ? 'X' : 'O');
  }

  function onSquareClick(index) {
    if (squares[index] || winner) {
      return;
    }

    var newArray = squares.slice();
    if (next) {
      newArray[index] = 'X';
    } else {
      newArray[index] = 'O';
    }

    setSquares(newArray);
    setNext(!next);
  }

  function calculateWinner() {
    const indexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < indexes.length; i++) {
      const [a, b, c] = indexes[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            onSquareClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            onSquareClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            onSquareClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => {
            onSquareClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            onSquareClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            onSquareClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => {
            onSquareClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            onSquareClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            onSquareClick(8);
          }}
        />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  console.log(
    'Square ' + value,
    new Date().toLocaleTimeString('zh-CN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
    }),
  );
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
