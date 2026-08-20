import { useState, type ReactNode } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import Square from "./components/Square";
import constant from "./constant";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  /* para crear el tablero */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? constant.turns.x;
  });
  const [winner, setWinner] = useState<string | null | boolean>(null);

  const updateBoard: (index: number) => void = (index) => {
    if (board[index] || winner) return;
    const newBoard: string[] = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn: string =
      turn === constant.turns.o ? constant.turns.x : constant.turns.o;
    setTurn(newTurn);
    //GUARDAR PARTIDA
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //REVISAR SI HAY GANAFOR
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }
  };

  const resetGame: () => void = () => {
    setBoard(Array(9).fill(null));
    setTurn(constant.turns.x);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <>
      <main className="board ">
        <h1>Juego de Gato</h1>
        <button onClick={resetGame}>Volver a empezar</button>
        <section className="game">
          {board.map((_: any, index: number) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <h1 className="turn-title">Es el turno de:</h1>
        <section className="turn">
          <Square index={999} isSelected={turn === constant.turns.o}>
            {constant.turns.o}
          </Square>
          <Square index={998} isSelected={turn === constant.turns.x}>
            {constant.turns.x}
          </Square>
        </section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    </>
  );
}

export default App;
