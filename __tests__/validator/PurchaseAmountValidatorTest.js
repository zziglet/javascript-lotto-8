import PurchaseAmountValidator from "../../src/validator/PurchaseAmountValidator.js";

describe("PurchaseAmountValidator 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      PurchaseAmountValidator.validate("abc");
    }).toThrow("[ERROR] 구입 금액은 숫자여야 합니다.");
  });

  test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    const invalidAmounts = ["500", "1500"];
    invalidAmounts.forEach(amount => {
      expect(() => {
        PurchaseAmountValidator.validate(amount);
      }).toThrow("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    });
  });

  test("구입 금액이 양수가 아니면 예외가 발생한다.", () => {
    const nonPositiveAmounts = ["0", "-1000"];
    nonPositiveAmounts.forEach(amount => {
      expect(() => {
        PurchaseAmountValidator.validate(amount);
      }).toThrow("[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다.");
    });
  });

  test("정상적인 구입 금액은 예외를 발생시키지 않는다.", () => {
    const validAmounts = ["1000", "8000"];
    validAmounts.forEach(amount => {
      expect(() => {
        PurchaseAmountValidator.validate(amount);
      }).not.toThrow();
    });
  });
});
