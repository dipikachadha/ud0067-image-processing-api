import express, {Request, Response} from 'express';

class Routes {
  public path = '/img/:height?/:width?';
  public router = express.Router();

  constructor() {
    this.router.get(this.path, this.handleResize);
  }

  // Keep as an arrow func to preserve this context
  handleResize = async (req: Request, res: Response) => {
    const img = req.query.img;
    const height: number = Number(req.params.height);
    const width: number = Number(req.params.width);

  }
}
