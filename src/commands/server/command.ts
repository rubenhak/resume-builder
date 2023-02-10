import _ from 'the-lodash';
import { Server } from '../../server';
import { ResumeSpec } from '../../types';


export async function executeServer(port: number, resumeSpec: ResumeSpec)
{
    const server = new Server(port, { resume: resumeSpec });
    await server.start();
}