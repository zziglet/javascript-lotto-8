import WinningNumbersValidator from "../../src/validator/WinningNumbersValidator.js";

describe("WinningNumbersValidator 테스트", () => {
  test("당첨 번호가 6개가 아니면 예외가 발생한다.", () => {
    const invalidInputs = ["1,2,3,4,5", "1,2,3,4,5,6,7"];
    invalidInputs.forEach(input => {
      expect(() => {
        WinningNumbersValidator.validate(input);
      }).toThrow("[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.");
    });
  });
});
