const PurchaseAmountValidator = {
  validate(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
  },
};

export default PurchaseAmountValidator;
