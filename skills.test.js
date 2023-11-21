// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/skills.test.js
const calculateNumbers = require('./skills');

describe('calculateNumbers', () => {
    let consoleOutput = [];
    const originalLog = console.log;
    beforeEach(() => {
        consoleOutput = [];
        console.log = (message) => consoleOutput.push(message);
    });
    afterEach(() => {
        console.log = originalLog;
    });

    test('calculateNumbers with positive numbers', () => {
        calculateNumbers(5, 3);
        expect(consoleOutput).toEqual([
            'Sum: 8',
            'Difference: 2',
            'Product: 15',
            'Quotient: 1.6666666666666667'
        ]);
    });

    test('calculateNumbers with negative numbers', () => {
        calculateNumbers(-5, -3);
        expect(consoleOutput).toEqual([
            'Sum: -8',
            'Difference: -2',
            'Product: 15',
            'Quotient: 1.6666666666666667'
        ]);
    });

    test('calculateNumbers with zero', () => {
        calculateNumbers(0, 3);
        expect(consoleOutput).toEqual([
            'Sum: 3',
            'Difference: -3',
            'Product: 0',
            'Quotient: 0'
        ]);
    });
});