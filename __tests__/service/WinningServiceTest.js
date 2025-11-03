import Rank from "../../src/domain/Rank.js";
import WinningService from "../../src/service/WinningService.js";

describe("WinningService 테스트", () => {
  test("checkWinnings는 모든 로또의 당첨 결과를 Rank 배열로 반환한다.", () => {
    const lottos = [{}, {}, {}, {}, {}]; // Mock lottos
    const winningNumbers = {
      match: jest.fn()
        .mockReturnValueOnce({ matchCount: 6, hasBonus: false }) // 1등
        .mockReturnValueOnce({ matchCount: 3, hasBonus: false }) // 5등
        .mockReturnValueOnce({ matchCount: 3, hasBonus: false }) // 5등
        .mockReturnValueOnce({ matchCount: 2, hasBonus: false }) // 낙첨
        .mockReturnValueOnce({ matchCount: 1, hasBonus: true }), // 낙첨
    };

    const ranks = WinningService.checkWinnings(lottos, winningNumbers);

    expect(ranks).toEqual([Rank.FIRST, Rank.FIFTH, Rank.FIFTH, Rank.NONE, Rank.NONE]);
  });
});
