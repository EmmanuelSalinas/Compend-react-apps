import Square from "../components/Square";

type Props = {
  winner: string | boolean | null;
  resetGame: () => void;
};

export function WinnerModal({ winner, resetGame }: Props) {
  if (winner === null) return null;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? "Empate" : "Gano: "}</h2>
        <header className="win">
          {winner && <Square index={997}>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
