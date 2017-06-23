'use strict'

const Logger = require('./logger');
const MAX_TIME = 480;
class GossipKata {

    constructor (drivers = []) {
       this.drivers = drivers;
       this.minute = 0;
    }

    run() {
        while(this.minute < MAX_TIME && this._notEveryKnowsAll()){
            this._goForwardAllDrivers();
            this.drivers.forEach((driver) => {
                    this.drivers
                    .filter((driverB) => driver.getCurrentStop() === driverB.getCurrentStop())
                    .forEach((sameStopDriver) => {
                        driver.gossips.forEach((gossip) => {
                            sameStopDriver.addGossip(gossip);
                        });
                        sameStopDriver.gossips.forEach((gossip) => {
                            driver.addGossip(gossip);
                        });
                    });
            });
            this.minute++;
        }
    }

    _goForwardAllDrivers(){
        this.drivers.forEach((driver) => {
           driver.goForward();
       });
    }

    _notEveryKnowsAll(){
        let everyKnowsAll = true;
        this.drivers.forEach((driver) => {
            const driverKnowsAll = driver.gossips.length === this.drivers.length;
            everyKnowsAll = everyKnowsAll && driverKnowsAll;
        });

        return !everyKnowsAll;
    }
}

module.exports = GossipKata;
