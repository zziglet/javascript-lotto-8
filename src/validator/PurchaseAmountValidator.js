const PurchaseAmountValidator = {
  validate(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    const amount = Number(input);
    if (amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
  },
};

export default PurchaseAmountValidator;
