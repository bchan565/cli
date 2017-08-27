var child_process = require('child_process');

class Execute {
    constuctor() {
        this.options = {
            stdio: 'ignore',
            encoding: 'utf8'
        }

    }

    command(cmd, options, errorMessage) {
        if (cmd instanceof Array) {
            cmd = cmd.join(' && ');
        }
        try {
            return child_process.execSync(cmd, this.options).toString();;

        } catch (error) {
            return error.toString();
        }
    }
}

module.exports = new Execute();