import { useState } from 'react';
import '../css/index.css'
import '../css/connect.css'
import Footer from './Footer'

// fixed dimensions for standard connect 4 (hehe 6 7)
const ROWS = 6;
const COLS = 7;

// helper function to generate an empty 6x7 grid
const createEmptyBoard = () => {
  return Array(ROWS).fill(null).map(() => Array(COLS).fill(null));
}

function Connect({ onBack }){
  // Game state
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 = Maroon, 2 = Blue
  const [winner, setWinner] = useState(null); //null, 1, 2, draw

  // track coords of winning cells (for css purposes)
  const [winningCells, setWinningCells] = useState([]); // Array of [r, c] arrays

  // checks win condition
  const checkWin = (grid, r, c, player) => {
    // horizontal, vertical, diagonal-right, diagonal-left
    // [0,1] corresponds to -> [dr, dc] | dr is the change in rows and dc is the change in columns
    const directions = [[0,1], [1,0], [1,1], [1,-1]];

    for (let [dr,dc] of directions){
      let winningCoords = [[r,c]];

      // nr is next row | nc is next column

      // check positive position
      for (let i = 1; i < 4; i++){
        let nr = r + dr * i;
        let nc = c + dc * i;

        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === player){
          winningCoords.push([nr,nc]);
        } else{
          break;
        }
      }

      // chec the negative position
      for (let i = 1; i < 4; i++){
        let nr = r - dr * i;
        let nc = c - dc * i;

        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === player){
          winningCoords.push([nr,nc]);
        } else{
          break;
        }
      }
      // 4 dics connected
      if (winningCoords.length >= 4){
        return winningCoords;
      }
    }
    return false;
  }

  // checks if the game is DRAW
  const checkDraw = (grid) => {
    return grid[0].every(cell => cell !== null);
  }

  const handleColumnClick = (colIndex) => {
    // this prevents any move after the end of the game
    if (winner){
      return;
    }

    // find the lowest empty row in selected column 
    let rowIndex = -1;
    
    for (let r = ROWS - 1; r >= 0; r--){
      if (board[r][colIndex] === null){
        rowIndex = r;
        break;
      }
    }

    // column full
    if (rowIndex === -1){
      return
    }

    const newBoard = board.map(row => [...row]);

    // dropping the disc and updating the state
    newBoard[rowIndex][colIndex] = currentPlayer;
    setBoard(newBoard);

    /* 
    checks who wins, the first if statment passes down the arguments 
    to the parameters of checkWin and decides a winner, else checkDraw, 
    else change the player (game is not yet finished)  
    */
    const winResult = checkWin(newBoard, rowIndex, colIndex, currentPlayer)

    if (winResult){
      setWinner(currentPlayer);
      setWinningCells(winResult)
    } else if (checkDraw(newBoard)){
      setWinner('draw')
    } else{
      // if current player is 1 setCurrentPlayer is = 2, if not set it to 1
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
    }
  }

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPlayer(1);
    setWinner(null);
    setWinningCells([]);
  }

  return(
    <div className='connect-container'>
      {/* GAME HEADER */}
      <div className='connect-header'>
        <div className='header-items left'>
          <button className='back-btn' onClick={onBack}>
          ‹ Back to Games
          </button>

          <h2 className='game-title'>Connect 4</h2>
        </div>

        <div className='header-items right'>
          {!winner ? (
            <div className="turn-indicator">
              <span className={`turn-dot ${currentPlayer === 1 ? 'player1' : 'player2'}`}></span>
              {currentPlayer === 1 ? "Maroon's turn" : "Blue's turn"}
            </div>
          ) : (
            <div className="winner-announcement">
              <span className={`turn-dot ${currentPlayer === 1 ? 'player1' : 'player2'}`}></span>
              {winner === 'draw' ? "It's a Draw!" : `${winner === 1 ? "Maroon" : "Blue"} Wins!`}
            </div>
          )}

          <button className="reset-btn" onClick={resetGame}>
            ↺ Reset
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className='board-wrapper'>
        {/* Winner Overlay */}
        {winner && (
          <div className="winner-overlay">
            <h2 className="winner-text">
              {winner === 'draw' ? "It's a Draw!" : `${winner === 1 ? "Maroon" : "Blue"} Wins!`}
            </h2>
            <button className="play-again-btn" onClick={resetGame}>
              Play Again
            </button>
          </div>
        )}

        <div className='board'>
          {board.map((row, rIndex) => (
            <div key={`row-${rIndex}`} className='board-row'>
              {row.map((cell, cIndex) => {
                //"Does the row index and column index of the cell I am drawing right now match any of the locations where the player won?"
                // Check if current cell is one of the winning positions
                const isWinning = winningCells.some(([r, c]) => r === rIndex && c === cIndex);

                return (
                  <div 
                    key={`cell-${rIndex}-${cIndex}`} 
                    // Append 'winning-cell' class if cell is in winning array
                    className={`board-cell ${isWinning ? 'winning-cell' : ''}`}
                    onClick={() => handleColumnClick(cIndex)}
                  > 
                    <div 
                      className={`disc ${cell === 1 ? 'player1' : cell === 2 ? 'player2' : 'empty'}`}
                      style={{ '--row': rIndex }}
                    ></div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Connect;

/*

For the body, the board-wrapper is mainly composed of two map that helps in the creatio of the board: 

- if cell === 1 this div makes the disc to player 1, and if cell === 2 it makes it blue for player 2
- outer map creates divs name board-row
- inner map creates divs name board-cell (column)

*/ 
