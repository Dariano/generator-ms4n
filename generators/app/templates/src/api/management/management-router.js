const controller = require('../../modules/management/management-controller')

module.exports = (app) => {

    let urlBase = '/management'

    app.route(`${urlBase}/health`)
        .get(controller.health)
}
