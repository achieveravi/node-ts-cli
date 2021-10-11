#!/usr/bin/env node

import chalk from 'chalk';
import boxen, {Options} from 'boxen';
import yargs from 'yargs';


const options = yargs
.usage('Usage -n name')
.option('n', {alias: 'name', description: 'Your Name', type: 'string', demandOption: true})
.argv;

const greeting = chalk.white.bold(`hello! ${(options as any).name}`);
const boxenOptions: Options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: 'red'
}

const messageBox = boxen(greeting, boxenOptions);

console.log(messageBox);