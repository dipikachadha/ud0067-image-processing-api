import {Request, Response, NextFunction} from 'express';

export default validateParams(req: Request, res: Response, next: NextFunction) {
  let inputImg: string = req.query.img
  let inputHeight: number = Number(req,params.height);
  let inputWidth: number = Number(req.params.width);

  if (!inputImg || Math.sign(inputHeight) != 1 || Math.sign(inputWidth) != 1) {
    return res.status(400)
              .send(`Bad query parameters: ${inputImg}/${inputHeight}/${inputWidth}`);
  }

  res.validated.img = inputImg;
  res.validated.height = inputHeight;
  res.validated.width = inputWidth;

  next();
}
