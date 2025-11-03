import Constant from "../constants/Constant.js";
import LottoGenerator from "./LottoGenerator.js";

const LottoMachine = {
  issue(amount) {
    const count = amount / Constant.LOTTO.PRICE;
    return Array.from({ length: count }, () => LottoGenerator.generate());
  },
};

export default LottoMachine;
