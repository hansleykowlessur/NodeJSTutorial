const path = require('path');
// Import path object 

// E.g. Path.parse

function getPathObj() {
    console.log(path.parse(__filename));
}

module.exports = getPathObj;