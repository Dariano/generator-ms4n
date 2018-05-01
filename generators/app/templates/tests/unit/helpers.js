const chai = require('chai')
const httpStatus = require('http-status')
const sinon = require('sinon')
const config = require('../../src/config')

global.expect = chai.expect
global.sinon = sinon
global.httpStatus = httpStatus
global.hostLocal = config.host()