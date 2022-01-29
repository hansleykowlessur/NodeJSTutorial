const os = require('os');

// Get total memory of machine
function getTotalMemOfMachine() {
    return os.totalmem;
}

// Get available/free memory of machine
function getAvailableMemOfMachine() {
    return os.freemem;
}

// Memory details
function memoryDetails() {
    console.log(`Total memory of machine : ${getTotalMemOfMachine()} and available memory : ${getAvailableMemOfMachine()}`);
}

module.exports = getTotalMemOfMachine;
module.exports = getAvailableMemOfMachine;
module.exports = memoryDetails;
