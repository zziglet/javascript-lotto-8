import { Console } from "@woowacourse/mission-utils";
import Rank from "../domain/Rank.js";
import Constant from "../constants/Constant.js";

const OutputView = {
  printPurchaseResult(lottos) {
    Console.print(Constant.MESSAGES.PURCHASE_RESULT_HEADER(lottos.length));
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printStatistics(statistics, profitRate) {
    Console.print(Constant.MESSAGES.STATISTICS_HEADER);

    const rankOrder = ["FIFTH", "FOURTH", "THIRD", "SECOND", "FIRST"];
    rankOrder.forEach(rankKey => {
      const rank = Rank[rankKey];
      const count = statistics.get(rank) || 0;
      Console.print(`${rank.getDescription()} - ${count}개`);
    });

    Console.print(Constant.MESSAGES.PROFIT_RATE(profitRate));
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;