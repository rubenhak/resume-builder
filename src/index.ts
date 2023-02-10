
import { Command } from 'commander';

import setupServer from './commands/server';
import setupGenerate from './commands/generate';

const program = new Command();

setupServer(program);
setupGenerate(program);

program.parse();