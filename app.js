const logger = require('./Creating and export module/logger');
// Will return exported objects from logger => require('./Creating and export module/logger');

const pathMethods = require('./Path module/pathModule');

console.log(pathMethods());
/*
Will return:
    {
        root: 'C:\\',
        dir: 'C:\\PersonalCodes\\NodeJsTutorial\\Path module',
        base: 'pathModule.js',
        ext: '.js',
        name: 'pathModule'
    }
*/

// console.log(logger);
// Will return an object => { log: [Function: log] }
// if in logger, function is exported as global.module.logger = log

// Not a best practice to export as var => Use const to avoid overriding

logger('App.JS');

/*
In Node, code is wraps in a function. Read about: Module wrapper function
    console.log(__dirname);
    console.log(__filename);
*/

const Logger = require('./Logger with event/loggerEvent');

const loggerObject = new Logger();

// Register a listener
loggerObject.on('messageLogged', (e) => {
    console.log('Listener called : ', e);
});

loggerObject.log('message');
