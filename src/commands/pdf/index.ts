import { Command } from 'commander';

import { executeGeneratePDF } from './command';

export default function(program: Command)
{
    program.command('pdf')
        .description('Render Resume PDF')
        .argument('<path>', 'Resume Spec YAML')
        .action(async (path, options) => {

            await executeGeneratePDF(path);

        });
}