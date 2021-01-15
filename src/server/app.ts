import express, {Application} from 'express';
import loggerMiddleware from 'middleware/logger';

export default class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initMiddlewares();
  }

  private initMiddlewares() {
    this.app.use(loggerMiddleware);
  }

  public listen() {
    this.app.listen(this.port, () => {
      return console.log(`Server started on port ${this.port}`);
    });
  }
}

