import { Random } from "@woowacourse/mission-utils";
import Lotto from "../domain/Lotto.js";

const LottoGenerator = {
  generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  },
};

export default LottoGenerator;
