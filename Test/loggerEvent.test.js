const Logger = require('../Logger with event/loggerEvent');

let LoggerObj;

beforeAll(() => {
    LoggerObj = new Logger();
});


describe('Testing: Event logger of Logger class', () => {

    test('Checking if the object is the proper instance of the class Logger', () => {
       expect(LoggerObj).toBeInstanceOf(Logger);
    });

});