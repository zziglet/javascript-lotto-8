import Lotto from './Lotto.js';

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#winningNumbers = new Lotto(numbers);
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (this.#winningNumbers.hasNumber(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
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
