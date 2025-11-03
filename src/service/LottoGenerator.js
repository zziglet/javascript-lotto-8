import { Random } from "@woowacourse/mission-utils";
import Lotto from "../domain/Lotto.js";
import Constant from "../constants/Constant.js";

const LottoGenerator = {
  generate() {
    const numbers = Random.pickUniqueNumbersInRange(
      Constant.LOTTO.MIN_NUMBER,
      Constant.LOTTO.MAX_NUMBER,
      Constant.LOTTO.NUMBER_COUNT
    );
    return new Lotto(numbers);
  },
};

export default LottoGenerator;
