'use strict'

const GossipKata = require('./gossip-kata');
const Logger = require('./logger');

describe('GossipKata', () => {

    describe('Constructor', () => {

        it('should create prop property with value 2', () => {
            let sut = new GossipKata();
            expect(sut).to.have.property('prop', 2);
        });
        
    });

    xdescribe('Run', () => {
        xit('should log command line args when supplied', () => {
            let logger = new Logger();
            let stub = sinon.stub(logger, 'log').returns();
            let sut = new GossipKata([Arg1, Arg2]);
            sut.logger = logger;

            sut.run();

            expect(logger.log).to.have.been.calledOnce;
            expect(logger.log).to.have.been.calledWith(`${Arg1} ${Arg2}`);

            stub.restore();
        });

    });

});
