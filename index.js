#!/usr/bin/env node

let execute = require('./execute.js');
let cli = require('./cliLibrary.js');
let cliPrompt = require('./cliPrompt.js')
let colors = require('colors');

let option = process.argv[2];

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