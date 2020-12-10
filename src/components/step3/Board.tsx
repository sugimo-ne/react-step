import React from "react";
import Square from "./Square"

type BoardProps = {
    squares:string[] | null[],
    onClick:(i:number)=> void,
  }
  
const Board: React.FunctionComponent<BoardProps> = ({onClick , squares}) =>{
    const allocateColor = (value:string|null) => {
        let variant:string
        let color:string
        switch(value){
            case "O":
                variant = "contained"
                color = "primary"
                break
            case "X":
                variant = "contained"
                color = "secondary"
                break
            default:
                variant = "outlined"
                color = "default"
                break
        }
        return {variant , color}
    }
    const renderSquare = (i:number) => {
        let value = squares[i]
        let colorValue = allocateColor(value).color
        let variantValue = allocateColor(value).variant
        return(
        <Square
          onClick={() => onClick(i)}
          value={value}
          colorValue={colorValue}
          variantValue={variantValue}
        />
        )
    }
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
