import "./style.css"
import Square from "./Square";

function Board({sizeCaro, boardCaro, curPlayer, handlePlay}) {
    function handleClick(row, col) {
        if (boardCaro[row][col][0] === 0) {
            boardCaro[row][col][0] = 
                curPlayer===true ? 1 :
                curPlayer===false ? 2 : null;
            handlePlay();
        }
    }
    const elementSquare = [];
    for(let row=0; row<sizeCaro; row++) {
        for (let col=0; col<sizeCaro; col++) {
            elementSquare.push(
                <Square
                    key={`${row}${col}`}
                    value={boardCaro[row][col][0]}
                    onSquareClick={() => handleClick(row,col)}
                />
            )
        }
    }

    return <>
        <div
            className="board"
            style={{gridTemplateColumns: `repeat(${sizeCaro}, 1fr)`}}>
            {elementSquare}
        </div>
    </>
}

export default Board;