import Constant from "../constants/Constant.js";

const PurchaseAmountValidator = {
  validate(input) {
    if (isNaN(input)) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT}`);
    }
    const amount = Number(input);
    if (amount <= 0) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.NON_POSITIVE_PURCHASE_AMOUNT}`);
    }
    if (amount % Constant.LOTTO.PRICE !== 0) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.PURCHASE_AMOUNT_NOT_IN_UNITS}`);
    }
  },
};

export default PurchaseAmountValidator;
