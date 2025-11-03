import Rank from "../../src/domain/Rank.js";
import ProfitCalculator from "../../src/service/ProfitCalculator.js";

describe("ProfitCalculator 테스트", () => {
  test("calculate는 수익률을 정확히 계산해야 한다.", () => {
    const testCases = [
      { statistics: new Map([[Rank.FIFTH, 1]]), amount: 8000, expected: 62.5 },
      { statistics: new Map([[Rank.FIRST, 1]]), amount: 1000, expected: 200000000.0 },
      { statistics: new Map(), amount: 5000, expected: 0.0 },
      {
        statistics: new Map([[Rank.THIRD, 2], [Rank.FIFTH, 1]]),
        amount: 10000,
        expected: 30050.0,
      },
    ];

    testCases.forEach(({ statistics, amount, expected }) => {
      const profit = ProfitCalculator.calculate(statistics, amount);
      expect(profit).toBe(expected);
    });
  });
});
