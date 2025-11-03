const Constant = Object.freeze({
  LOTTO: Object.freeze({
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
    NUMBER_COUNT: 6,
    PRICE: 1000,
  }),

  MESSAGES: Object.freeze({
    PURCHASE_AMOUNT_PROMPT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBERS_PROMPT: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER_PROMPT: '\n보너스 번호를 입력해 주세요.\n',
    PURCHASE_RESULT_HEADER: (count) => `\n${count}개를 구매했습니다.`,
    STATISTICS_HEADER: '\n당첨 통계\n---',
    PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  }),

  ERROR_PREFIX: '[ERROR]',
  ERROR_MESSAGES: Object.freeze({
    INVALID_NUMBER: '숫자가 잘못된 형식입니다.',
    // PurchaseAmountValidator
    INVALID_PURCHASE_AMOUNT: '구입 금액은 숫자여야 합니다.',
    NON_POSITIVE_PURCHASE_AMOUNT: '구입 금액은 1,000원 이상의 양수여야 합니다.',
    PURCHASE_AMOUNT_NOT_IN_UNITS: '구입 금액은 1,000원 단위로 입력해야 합니다.',
    // WinningNumbersValidator
    INVALID_WINNING_NUMBERS_COUNT: '당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.',
    INVALID_WINNING_NUMBER_TYPE: '당첨 번호는 숫자여야 합니다.',
    WINNING_NUMBER_OUT_OF_RANGE: '당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
    DUPLICATE_WINNING_NUMBERS: '당첨 번호에 중복된 숫자가 있습니다.',
    // BonusNumberValidator
    INVALID_BONUS_NUMBER_TYPE: '보너스 번호는 숫자여야 합니다.',
    BONUS_NUMBER_OUT_OF_RANGE: '보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    DUPLICATE_BONUS_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
    // Lotto
    INVALID_LOTTO_NUMBERS_COUNT: '로또 번호는 6개여야 합니다.',
  }),
});

export default Constant;
