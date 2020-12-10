import React, { useState } from "react";
import Square from "./Square"

type BoardProps = {
    squares:string[] | null[],
    onClick:(i:number)=> void
  }
  

const Board: React.FunctionComponent<BoardProps> = ({onClick , squares}) =>{
    const renderSquare = (i:number) => (
        <Square
          onClick={() => onClick(i)}
          value={squares[i]}
        />
    )
      return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
}

export default Board