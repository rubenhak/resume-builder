import { Command } from 'commander';

import { executeGenerateHtml } from './command';

export default function(program: Command)
{
    program.command('generate')
        .description('Generate resume HTML')
        .argument('<path>', 'Resume Spec YAML')
        .action(async (path, options) => {

            await executeGenerateHtml(path, {
                htlmFileName: "index.html",
                printable: false
            });

        });
}