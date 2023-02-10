import { Command } from 'commander';

import { executeGenerate } from './command';

export default function(program: Command)
{
    program.command('generate')
        .description('Generate resume HTML')
        .argument('<path>', 'Resume Spec YAML')
        .action(async (path, options) => {

            await executeGenerate(path);

        });
}