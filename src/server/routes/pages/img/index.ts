import * as express from 'express';
import * as Path from 'path';
import { ServerState } from '../../../types';

const URL_PATH = '/img';

export default function(router: express.Router, state: ServerState)
{
    router.get(URL_PATH, async function(req, res) {

        const localPath = req.query.path as string;
        if (!localPath) {
            res.send("Not Found");
            return;
        }

        const absPath = Path.resolve(state.resumeDir, localPath);

        res.sendFile(absPath);
    });
}