class UserExp {
    constructor() {

    }
    colorString(string, color) {
        switch ('color') {
            case 'red':
                return colors.red.bold(string);
            case 'blue':
                return colors.blue.bold(string);
            case 'cyan':
                return colors.cyan.bold(string);
            case 'green':
                return colors.green.bold(string);
            case 'yellow':
                return colors.yellow.bold(string);
        }

    }

}

module.exports = new UserExp();