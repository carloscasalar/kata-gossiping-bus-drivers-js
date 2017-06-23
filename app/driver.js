class Driver {
    constructor(id,stops = []){
        this.id = id;
        this.stops = stops;
        this.currentStopIndex = null;
        this.gossips = [this.id];
    }

    getCurrentStop(){
        let currentStop = null;
        if(this.currentStopIndex !== null){
            currentStop = this.stops[this.currentStopIndex];
        }
        return currentStop;
    }

    goForward(){
        if(this.currentStopIndex === null) {
            this.currentStopIndex = 0;
        }else {
            this.currentStopIndex++;
        }
    }

    addGossip(gossip){
        if(!this.gossips.includes(gossip)){
            this.gossips.push(gossip);
        }
    }
}

module.exports = Driver;