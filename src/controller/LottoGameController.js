import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoMachine from "../service/LottoMachine.js";
import WinningNumbers from "../domain/WinningNumbers.js";
import WinningService from "../service/WinningService.js";
import ProfitCalculator from "../service/ProfitCalculator.js";

class LottoGameController {
  async run() {
    const { purchaseAmount, lottos } = await this.#inputAndIssuePhase();
    const { statistics, profitRate } = await this.#winningPhase(lottos, purchaseAmount);
    this.#outputPhase(statistics, profitRate);
  }

  async #inputAndIssuePhase() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    const lottos = LottoMachine.issue(purchaseAmount);
    OutputView.printPurchaseResult(lottos);
    return { purchaseAmount, lottos };
  }

  async #winningPhase(lottos, purchaseAmount) {
    const winningNumbersRaw = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber(winningNumbersRaw);
    const winningNumbers = new WinningNumbers(winningNumbersRaw, bonusNumber);

    const ranks = WinningService.checkWinnings(lottos, winningNumbers);
    const statistics = WinningService.calculateStatistics(ranks);
    const profitRate = ProfitCalculator.calculate(statistics, purchaseAmount);

    return { statistics, profitRate };
  }

  #outputPhase(statistics, profitRate) {
    OutputView.printStatistics(statistics, profitRate);
  }
}

export default LottoGameController;
