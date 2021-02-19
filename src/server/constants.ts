import path from "path";

export const NODE_ENV = process.env['NODE_ENV'];
if (NODE_ENV) {
    console.info("Working in mode: ", process.env['NODE_ENV']);
}

export const ASSETS_PATH = path.resolve(__dirname, 
    NODE_ENV === 'development' ? 
    '../images/starter/images':
    '../src/images/starter/images');

export const CACHE_PATH = path.resolve(__dirname,
    NODE_ENV === 'development' ?
    '../../cache' : './cache')