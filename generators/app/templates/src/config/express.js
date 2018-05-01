const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const errorHandler = require('../middlewares/error-handler')

module.exports = () => {
    let app = express()

    //middleware
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(require('method-override')())

    app.urlBase = '/<%= name %>'

    consign({
        cwd: 'src',
        logger: console,
        verbose: false,
        loggingType: 'info'
    })
    .include('api')
    .into(app);

    app.use(errorHandler)

    return app
}