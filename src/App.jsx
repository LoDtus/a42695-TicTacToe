import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import Board from "./components/Board";
import Result from "./components/Result";

let sizeCaro = 6;
let win = 4;
const boardCaro = [];
for (let row=0; row<sizeCaro; row++) {
    boardCaro.push([]);
    for (let col=0; col<sizeCaro; col++) {
        boardCaro[row].push([]);
        boardCaro[row][col].push([]);
        boardCaro[row][col][0] = 0;
    }
}

function App() {
    const [value, setValue] = useState(boardCaro);
    const [curPlayer, setPlayer] = useState(true);
    const [winner, setWinner] = useState(false);

    function handlePlay() {
        setPlayer(
            curPlayer===true ? false :
            curPlayer===false ? true : null
        )
    }

    function playAgain() {
        for(let row=0; row<sizeCaro; row++) {
            for (let col=0; col<sizeCaro; col++) {
                boardCaro[row][col][0] = 0;
            }
        }
        setWinner(false);
        setValue(boardCaro);
        setPlayer(true);
    }

    return (
        <div className="App">
            <div className="game">
                <div className="userProfile">
                    <UserProfile
                        src="./assets/king.png"
                        player="Player X"
                        active={curPlayer===true}
                    />
                    <UserProfile
                        src="./assets/queen.png"
                        player="Player O"
                        active={curPlayer===false}
                    />
                </div>
                <Board
                    sizeCaro={sizeCaro}
                    boardCaro={value}
                    curPlayer={curPlayer}
                    handlePlay={handlePlay} />
                <Result
                    sizeCaro={sizeCaro}
                    boardCaro={value}
                    win={win}
                    winner={winner}
                    setWinner={setWinner}
                    playAgain={playAgain}
                />
            </div>
        </div>
    );
}

export default App;
