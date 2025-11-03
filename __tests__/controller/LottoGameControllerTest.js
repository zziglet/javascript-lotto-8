import LottoGameController from "../../src/controller/LottoGameController.js";
import InputView from "../../src/view/InputView.js";
import OutputView from "../../src/view/OutputView.js";
import LottoMachine from "../../src/service/LottoMachine.js";
import WinningService from "../../src/service/WinningService.js";
import ProfitCalculator from "../../src/service/ProfitCalculator.js";
import WinningNumbers from "../../src/domain/WinningNumbers.js";

jest.mock("../../src/view/InputView.js");
jest.mock("../../src/view/OutputView.js");
jest.mock("../../src/service/LottoMachine.js");
jest.mock("../../src/service/WinningService.js");
jest.mock("../../src/service/ProfitCalculator.js");

describe("LottoGameController 테스트", () => {
  let controller;

  beforeEach(() => {
    controller = new LottoGameController();
  });

  test("run 메서드는 전체 게임 흐름을 올바르게 제어한다.", async () => {
    // Given
    const purchaseAmount = 8000;
    const lottos = [{}, {}]; // Mock lottos
    const winningNumbersRaw = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const ranks = [{}, {}]; // Mock ranks
    const statistics = new Map();
    const profitRate = 62.5;

    InputView.readPurchaseAmount.mockResolvedValue(purchaseAmount);
    LottoMachine.issue.mockReturnValue(lottos);
    InputView.readWinningNumbers.mockResolvedValue(winningNumbersRaw);
    InputView.readBonusNumber.mockResolvedValue(bonusNumber);
    WinningService.checkWinnings.mockReturnValue(ranks);
    WinningService.calculateStatistics.mockReturnValue(statistics);
    ProfitCalculator.calculate.mockReturnValue(profitRate);

    // When
    await controller.run();

    // Then
    expect(InputView.readPurchaseAmount).toHaveBeenCalled();
    expect(LottoMachine.issue).toHaveBeenCalledWith(purchaseAmount);
    expect(OutputView.printPurchaseResult).toHaveBeenCalledWith(lottos);
    expect(InputView.readWinningNumbers).toHaveBeenCalled();
    expect(InputView.readBonusNumber).toHaveBeenCalledWith(expect.any(WinningNumbers));
    expect(WinningService.checkWinnings).toHaveBeenCalledWith(lottos, expect.any(WinningNumbers));
    expect(WinningService.calculateStatistics).toHaveBeenCalledWith(ranks);
    expect(ProfitCalculator.calculate).toHaveBeenCalledWith(statistics, purchaseAmount);
    expect(OutputView.printStatistics).toHaveBeenCalledWith(statistics, profitRate);
  });
});
