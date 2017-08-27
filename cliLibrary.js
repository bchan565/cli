let execute = require('./execute.js');
let userExp = require('./userExp.js');
let utilities = require('./utilities.js');

class CLI {
    constructor() {
        let git = 'git ';
        this.gitCommands = {
            commit: git + 'commit -am "',
            pushUpStream: git + 'push --set-upstream origin ',
            setAlias: git + 'config --global alias.'
        }
    }

    commit(message) {
        console.log(execute.command(`${this.gitCommands.commit}${message}"`));
    }

    push() {
        let currentBranch = this.getCurrentBranch();
        console.log(execute.command(`${this.gitCommands.pushUpStream}${currentBranch}`).toString());
    }

    commitAndPush(message) {
        this.commit(message);
        this.push();
    }

    createAlias(alias, command) {
        execute.command(`${this.gitCommands.setAlias}${alias} ${command}`)
        'git config --global alias.st status '
    }

    deleteAlias(alias) {
        'git config --global --unset alias.st'
    }

    getCurrentBranch() {
        let currentBranch = execute.command(`git branch | grep \* | cut -d ' ' -f2`).toString();
        return currentBranch;
    }
}

module.exports = new CLI();