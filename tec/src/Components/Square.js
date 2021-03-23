import React from "react";


const style = {
    background: 'lightblue',
    border: '2px  solid darkblue',
    fontsize: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({value , onClick}) => (

    <button style={style} onClick = {onClick}>
        {value}
    </button>
)


export default Square;