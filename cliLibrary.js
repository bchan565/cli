let execute = require('./execute.js');


class Cli {
	constructor(){

	}
	commit(message) {
		console.log(execute.command(`git commit -am "${message}"`));
	}
	push() {
		let currentBranch = this.getCurrentBranch();
		console.log(execute.command(`git push --set-upstream origin ${currentBranch}`).toString());
	}
	getCurrentBranch() {
		let currentBranch = execute.command(`git branch | grep \* | cut -d ' ' -f2`).toString();
		return currentBranch;
	}
}

module.exports = new Cli();