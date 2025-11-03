import LottoGenerator from "./LottoGenerator.js";

const LottoMachine = {
  issue(amount) {
    const count = amount / 1000;
    return Array.from({ length: count }, () => LottoGenerator.generate());
  },
};

export default LottoMachine;
