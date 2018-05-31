#!/usr/bin/env node

let execute = require('./execute.js');
let cli = require('./cliLibrary.js');
let cliPrompt = require('./cliPrompt.js');
let userExp = require('./userExp.js');
let colors = require('colors');
let emoji = require('node-emoji')

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
            console.log(userExp.colorString(`commit and push was successful ${emoji.random().emoji}`, 'green'))
            break;
        case 'alias':
            let aliasBundle = cliPrompt.aliasPrompt();
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
            console.log(userExp.colorString(`configuration of alias was successful! ${emoji.random().emoji}`, 'green'));
            break;
        case 'sreset':
            cli.reset(true);
            console.log(userExp.colorString(`soft reset successful! ${emoji.random().emoji}`, 'green'));
            break;
        case 'hreset':
            cli.reset(false);
            console.log(userExp.colorString(`hard reset successful! ${emoji.random().emoji}`, 'green'));
            break;
        case 'repo':
            let repo = cliPrompt.repoPrompt();
            let destination = cliPrompt.destinationPrompt();
            cli.configRepo(repo, destination);
            console.log(userExp.colorString(`configuration of a repo onto package.json successful! ${emoji.random().emoji}`, 'green'))
            break;

        case 'done':
            let branch = cliPrompt.pushRebasePrompt();
            cli.rebaseAndPush(branch);
            console.log("doneskis");
            break;

        default:
            terminate();
    }

}

function terminate() {
    console.log('Bad input. Terminating...')
    process.exit();

}