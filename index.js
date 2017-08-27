#!/usr/bin/env node

let execute = require('./execute.js');
let cli = require('./cliLibrary.js');
let cliPrompt = require('./cliPrompt.js');
let userExp = require('./userExp.js');
let colors = require('colors');

let option = process.argv[2];


class flags {
    constructor() {
        if (typeof process.argv[3] !== 'undefined' && process.argv[3].charAt(0) === '-') {
            this.continue = process.argv[3].includes('c') ? true : false;
            this.suppress = process.argv[3].includes('s') ? true : false;
        } else {
            this.suppress = false;
            this.continue = false;
        }
    }
}

execute.flags = new flags();

if (typeof option === 'undefined') {
    cliPrompt.displayMenu();
    option = cliPrompt.optionPrompt();
    performOperation(option);
} else {
    performOperation(option);
}

function performOperation(option) {
    switch (option) {
        case 'cap':
            let message = cliPrompt.commitMessagePrompt();
            cli.commitAndPush(message);
            break;
        case 'alias':
            break;
        case 'sreset':
            break;
        case 'hreset':
            break;
        default:
            terminate();
    }

}

function terminate() {
    console.log('Bad input. Terminating...')
    process.exit();

}