import Constant from "../constants/Constant.js";

const WinningNumbersValidator = {
  validate(input) {
    const numbers = input.split(",").map(n => n.trim());
    if (numbers.length !== Constant.LOTTO.NUMBER_COUNT || numbers.some(n => isNaN(n) || n === '')) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT}`);
    }

    const numericNumbers = numbers.map(Number);
    if (numericNumbers.some(n => n < Constant.LOTTO.MIN_NUMBER || n > Constant.LOTTO.MAX_NUMBER)) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE}`);
    }

    if (new Set(numericNumbers).size !== Constant.LOTTO.NUMBER_COUNT) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS}`);
    }
  },

  parse(input) {
    return input.split(",").map(n => Number(n.trim()));
  },
};

export default WinningNumbersValidator;
