import Constant from "../constants/Constant.js";

const BonusNumberValidator = {
  validate(input, winningNumbers) {
    if (isNaN(input) || input.trim() === '') {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE}`);
    }
    const bonusNumber = Number(input);
    if (bonusNumber < Constant.LOTTO.MIN_NUMBER || bonusNumber > Constant.LOTTO.MAX_NUMBER) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE}`);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER}`);
    }
  },
};

export default BonusNumberValidator;
