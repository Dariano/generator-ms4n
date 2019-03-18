const controller = require('../../modules/<%= modulo %>/<%= modulo %>-controller')

module.exports = (app) => {

    app.route(`${app.urlBase}/v1/<%= modulo %>`)
        .get(controller.getAll)
        .post(controller.create)

    app.route(`${app.urlBase}/v1/<%= modulo %>/:id`)
        .get(controller.get)
        .put(controller.update)
        .delete(controller.remove)
}