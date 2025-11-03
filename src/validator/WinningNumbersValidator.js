const WinningNumbersValidator = {
  validate(input) {
    const numbers = input.split(",").map(n => n.trim());
    if (numbers.length !== 6 || numbers.some(n => isNaN(n) || n === '')) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.");
    }

    const numericNumbers = numbers.map(Number);
    if (numericNumbers.some(n => n < 1 || n > 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (new Set(numericNumbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    }
  },

  parse(input) {
    return input.split(",").map(n => Number(n.trim()));
  },
};

export default WinningNumbersValidator;
