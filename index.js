#! /usr/bin/env node

'use strict'

const GossipKata = require('./app/gossip-kata');

let c = new GossipKata(process.argv.slice(2));
c.run();
