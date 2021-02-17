import App from './App';
import ImageController from './image.controller';

const server = new App(
    /*controllers*/ [new ImageController()],
    /*port*/        8000,
    /*help*/        "Image Processing API on endpoint /img/:height/:width"
    );

server.listen();
