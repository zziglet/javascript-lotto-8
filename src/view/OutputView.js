import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printPurchaseResult(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;