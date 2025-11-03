import Lotto from './Lotto.js';
import Constant from '../constants/Constant.js';

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#winningNumbers = new Lotto(numbers);
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (bonusNumber < Constant.LOTTO.MIN_NUMBER || bonusNumber > Constant.LOTTO.MAX_NUMBER) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE}`);
    }
    if (this.#winningNumbers.hasNumber(bonusNumber)) {
      throw new Error(`${Constant.ERROR_PREFIX} ${Constant.ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER}`);
    }
  }

  match(lotto) {
    const matchCount = lotto.countMatches(this.#winningNumbers.getNumbers());
    const hasBonus = lotto.hasNumber(this.#bonusNumber);
    return { matchCount, hasBonus };
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumbers;
