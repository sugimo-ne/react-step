import React from "react"

type SquareProps = {
    value: string|null,
    onClick: ()=> void
  }

const Square: React.FunctionComponent<SquareProps> = ({value , onClick}) => {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }

  export default Square