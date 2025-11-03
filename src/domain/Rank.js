import Constant from "../constants/Constant.js";

const Rank = {
  FIRST: {
    prize: 2_000_000_000,
    description: '6개 일치',
    getPrize() { return this.prize; },
    getDescription() { return `${this.description} (${this.prize.toLocaleString()}원)`; },
  },
  SECOND: {
    prize: 30_000_000,
    description: '5개 일치, 보너스 볼 일치',
    getPrize() { return this.prize; },
    getDescription() { return `${this.description} (${this.prize.toLocaleString()}원)`; },
  },
  THIRD: {
    prize: 1_500_000,
    description: '5개 일치',
    getPrize() { return this.prize; },
    getDescription() { return `${this.description} (${this.prize.toLocaleString()}원)`; },
  },
  FOURTH: {
    prize: 50_000,
    description: '4개 일치',
    getPrize() { return this.prize; },
    getDescription() { return `${this.description} (${this.prize.toLocaleString()}원)`; },
  },
  FIFTH: {
    prize: 5_000,
    description: '3개 일치',
    getPrize() { return this.prize; },
    getDescription() { return `${this.description} (${this.prize.toLocaleString()}원)`; },
  },
  NONE: {
    prize: 0,
    description: '낙첨',
    getPrize() { return this.prize; },
    getDescription() { return this.description; },
  },

  of(matchCount, hasBonus) {
    if (matchCount === 5 && hasBonus) {
      return Rank.SECOND;
    }
    const rankMapping = {
      6: Rank.FIRST,
      5: Rank.THIRD,
      4: Rank.FOURTH,
      3: Rank.FIFTH,
    };
    return rankMapping[matchCount] || Rank.NONE;
  },

  values() {
    return [Rank.FIRST, Rank.SECOND, Rank.THIRD, Rank.FOURTH, Rank.FIFTH];
  },
};

export default Rank;
