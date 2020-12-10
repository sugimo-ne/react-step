import React from "react"
import Button from  '@material-ui/core/Button'

type SquareProps = {
    value: string|null,
    onClick: ()=> void,
    variantValue: string,
    colorValue: string
  }

const Square: React.FunctionComponent<SquareProps> = ({value , onClick, variantValue  , colorValue}) => {
    const renderButton = (variant:any , color:any) => {
        return(
            <Button className="square" variant={variant} color={color} onClick={onClick}>
                {value}
            </Button>
        )
    }
  
    return (
        renderButton(variantValue , colorValue)
    );
  }

  export default Square