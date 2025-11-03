import Rank from "../src/domain/Rank.js";

describe("Rank 클래스 테스트", () => {
  test("of 메서드는 일치 개수와 보너스 여부로 정확한 등수를 반환한다.", () => {
    expect(Rank.of(6, false)).toBe(Rank.FIRST);
    expect(Rank.of(5, true)).toBe(Rank.SECOND);
    expect(Rank.of(5, false)).toBe(Rank.THIRD);
    expect(Rank.of(4, false)).toBe(Rank.FOURTH);
    expect(Rank.of(3, false)).toBe(Rank.FIFTH);
    expect(Rank.of(2, false)).toBe(Rank.NONE);
  });
});
