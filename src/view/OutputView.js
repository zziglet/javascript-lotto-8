import { Console } from "@woowacourse/mission-utils";
import Rank from "../domain/Rank.js";

const OutputView = {
  printPurchaseResult(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printStatistics(statistics, profitRate) {
    Console.print("\n당첨 통계");
    Console.print("---");

    const rankOrder = ["FIFTH", "FOURTH", "THIRD", "SECOND", "FIRST"];
    rankOrder.forEach(rankKey => {
      const rank = Rank[rankKey];
      const count = statistics.get(rank) || 0;
      Console.print(`${rank.getDescription()} - ${count}개`);
    });

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;