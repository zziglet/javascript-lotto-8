import Rank from "../domain/Rank.js";

const WinningService = {
  checkWinnings(lottos, winningNumbers) {
    return lottos.map(lotto => {
      const { matchCount, hasBonus } = winningNumbers.match(lotto);
      return Rank.of(matchCount, hasBonus);
    });
  },
};

export default WinningService;
