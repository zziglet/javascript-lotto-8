import LottoGameController from "./controller/LottoGameController.js";

class App {
  async run() {
    const controller = new LottoGameController();
    await controller.run();
  }
}

export default App;
