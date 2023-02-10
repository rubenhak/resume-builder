import * as Path from 'path';
import * as express from 'express';
import { sync as FastGlob } from 'fast-glob';
import * as bodyParser from 'body-parser';
import { ServerState } from './types';

export class Server
{
    private _port: number;
    private _app: express.Express;
    private _state: ServerState;

    constructor(port: number, state: ServerState)
    {
        this._app = express();
        this._port = port;
        this._state = state;
    }

    start()
    {
        this._app.set('view engine', 'ejs');
        this._app.set('views', Path.resolve(__dirname, '..', '..', '..', 'src', 'server', 'views'));

        this._app.use(bodyParser.urlencoded({ extended: false }));
        this._app.use(bodyParser.json());

        this._setupRoutes();

        this._app.listen(this._port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this._port}`);
        });
    }

    private _setupRoutes()
    {
        const router = express.Router()

        {
            const routeFiles = FastGlob("routes/pages/*/*.js", {
                cwd: Path.resolve(__dirname)
            });
            for(const filePath of routeFiles)
            {
                const module = require(`./${filePath}`);
                module.default(router, this._state);
            }
        }

        {
            const routeFiles = FastGlob("routes/actions/*/*.js", {
                cwd: Path.resolve(__dirname)
            });
            for(const filePath of routeFiles)
            {
                const module = require(`./${filePath}`);
                module.default(router, this._state);
            }
        }

        this._app.use('/', router);
    }

}