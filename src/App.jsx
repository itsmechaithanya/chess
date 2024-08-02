import React from 'react';
import './index.css';
import Chessboard from './Components/Chessboard';

function App() {
  return (
    <div className="h-screen w-screen App flex flex-col items-center justify-center bg-blue-950 text-white">
      <h1 className="text-6xl font-bold mb-3">Chessboard</h1>
      <div className='w-full mb-8 pl-20 pr-20'>
        <h4 className='capitalize text-center'>The current chessboard implementation visually demonstrates the directions in which a bishop can move in      
        chess. When you click a cell, it highlights all the diagonally aligned cells that a bishop would be able to move to from that position.</h4>
      </div>
      <Chessboard/>
    </div>
  );
}

export default App;