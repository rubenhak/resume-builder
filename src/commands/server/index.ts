import { Command } from 'commander';

import { executeServer } from './command';

const DEFAULT_PORT = 8787;

export default function(program: Command)
{
    program.command('server')
        .description('Run web server')
        .argument('<path>', 'Resume Spec YAML')
        .option('--port <port>', 'port')
        .action(async (path, options) => {

            await executeServer(options.port ?? DEFAULT_PORT, path);

        });
}