import _ from 'the-lodash';
import * as Path from 'path';
import { loadResumeSpec } from '../../loader';
import { Server } from '../../server';


export async function executeServer(port: number, resumePath: string)
{
    const resumeSpec = await loadResumeSpec(resumePath);
    console.log(resumeSpec);

    const resumeDir = Path.dirname(resumePath)

    const server = new Server(port, { resumePath: resumePath, resumeDir: resumeDir });
    await server.start();
}