'use strict';

const Driver = require('./driver');

describe('Driver tests', () => {
    let driver;
    const FIRST_STOP = 2;
    const SECOND_STOP = 4;
    const THIRD_STOP = 5;
    beforeEach(() => {
        driver = new Driver(1, [FIRST_STOP, SECOND_STOP, THIRD_STOP]);
    });

    it('at init current stop should be null', () => {
        const currentStop = driver.getCurrentStop();
        expect(currentStop).to.be.equal(null);
    });

    it(`after going forward current stop should be ${FIRST_STOP}`, () => {
        driver.goForward();
        const currentStop = driver.getCurrentStop();
        expect(currentStop).to.be.equal(FIRST_STOP);
    });

    it('at init should have only its own gossip', () => {
        expect(driver.gossips).to.be.eql([driver.id]);
    });

    it('should have a gossip after add it', () => {
        driver.addGossip(7);
        expect(driver.gossips).to.be.eql([driver.id, 7]);
    });
    
    it('shouldn\'t add a duplicated gossip', () => {
        driver.addGossip(7);
        driver.addGossip(7);
        expect(driver.gossips).to.be.eql([driver.id, 7]);
    });

});
