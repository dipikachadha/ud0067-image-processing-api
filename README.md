# Image Processing API
This API was developed as a part of Udacity's Full Stack Nanodegree program. The API uses `sharp` to resize a given set of images to custom dimensions.

## Access
The API has a simple access. You want to hit the `/api` endpoint with parameters like so:

`/api?img=<image_name>&height=<height_px>&width=<width_px>`

All parameters are required. Example queries:
`http://localhost:8000/api?img=fjord&height=100&width=500`

## Development
The app is built using typescript. All contributions need to stick to Google's linting rules. The exception is `new-cap` rule, since `express` has methods that already violate the rule.

## Scripts
The following scripts are implemented:
- `lint`: Runs `eslint` with Google's rule deck.
- `lint-fix`: Cheat script to fix some easy linting issues.
- `dev`: A convenience development script using `ts-node`. Saves effort to recompile.
- `build`: Build script, called automatically when one `start`s the project.
- `start`: Start production space API usage.
- `test`: Start tests using jest.

For production mode, just use the `start` script. Everything else is developer's convenience.

## License
MIT