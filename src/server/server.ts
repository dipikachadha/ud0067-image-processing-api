import { App } from './App';
import ImageController from './image.controller';

export const server = new App(
    /*controllers*/ [new ImageController()],
    /*port*/        8000,
    /*help*/        "Image Processing API on endpoint /img/:height/:width"
    );

// module.exports = server;