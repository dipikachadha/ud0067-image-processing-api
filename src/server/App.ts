import express, {Application} from 'express';
import logger from './middleware/logger';
import validateParams from './middleware/validateParams';

export default class App {
  public app: Application;
  public port: number;
  public helpMsg: string;

  constructor(controllers: [any],
              port: number,
              help: string) {
    this.app = express();
    this.port = port;
    this.helpMsg = help;
    this.initMiddlewares();
    this.initControllers(controllers);
  }

  // Generic middleware and controller installation
  private initMiddlewares() {
    [logger, validateParams].forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private initControllers(controllers: [any]) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      return console.log(`Server started on port ${this.port}`);
    });

    // this.app.get('/', (_, res) => res.send(this.helpMsg));
  }
}

