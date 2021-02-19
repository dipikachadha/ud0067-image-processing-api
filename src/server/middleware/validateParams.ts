import {Request, Response, NextFunction} from 'express';
import fs from 'fs';

export default function validateParams(req: Request,
    res: Response, next: NextFunction) {
  const inputImg: string = String(req.query.img);
  const inputHeight: number = Number(req.query.height);
  const inputWidth: number = Number(req.query.width);

  if (!inputImg || Math.sign(inputHeight) != 1 || Math.sign(inputWidth) != 1) {
    return res.status(400)
        .send(`Bad query parameters: 
              {img: ${inputImg}, height: ${inputHeight}, width: ${inputWidth}, 
              req.params: ${JSON.stringify(req.params)}}`);
  }

  if (!fs.existsSync(`src/images/starter/images/${inputImg}.jpg`)) {
    return res.status(400)
        .send(`Image does not exist on server: {img: ${inputImg}}`);
  }

  next();
}
