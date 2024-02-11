import { useState } from "react";
import { Slot } from "./Slot";
import "./game.css";
import { useDispatch, useSelector } from "react-redux";
import { setHiddenMessage, setPuncte } from "../redux/gameSlice";

export const Board = () => {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);

  const [currPlayer, setCurrPlayer] = useState("X");
  const [oppPlayer, setOppPlayer] = useState("O");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkWin = (row, column, ch) => {
       
    try {
        if (board[row + 1][column] === ch) { //si verifica se ci sono almeno 2 slot in colonna
            if (board[row + 2][column] === ch) { //si verifica se ci sono almeno 3 slot in colonna
                if (board[row + 3][column] === ch) { //si verifica se ci sono 4 slot in colonna, in quel caso il ch= giocatore corrente ha vinto
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }

    try {
        if (board[row + 1][column + 1] === ch) {
            if (board[row + 2][column + 2] === ch) {
                if (board[row + 3][column + 3] === ch) {
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }

    try {
        if (board[row + 1][column - 1] === ch) {
            if (board[row + 2][column - 2] === ch) {
                if (board[row + 3][column - 3] === ch) {
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }

    try {
        if (board[row][column + 1] === ch) {
            if (board[row][column + 2] === ch) {
                if (board[row][column + 3] === ch) {
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }

    try {
        if (board[row][column - 1] === ch) {
            if (board[row][column - 2] === ch) {
                if (board[row][column - 3] === ch) {
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }

    try {
        if (board[row - 1][column - 1] === ch) {
            if (board[row - 2][column - 2] === ch) {
                if (board[row - 3][column - 3] === ch) {
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }

    try {
        if (board[row - 1][column + 1] === ch) {
            if (board[row - 2][column + 2] === ch) {
                if (board[row - 3][column + 3] === ch) {
                    return true;
                }
            }
        }
    } catch (e) { console.log(e) }
};

  const updateBoard = (row, column, ch) => {
    setBoard((prev) => {
      const boardCopy = [...prev];
      boardCopy[row][column] = ch;
      return boardCopy;
    });

    const isGameOver = checkWin(row, column, ch);

    if (isGameOver) {

      setGameOver(true);
      setWinner(ch);
      dispatch(setHiddenMessage(true));

      if (currPlayer === "X") {
        dispatch(setPuncte(puncteTotale +5));

    } else if (currPlayer !== "X") {
      dispatch(setPuncte(puncteTotale -5));
 
    }
  }
 
    return isGameOver;
  };



  const handleClick = (e) => {
    if (gameOver) return;

    const column = e.target.getAttribute("x");
    let row = board.findIndex(
      (rowArr, index) => rowArr[column] !== "" || index === board.length - 1
    );

    if (row !== board.length - 1) row -= 1;
    if (board[row][column] !== "") row -= 1;

    const isGameOver = updateBoard(row, column, currPlayer);

    if (!isGameOver) {
      const nextPlayer = currPlayer === "X" ? "O" : "X";
      setCurrPlayer(nextPlayer);
    }
  };

  const handleRestart = () => {
    setBoard([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ]);
  
    setCurrPlayer("X");
    setOppPlayer("O");
    setGameOver(false);
    setWinner(null);
    dispatch(setHiddenMessage(false));
  };

  const puncteTotale = useSelector(state => state.game.puncte);
  const dispatch = useDispatch();
  const stergeMessageCanCastigi = useSelector(state => state.game.hiddenMessage);

  return (
    <>
      {gameOver && (
        <>
          <h1 className="texts">
            Game Over! {winner === "X" ? "Black" : "Red"} Wins!
          </h1>
          <div className="restart">
            <button className="bg-green-600 text-white px-5 py-3 mt-4" onClick={handleRestart}>New match!</button>
          </div>
        </>
      )}
      <h2 className={`texts ${stergeMessageCanCastigi ? "hidden" : "visible"}`} id="playerDisplay">
        <h1>Tu reprezinti fisa neagra</h1>
        {currPlayer === "X" ? "Black" : "Red"} Move
      </h2>
      <div className="boardResponsive"
        id="board"
        onClick={gameOver ? null : handleClick}
      >
        {board.map((row, i) =>
          row.map((ch, j) => <Slot key={`${i}-${j}`} ch={ch} y={i} x={j} />)
        )}
      </div>
    </>
  );
};
