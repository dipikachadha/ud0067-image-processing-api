import {App} from './App';
import ImageController from './image.controller';

const app = new App(
    /* controllers*/ [new ImageController()],
    /* port*/ 8000,
    /* help*/ 'Image Processing API on endpoint /img/:height/:width',
);

const server = app.listen();
export default server;
// module.exports = server;
