import {Request, Response, NextFunction} from 'express';

export default function logger(req: Request, _: Response, next: NextFunction) {
  console.log(`${req.method}: ${req.path},
      Query: ${JSON.stringify(req.query)}, Params: `, req.params);
  next();
}
