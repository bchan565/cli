let execute = require('./execute.js');
let userExp = require('./userExp.js');
let utilities = require('./utilities.js');
let lodash = require('lodash')

class CLI {
    constructor() {
        let git = 'git ';
        this.remote = utilities.getFile('./package.json').repository;
        this.gitCommands = {
            commit: git + 'commit -am "',
            pushUpStream: git + `push --set-upstream ${this.remote} `,
            setGitAlias: git + 'config --global alias.',
            deleteGitAlias: git + 'config --global --unset alias.',
            reset: git + 'reset --'
        }
        this.unixCommands = {
            setAlias: 'alias ',
            deleteAlias: 'unalias -a '
        }
    }

    commit(message) {
        console.log(execute.command(`${this.gitCommands.commit}${message}"`));
    }

    push() {
        if (this.remote) {
            let currentBranch = this.getCurrentBranch();
            console.log(execute.command(`${this.gitCommands.pushUpStream}${currentBranch}`).toString());
        } else {
            throw 'Error! No such package.json with a repository field'
        }

    }

    commitAndPush(message) {
        this.commit(message);
        this.push();
    }

    createAlias(alias, command, isGit) {
        if (isGit) {
            execute.command(`${this.gitCommands.setGitAlias}${alias} "${command}"`)
        } else {
            execute.command(`${this.unixCommands.setAlias}${alias}="${command}"`)
        }
        // 'git config --global alias.st status '
        // 'alias p="pwd"'
    }

    deleteAlias(alias, isGit) {
        if (isGit) {
            execute.command(`${this.gitCommands.deleteGitAlias}${alias}`)
        } else {
            execute.command(`${this.unixCommands.deleteAlias}${alias}`)

        }
        // 'git config --global --unset alias.st'
        // 'unalias [-a] [alias_name(s)]'
    }

    reset(isSoft) {
            if (isSoft) {
                execute.command(`${this.gitCommands.reset}soft HEAD~1`)
            } else {
                execute.command(`${this.gitCommands.reset}hard HEAD~1`)
            }
        } //git clean -f -> look it up, deletes untracked files

    configRepo(gitRepo, destination) {
        let packageJson = utilities.getFile('./package.json');
        if (packageJson) {
            lodash.assign(packageJson, {
                repository: gitRepo
            })
            utilities.saveFile(destination + '/package.json', packageJson);
        } else {
            packageJson = {
                repository: gitRepo
            }
            utilities.saveFile(destination + '/package.json', packageJson);

        }
    }

    getCurrentBranch() {
        let currentBranch = execute.command(`git rev-parse --abbrev-ref HEAD`).toString();
        return currentBranch;
    }

    rebaseAndPush(branchToPush) {
        execute.command(`git checkout master`).toString();
        execute.command(`git fetch origin`).toString();
        execute.command(`git reset origin/master --hard`).toString();
        execute.command(`git checkout ${branchToPush}`).toString();
        execute.command(`git rebase origin/master -i`).toString();
        execute.command(`git push origin ${branchToPush} -f`).toString();

    }
}

module.exports = new CLI();