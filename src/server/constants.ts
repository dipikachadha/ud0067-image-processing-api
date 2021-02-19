import path from "path";

export const NODE_ENV = process.env['NODE_ENV'];

export const debugInfo = (msg: String) => {
    if (NODE_ENV) {
        console.info('DEBUG_INFO: ', msg);
    }
}

debugInfo(`Working in mode: ${NODE_ENV}`);

export const ASSETS_PATH = path.resolve(__dirname, 
    NODE_ENV === 'development' ? 
    '../images/starter/images':
    '../src/images/starter/images');

// export const CACHE_PATH = path.resolve(__dirname,
//     NODE_ENV === 'development' ?
//     '../../cache' : './cache')