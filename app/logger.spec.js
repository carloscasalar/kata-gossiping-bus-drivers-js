'use strict'

const Logger = require('./logger');
const TestString = '    ✓';  // nice hack to keep the mocha report clean. LOL.

describe('Logger', () => {
    it('should log a message to the console', () => {
        let sut = new Logger();
        let spy = sinon.spy(console, 'log');

        sut.log(TestString);

        expect(spy.calledOnce);
        expect(spy.calledWithMatch(TestString));

        spy.restore();
    });
});
