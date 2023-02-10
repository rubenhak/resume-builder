import _ from 'the-lodash';
import { loadResumeSpec } from '../../loader';
import { Server } from '../../server';


export async function executeServer(port: number, resumePath: string)
{
    const resumeSpec = await loadResumeSpec(resumePath);
    console.log(resumeSpec);

    const server = new Server(port, { resumePath: resumePath });
    await server.start();
}