import "./style.css";

function Square({ value, onSquareClick }) {
    return (
        <>
            <div className="square" onClick={onSquareClick}>
                <div>
                    <img
                        className={value === 1 ? "onClick" : "d-none"}
                        src="./assets/x.png"
                        alt="X"
                    />
                    <img
                        className={value === 2 ? "onClick" : "d-none"}
                        src="./assets/o.png"
                        alt="O"
                    />
                </div>
            </div>
        </>
    );
}
export default Square;
