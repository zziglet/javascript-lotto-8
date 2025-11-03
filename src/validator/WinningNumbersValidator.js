const WinningNumbersValidator = {
  validate(input) {
    const numbers = input.split(",").map(n => n.trim());
    if (numbers.length !== 6 || numbers.some(n => isNaN(n) || n === '')) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.");
    }
  },
};

export default WinningNumbersValidator;
