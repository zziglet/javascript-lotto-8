import { Console } from "@woowacourse/mission-utils";
import PurchaseAmountValidator from "../validator/PurchaseAmountValidator.js";
import OutputView from "./OutputView.js";

const InputView = {
  async readPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        PurchaseAmountValidator.validate(input);
        return Number(input);
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  },

  async readWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        WinningNumbersValidator.validate(input);
        return WinningNumbersValidator.parse(input);
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  },
};

export default InputView;