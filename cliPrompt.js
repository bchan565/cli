var prompt = require('readline-sync');

class Prompt {
    constructor() {

    }

    displayMenu() {
        console.log('Command Line Tool');
        console.log('cap = Commit And Push');
    }

    optionPrompt() {
        let option = prompt.question('Choose an operation to perform: ');
        return option;
    }

    commitMessagePrompt() {
        let message = prompt.question('Type in a commit message: ');
        return message;
    }
}

module.exports = new Prompt();