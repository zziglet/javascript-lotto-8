import PurchaseAmountValidator from "../../src/validator/PurchaseAmountValidator.js";

describe("PurchaseAmountValidator 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      PurchaseAmountValidator.validate("abc");
    }).toThrow("[ERROR] 구입 금액은 숫자여야 합니다.");
  });
});
