import WinningNumbers from "../src/domain/WinningNumbers.js";

describe("WinningNumbers 클래스 테스트", () => {
  test("보너스 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6], 0);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6], 46);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  });

  test("match 메서드는 일치하는 번호 개수와 보너스 번호 일치 여부를 반환한다.", () => {
    const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
    const lotto1 = { countMatches: () => 3, hasNumber: () => false }; // 모의 Lotto 객체
    const lotto2 = { countMatches: () => 5, hasNumber: () => true }; // 모의 Lotto 객체

    expect(winningNumbers.match(lotto1)).toEqual({ matchCount: 3, hasBonus: false });
    expect(winningNumbers.match(lotto2)).toEqual({ matchCount: 5, hasBonus: true });
  });
});
