import BonusNumberValidator from "../../src/validator/BonusNumberValidator.js";

describe("BonusNumberValidator 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      BonusNumberValidator.validate("abc", winningNumbers);
    }).toThrow("[ERROR] 보너스 번호는 숫자여야 합니다.");
  });
});
