var child_process = require('child_process');

class Execute{
	constuctor(){
		this.options = {
			stdio: 'ignore',
			encoding: 'utf8'
		}

	}

	command(cmd, options, errorMessage){
		return child_process.execSync(cmd, this.options);
	}
}

module.exports = new Execute();