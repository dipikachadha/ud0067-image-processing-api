import express, {Request, Response} from 'express';
import path from "path";
import sharp from "sharp";
import fs from "fs";

export default class ImageController {
  public endpoint = '/api';
  public router = express.Router();

  constructor() {
    this.router.get(this.endpoint, this.handleResize);
  }

  // Keep as an arrow func to preserve this context
  handleResize = async (req: Request, res: Response) => {
    const img = req.query.img;
    const height: number = Number(req.query.height);
    const width: number = Number(req.query.width);
    console.log("Resizing!")
    const currentDir = path.resolve(__dirname);
    const assetsPath = path.resolve(__dirname, "../src/images/starter/images");
    const cacheDir = currentDir + "/cache/";

    fs.mkdirSync(cacheDir, {recursive: true});
    // try {
    //   if (!fs.existsSync(cacheDir)) {
    //     fs.mkdir(cacheDir, e => {
    //       if (e) {
    //         throw Error("Filesystem Error:" + e)
    //       }});
    //     }  
    // } catch (e) {
    //   throw Error(e);
    // }

    console.log(`Picking images from ${assetsPath}`);
    const imgOrig = assetsPath + "/" + img + ".jpg";
    const imgOutput = cacheDir + img 
                        + "_" + String(height) 
                        + "_" + String(width)
                        + ".jpg";

    try {
      // Resize image
      // TODO: Resize only if the image does not already exist
      await sharp(imgOrig).resize(width, height).toFile(imgOutput);

      // Serve it down
      const stream = fs.createReadStream(imgOutput);
      stream.pipe(res);
    } catch (e) {
      throw Error("Error " + String(e));
    }
  }
};
