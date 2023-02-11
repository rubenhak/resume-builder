
import { Command } from 'commander';

import setupServer from './commands/server';
import setupGenerateHtml from './commands/generate';
import setupGeneratePdf from './commands/pdf';

const program = new Command();

setupServer(program);
setupGenerateHtml(program);
setupGeneratePdf(program);

program.parse();