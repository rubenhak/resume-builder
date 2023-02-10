import * as express from 'express';
import { ServerState } from '../../../types';

const URL_PATH = '/';
const EJS_TEMPLATE = 'pages/index';

export default function(router: express.Router, state: ServerState)
{
    router.get(URL_PATH, async function(req, res) {
        const renderData = {
            resume: state.resume
        }
        res.render(EJS_TEMPLATE, renderData);
    });
}
