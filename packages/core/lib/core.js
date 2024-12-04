'use strict';
const lodash = require('lodash');
const utils = require('@driver-cli/utils');

console.log('lodash core', lodash.get({ a: '2333'}, 'a'));
console.log('sadafa', utils())

function core() {
  return 'Hello from core';
}

module.exports = core;

