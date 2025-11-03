import Lotto from "../../src/domain/Lotto.js";
import LottoGenerator from "../../src/service/LottoGenerator.js";
import LottoMachine from "../../src/service/LottoMachine.js";

jest.mock("../../src/service/LottoGenerator.js");

describe("LottoMachine 테스트", () => {
  test("issue 메서드는 금액만큼 로또를 생성해야 한다.", () => {
    const mockLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    LottoGenerator.generate.mockReturnValue(mockLotto);

    const amount = 8000;
    const lottos = LottoMachine.issue(amount);

    expect(lottos.length).toBe(8);
    expect(lottos.every(lotto => lotto instanceof Lotto)).toBe(true);
    expect(LottoGenerator.generate).toHaveBeenCalledTimes(8);
  });
});
