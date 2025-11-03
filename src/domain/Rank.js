const Rank = {
  FIRST: {
    prize: 2_000_000_000,
    description: '6개 일치',
  },
  SECOND: {
    prize: 30_000_000,
    description: '5개 일치, 보너스 볼 일치',
  },
  THIRD: {
    prize: 1_500_000,
    description: '5개 일치',
  },
  FOURTH: {
    prize: 50_000,
    description: '4개 일치',
  },
  FIFTH: {
    prize: 5_000,
    description: '3개 일치',
  },
  NONE: {
    prize: 0,
    description: '낙첨',
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
