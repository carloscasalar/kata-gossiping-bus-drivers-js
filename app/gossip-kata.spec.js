'use strict'

const GossipKata = require('./gossip-kata');
const Driver = require('./driver');

describe('GossipKata', () => {

    it('with only one driver should finish at minute 0', () => {
        const driver = new Driver(1, [2]);
        const gossipKata = new GossipKata([driver]);
        gossipKata.run();
        expect(gossipKata.minute).to.be.equal(0);
    });

    it('with (1,2) and (1,3) drivers should finish after 1 minute', () => {
        const driverOne = new Driver(1, [1,2]);
        const driverTwo = new Driver(2, [1,3]);
        const gossipKata = new GossipKata([driverOne, driverTwo]);
        gossipKata.run();
        expect(gossipKata.minute).to.be.equal(1);
    });

    it('with (1,2) and (3,2) drivers should finish after 2 minute', () => {
        const driverOne = new Driver(1, [1,2]);
        const driverTwo = new Driver(2, [3,2]);
        const gossipKata = new GossipKata([driverOne, driverTwo]);
        gossipKata.run();
        expect(gossipKata.minute).to.be.equal(2);
    });

    it('with web example drivers should finish after 5 minute', () => {
        const driverOne = new Driver(1, [3,1,2,3]);
        const driverTwo = new Driver(2, [3,2,3,1]);
        const driverThree = new Driver(3, [4,2,3,4,5]);
        const gossipKata = new GossipKata([driverOne, driverTwo, driverThree]);
        gossipKata.run();
        expect(gossipKata.minute).to.be.equal(5);
    });

});
