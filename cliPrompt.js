var prompt = require('readline-sync');

class Prompt {
	constructor(){

	}

	commitMessagePrompt() {
		let message = prompt.question('Type in a commit message: ');
		return message;
	}
}

module.exports = new Prompt();