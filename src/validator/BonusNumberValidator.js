const BonusNumberValidator = {
  validate(input, winningNumbers) {
    if (isNaN(input) || input.trim() === '') {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    const bonusNumber = Number(input);
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  },
};

export default BonusNumberValidator;
