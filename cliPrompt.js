var prompt = require('readline-sync');
let userExp = require('./userExp.js');

class Prompt {
    constructor() {

    }

    displayMenu() {
        console.log(userExp.colorString('Command Line Tool', 'cyan'));
        console.log(userExp.colorString('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', 'red'))
        console.log(userExp.colorString('cap = Commit And Push', 'cyan'));
        console.log(userExp.colorString('alias = Create or Delete a Unix/Git alias', 'green'));
        console.log(userExp.colorString('sreset/hreset = reset current HEAD; sreset = soft, hreset = hard', 'yellow'));
        console.log(userExp.colorString('repo = set a repo to an existent package.json, or create a package.json with a repo', 'cyan'));
        console.log(userExp.colorString('done', 'cyan'));
        console.log(userExp.colorString('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', 'red'))
    }

    optionPrompt() {
        let option = prompt.question(userExp.colorString('Choose an operation to perform: ', 'green'));
        return option;
    }

    commitMessagePrompt() {
        let message = prompt.question(userExp.colorString('Type in a commit message: ', 'cyan'));
        return message;
    }

    aliasPrompt() {
        let aliasBundle = {}
        aliasBundle.choice = prompt.question(userExp.colorString('Is this a git or regular alias? (git/reg): ', 'cyan'));
        aliasBundle.config = prompt.question(userExp.colorString('Do you want to add or delete an alias? (add/del): ', 'green'));
        return aliasBundle;
    }

    addAliasPrompt(choice) {
        let addConfig = {}
        addConfig.command = prompt.question(userExp.colorString(`Choose a ${choice} command to alias: `, 'blue'));
        addConfig.alias = prompt.question(userExp.colorString(`Choose a name to alias command ${addConfig.command}: `, 'green'));
        return addConfig;
    }

    deleteAliasPrompt(choice) {
        let aliasToDelete = prompt.question(userExp.colorString(`Choose a ${choice} alias you want to delete: `, 'magenta'));
        return aliasToDelete;
    }

    repoPrompt() {
        let repo = prompt.question(userExp.colorString('Type in a GitHub url you want to use as a repo: ', 'cyan'));
        return repo;
    }

    destinationPrompt() {
        let defaultDirectory = process.cwd();
        let directory = prompt.question(userExp.colorString('Type in directory for package repo (default is currentdirectory, just type enter): ', 'green'));
        directory = directory || defaultDirectory;
        return directory;
    }

    pushRebasePrompt() {
        let branch = prompt.question(userExp.colorString('Enter a branch you want to rebase on to and push: ', 'cyan'));
        return branch;
    }
}

module.exports = new Prompt();