import { Command } from 'commander';

import { executeServer } from './command';

export default function(program: Command)
{
    program.command('server')
        .description('Run web server')
        .option('--port <port>', 'port')
        .action(async (options) => {

            await executeServer(options.port ?? 8989);

        });
}