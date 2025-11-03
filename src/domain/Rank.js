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
    if (matchCount === 6) return Rank.FIRST;
    if (matchCount === 5 && hasBonus) return Rank.SECOND;
    if (matchCount === 5) return Rank.THIRD;
    if (matchCount === 4) return Rank.FOURTH;
    if (matchCount === 3) return Rank.FIFTH;
    return Rank.NONE;
  },
};

export default Rank;
