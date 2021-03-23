import React , { useState } from "react";
import Board from './Board'
import { calculateWinner } from '../helpers'

const Game = () => {

    const styles = {
        width: '200px',
        margin: '20px auto',
    };

    const [board, setBoard] = useState(Array(9).fill(null));
    
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(board)

    // const marks = [mark, setMrks] = useState;

    // const mark = () => {
    //     <label onClick={() => }> </label>
    // }

    const handleClick = i => {

        const boredCopy = [...board];
        if (winner || boredCopy[i]) return 'no one ';
        boredCopy[i] = xIsNext ? 'X' : "O";
        setBoard(boredCopy);
        setXisNext(!xIsNext);
        }
        
    
    const jumpTo = () => {
        
    }
    
    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )
    return (
        
        <div>
        <Board squares={board} onClick={handleClick} />
        <div style={styles}>
                <p>{winner ? 'congrate winner is: '  + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
        </div>
        
        </div>
    
    )
}
export default Game;
