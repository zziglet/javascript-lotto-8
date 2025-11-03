import { Random } from "@woowacourse/mission-utils";
import Lotto from "../../src/domain/Lotto.js";
import LottoGenerator from "../../src/service/LottoGenerator.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe("LottoGenerator 테스트", () => {
  test("generate 메서드는 유효한 Lotto 객체를 반환해야 한다.", () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6];
    Random.pickUniqueNumbersInRange.mockReturnValue(mockNumbers);

    const lotto = LottoGenerator.generate();

    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.getNumbers()).toEqual(mockNumbers.sort((a, b) => a - b));
    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);
  });
});
