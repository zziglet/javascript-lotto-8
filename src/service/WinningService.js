import Rank from "../domain/Rank.js";

const WinningService = {
  checkWinnings(lottos, winningNumbers) {
    return lottos.map(lotto => {
      const { matchCount, hasBonus } = winningNumbers.match(lotto);
      return Rank.of(matchCount, hasBonus);
    });
  },

  calculateStatistics(ranks) {
    const statistics = new Map(Rank.values().map(rank => [rank, 0]));
    ranks.forEach(rank => {
      if (rank !== Rank.NONE) {
        statistics.set(rank, statistics.get(rank) + 1);
      }
    });
    return statistics;
  },
};

export default WinningService;
