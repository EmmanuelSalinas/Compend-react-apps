import constant from "../constant";

export const checkWinnerFrom: (board: Array<string>) => string | null = (
  boardToCheck,
) => {
  for (const combo of constant.winnerCombos) {
    const [a, b, c]: Array<number> = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; //any position only to know
    }
  }
  return null;
};
