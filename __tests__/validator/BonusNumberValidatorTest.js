import BonusNumberValidator from "../../src/validator/BonusNumberValidator.js";

describe("BonusNumberValidator 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      BonusNumberValidator.validate("abc", winningNumbers);
    }).toThrow("[ERROR] 보너스 번호는 숫자여야 합니다.");
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      BonusNumberValidator.validate("46", winningNumbers);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      BonusNumberValidator.validate("6", winningNumbers);
    }).toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  });
});
