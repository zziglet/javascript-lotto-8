const BonusNumberValidator = {
  validate(input, winningNumbers) {
    if (isNaN(input) || input.trim() === '') {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  },
};

export default BonusNumberValidator;
