const { getTotalMemOfMachine, getAvailableMemOfMachine } = require('../OS module/osModule');

let totalMem = 0;
let freeMem = 0;

beforeAll(() => {
    totalMem = getTotalMemOfMachine();
    freeMem = getAvailableMemOfMachine();
});


describe('Testing: Total memory of machine', () => {

    test('Checking of datatype', () => {
        expect(typeof totalMem).toBe("number");
    });

    test('Checking if value is not negative', () => {
        expect(totalMem).toBeGreaterThanOrEqual(0);
    });

    test('Checking if value is not undefined or not null', () => {
        expect(totalMem).not.toBeNaN();
        expect(totalMem).not.toBeNull();
    });

});

describe('Testing: Available memory of machine', () => {

    test('Checking of datatype', () => {
        expect(typeof freeMem).toBe("number");
    });

    test('Checking if value is not negative', () => {
        expect(freeMem).toBeGreaterThanOrEqual(0);
    });

    test('Checking if value is not undefined or not null', () => {
        expect(freeMem).not.toBeNaN();
        expect(freeMem).not.toBeNull();
    });

});