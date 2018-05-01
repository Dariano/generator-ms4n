const supertest = require('supertest')
const chai = require('chai')
const httpStatus = require('http-status')
const app = require('../../src/config/express')()
const config = require('../../src/config')
const nock = require('nock')

global.app = app
global.request = supertest(app)
global.expect = chai.expect
global.httpStatus = httpStatus
global.hostLocal = config.host()
global.nock = nock