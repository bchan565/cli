#!/usr/bin/env node

let execute = require('./execute.js');
let cli = require('./cliLibrary.js');
let cliPrompt = require('./cliPrompt.js')



let option = process.argv[2];
if(option === 'cap') {
	let message = cliPrompt.commitMessagePrompt();
	cli.commit(message);
	cli.push();
}