import { useState } from 'react';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [next, setNext] = useState(true);
  let squares = history[history.length - 1];

  function onPlay(newSquares) {
    //way 1
    // const newArray = [...history, newSquares];
    // setHistory(newArray);
    // setNext((newArray.length - 1) % 2 === 0);

    //way 2
    history.push(newSquares);
    setNext((history.length - 1) % 2 === 0);
    // squares = history[history.length - 1]; //少了这里 btns 不会刷新，为什么？
  }

  const btns = history.map((_, index) => {
    if (index === history.length - 1) {
      return null;
    }

    let desc;
    if (index > 0) {
      desc = 'Go to move #' + index;
    } else {
      desc = 'Go to game start';
    }

    return (
      <li key={index}>
        <button
          onClick={() => {
            jumpTo(index);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  function jumpTo(move) {
    setHistory(history.slice(0, move + 1));
    setNext(move % 2 === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board next={next} squares={squares} onPlay={onPlay} />
      </div>
      <div className="game-info">
        <ol>{btns}</ol>
      </div>
    </div>
  );
}

function Board({ next, squares, onPlay }) {
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

    onPlay(newArray);
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
