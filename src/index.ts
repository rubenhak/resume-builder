
import { Command } from 'commander';

import setupServer from './commands/server';

const program = new Command();

setupServer(program);

program.parse();