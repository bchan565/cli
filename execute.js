var child_process = require('child_process');
let userExp = require('./userExp.js');

class Execute {
    constuctor() {
        this.options = {
            stdio: 'ignore',
            encoding: 'utf8'
        }
        this.flags;

    }

    command(cmd, options, errorMessage) {
        if (cmd instanceof Array) {
            cmd = cmd.join(' && ');
        }
        try {
            if (!this.flags.suppress) {
                console.log(userExp.colorString(cmd, 'green'))
            }
            return child_process.execSync(cmd, this.options).toString();;

        } catch (error) {
            return error.toString();
        }
    }
}

module.exports = new Execute();