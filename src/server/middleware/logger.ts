import {Request, Response, NextFunction} from 'express';

export default function loggerMiddleware(req: Request, _: Response, next: NextFunction) {
  console.log(`{req.method}: ${req.path}`);
  next();
}
