import Rank from "../../src/domain/Rank.js";

describe("Rank 클래스 테스트", () => {
  test("of 메서드는 일치 개수와 보너스 여부로 정확한 등수를 반환한다.", () => {
    expect(Rank.of(6, false)).toBe(Rank.FIRST);
    expect(Rank.of(5, true)).toBe(Rank.SECOND);
    expect(Rank.of(5, false)).toBe(Rank.THIRD);
    expect(Rank.of(4, false)).toBe(Rank.FOURTH);
    expect(Rank.of(3, false)).toBe(Rank.FIFTH);
    expect(Rank.of(2, false)).toBe(Rank.NONE);
  });

  test("getter 메서드들은 정확한 값을 반환한다.", () => {
    const third = Rank.THIRD;
    expect(third.getPrize()).toBe(1_500_000);
    expect(third.getDescription()).toBe("5개 일치 (1,500,000원)");
  });

  test("values 메서드는 NONE을 제외한 모든 등수 배열을 반환한다.", () => {
    const values = Rank.values();
    expect(values).toEqual([Rank.FIRST, Rank.SECOND, Rank.THIRD, Rank.FOURTH, Rank.FIFTH]);
    expect(values).not.toContain(Rank.NONE);
  });
});
