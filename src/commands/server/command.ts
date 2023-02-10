import _ from 'the-lodash';
import { Server } from '../../server';


export async function executeServer(port: number)
{
    const server = new Server(port);
    await server.start();
}