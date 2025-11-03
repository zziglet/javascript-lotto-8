import Lotto from '../Lotto.js';

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
  }
}

export default WinningNumbers;
