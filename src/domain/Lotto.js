import Constant from "../constants/Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== Constant.LOTTO.NUMBER_COUNT) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_COUNT}`);
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS}`);
    }
    for (const number of numbers) {
      if (number < Constant.LOTTO.MIN_NUMBER || number > Constant.LOTTO.MAX_NUMBER) {
        throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE}`);
      }
    }
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  countMatches(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number)).length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
