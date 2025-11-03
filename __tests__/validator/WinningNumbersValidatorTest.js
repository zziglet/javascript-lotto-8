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

  test("당첨 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    const input = "1,2,3,4,5,a";
    expect(() => {
      WinningNumbersValidator.validate(input);
    }).toThrow("[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.");
  });

  test("당첨 번호에 공백이 포함되어 있어도 정상 처리된다.", () => {
    const input = "1, 2, 3, 4, 5, 6";
    expect(() => {
      WinningNumbersValidator.validate(input);
    }).not.toThrow();
  });

  test("당첨 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const input = "1,2,3,4,5,46";
    expect(() => {
      WinningNumbersValidator.validate(input);
    }).toThrow("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const input = "1,2,3,4,5,5";
    expect(() => {
      WinningNumbersValidator.validate(input);
    }).toThrow("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
  });
});
