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
        console.log(userExp.colorString('sreset/hreset = reset current HEAD; sreset = soft, hreset = hard', 'yellow'))
        console.log(userExp.colorString('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', 'red'))
    }

    optionPrompt() {
        let option = prompt.question('Choose an operation to perform: ');
        return option;
    }

    commitMessagePrompt() {
        let message = prompt.question('Type in a commit message: ');
        return message;
    }

    aliasPrompt() {
        let choice;
    }
}

module.exports = new Prompt();