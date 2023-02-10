import * as express from 'express';
import { loadResumeSpec } from '../../../../loader';
import { ServerState } from '../../../types';

const URL_PATH = '/';
const EJS_TEMPLATE = 'pages/index';

export default function(router: express.Router, state: ServerState)
{
    router.get(URL_PATH, async function(req, res) {
 
        const resumeSpec = await loadResumeSpec(state.resumePath);

        const renderData = {
            resume: resumeSpec,
            isStaticOutput: false
        }
        res.render(EJS_TEMPLATE, renderData);
    });
}
