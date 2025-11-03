import { Console } from "@woowacourse/mission-utils";
import PurchaseAmountValidator from "../validator/PurchaseAmountValidator.js";
import WinningNumbersValidator from "../validator/WinningNumbersValidator.js";
import BonusNumberValidator from "../validator/BonusNumberValidator.js";
import OutputView from "./OutputView.js";

const InputView = {
  async readPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        this.#handleEndOfInput(input);
        PurchaseAmountValidator.validate(input);
        return Number(input);
      } catch (error) {
        if (this.#isRetryableError(error)) {
          OutputView.printError(error.message);
          continue;
        }
        throw error;
      }
    }
  },

  async readWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        this.#handleEndOfInput(input);
        WinningNumbersValidator.validate(input);
        return WinningNumbersValidator.parse(input);
      } catch (error) {
        if (this.#isRetryableError(error)) {
          OutputView.printError(error.message);
          continue;
        }
        throw error;
      }
    }
  },

  async readBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        this.#handleEndOfInput(input);
        BonusNumberValidator.validate(input, winningNumbers);
        return Number(input);
      } catch (error) {
        if (this.#isRetryableError(error)) {
          OutputView.printError(error.message);
          continue;
        }
        throw error;
      }
    }
  },

  #handleEndOfInput(input) {
    if (input === undefined) {
      throw new Error("입력 스트림이 예기치 않게 종료되었습니다.");
    }
  },

  #isRetryableError(error) {
    return error.message.startsWith("[ERROR]");
  },
};

export default InputView;
