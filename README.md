# Command Line Interface Tool

## About
- A command line tool that can automates commands through javascript in the command line, and allows for manipulation of files
- The purpose of this command line tool is to automate things in the command line that are monotonous, such as Git commands. I intend to use this for school, starting the fall of 2017.
- Uses NodeJS and Node Package Manager
- Known command lines that work: Iterm2, Git Bash, Cmder. (some commands that cli uses can break depending on the Operatiing System, such as "grep")
- This command line tool is based off what I learned from my time as an intern at IGT
- I can be reached at brandonchan@utexas.edu

## Installation

1. Navigate to the cli directory in command line.
2. Run "npm install" and "npm link" (must have NodeJS and node package manager).
3. Cli should be ready for use. Through "npm link," the command "cli" will be global.

## Instructions

### Getting it to work

- Run through the installation instructions above.
- In order to run the functionality of cli, type "cli" in the command line. This will bring up a menu of operations you can perform.
- Bringing up the menu results in user prompting for a menu option. Choose a menu operation to perform.
- Additionally, if a user already knows the operation choice in advance, enter "cli <operation>" in the command line, and that operation will be executed immediately.

### Menu Options

#### Commit and Push
1. Upon this option, you will be prompted to provide a commit message.
- This function breaks if an empty commit message is provided, or if there is nothing to commit.
2. This will commit all changes, staged or unstaged
3. You must have a package.json in your current directory. cli will read for a package.json with a repository field, and used that repository to push it to the remote.

#### Alias
1. This function allows you to add or delete git and regular aliases to your command line
- Known errors: aliasing regular commands does not work at the moment.
- Linux aliasing only works in the shell that you originally alias, and since this uses child processes, it will forget an alias you create.

#### Reset
1. Soft reset: Reset the HEAD of your current branch by 1, but keep the changes that were made by that commit.
2. Hard reset: Reset the Head of your current branch by 1, but discard any changes made by that commit.

#### Repo
1. Set your repository on a package.json in the current directory with a given repo.
2. If there is no such package.json, then create a package.json, and make a repository field.
