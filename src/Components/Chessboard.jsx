import React, { useState } from 'react';

const Chessboard = () => {
  const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [history, setHistory] = useState([]);

  const handleClick = (row, col) => {
    const newBoard = board.map((r, i) => 
      r.map((c, j) => {
        if (i === row && j === col) {
          return 'clicked';
        }
        if (Math.abs(i - row) === Math.abs(j - col)) {
          return 'red';
        }
        return c;
      })
    );
    setHistory([...history, board]);
    setBoard(newBoard);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      setBoard(history.pop());
      setHistory([...history]);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className="grid grid-cols-8 w-90 h-90 border border-black">
        {board.map((row, i) => 
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => handleClick(i, j)}
              className={`w-14 h-14 flex items-center justify-center ${cell === 'clicked' ? 'bg-red-500 text-white' : cell === 'red' ? 'bg-red-500' : (i + j) % 2 === 0 ? 'bg-black' : 'bg-white'}`}
            >
              {cell === 'clicked' && 'clicked'}
            </div>
          ))
        )}
      </div>
      <button onClick={handleUndo} className="mt-4 p-2 rounded-full bg-blue-500 text-white">Undo</button>
    </div>
  );
};

export default Chessboard;