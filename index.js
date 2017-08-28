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
            let aliasBundle = cliPrompt.aliasPrompt();
            console.log(aliasBundle)
            if (aliasBundle.choice === 'git') {
                if (aliasBundle.config === 'add') {
                    let addConfig = cliPrompt.addAliasPrompt('git');
                    cli.createAlias(addConfig.alias, addConfig.command, true);
                } else {
                    console.log('made it to else')
                    let aliasToDelete = cliPrompt.deleteAliasPrompt('git');
                    cli.deleteAlias(aliasToDelete, true);
                }
            } else {
                if (aliasBundle.config === 'add') {
                    let addConfig = cliPrompt.addAliasPrompt('unix/regular');
                    cli.createAlias(addConfig.alias, addConfig.command, false);
                } else {
                    let aliasToDelete = cliPrompt.deleteAliasPrompt('regular/unix');
                    cli.deleteAlias(aliasToDelete, false);
                }
            }
            break;
        case 'sreset':
            cli.reset(true);
            break;
        case 'hreset':
            cli.reset(false);
            break;
        default:
            terminate();
    }

}

function terminate() {
    console.log('Bad input. Terminating...')
    process.exit();

}