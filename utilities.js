let fs = require('file-system');

class Utilities {
    constructor() {

    }

    getFile(path) {
        if (this.fileExists(path)) {
            var file = require(path);
            return file;
        } else {
            return false;
        }
    }

    fileExists(path) {
        return fs.existsSync(path);
    }

    saveFile(filePath, file) {
        fs.writeFileSync(filePath, JSON.stringify(file, null, 3));
    }

}

module.exports = new Utilities();