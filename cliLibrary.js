let execute = require('./execute.js');


class Cli {
    constructor() {
        let git = 'git ';
        this.gitCommands = {
            commit: git + 'commit -am "'
        }
    }

    commit(message) {
        console.log(execute.command(`${this.gitCommands.commit}${message}"`));
    }

    push() {
        let currentBranch = this.getCurrentBranch();
        console.log(execute.command(`git push --set-upstream origin ${currentBranch}`).toString());
    }

    commitAndPush(message) {
        this.commit(message);
        this.push();
    }

    setAlias(alias, command) {
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

module.exports = new Cli();