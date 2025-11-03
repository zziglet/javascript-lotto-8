const ProfitCalculator = {
  calculate(statistics, purchaseAmount) {
    let totalPrize = 0;
    for (const [rank, count] of statistics.entries()) {
      totalPrize += rank.getPrize() * count;
    }

    if (purchaseAmount === 0) {
      return 0.0;
    }

    const profitRate = (totalPrize / purchaseAmount) * 100;
    return Math.round(profitRate * 10) / 10;
  },
};

export default ProfitCalculator;
