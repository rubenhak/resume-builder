import { Command } from 'commander';
import { loadResumeSpec } from '../../loader';

import { executeServer } from './command';

const DEFAULT_PORT = 8787;

export default function(program: Command)
{
    program.command('server')
        .description('Run web server')
        .argument('<path>', 'Resume Spec YAML')
        .option('--port <port>', 'port')
        .action(async (path, options) => {

            const resumeSpec = await loadResumeSpec(path);
            console.log(resumeSpec);

            await executeServer(options.port ?? DEFAULT_PORT, resumeSpec);

        });
}