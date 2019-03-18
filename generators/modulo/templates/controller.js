const httpStatus = require('http-status')
const factory = require('./<%= modulo %>-factory')
const { notificaErro } = require('../../middlewares/response-error-handler')

class Controller {
    get(req, res) {
        const token = req.headers.authorization
        const id = req.params.id

        factory
            .get(id, token)
            .then(item => res.json(item))
            .catch(notificaErro(res))
    }

    getAll(req, res) {
        const token = req.headers.authorization

        factory
            .getAll(token)
            .then(item => res.json(item))
            .catch(notificaErro(res))

    }

    create(req, res) {
        const token = req.headers.authorization
        const <%= modulo %> = req.body

        factory
            .create(<%= modulo %>, token)
            .then(item => res.sendStatus(httpStatus.CREATED))
            .catch(notificaErro(res))
    }

    update(req, res) {
        const token = req.headers.authorization
        const <%= modulo %> = req.body
        const id = req.params.id

        factory
            .update(id, <%= modulo %>, token)
            .then(item => res.sendStatus(httpStatus.OK))
            .catch(notificaErro(res))
    }

    remove(req, res) {
        const token = req.headers.authorization
        const id = req.params.id

        factory
            .remove(id, token)
            .then(item => res.sendStatus(httpStatus.NO_CONTENT))
            .catch(notificaErro(res))
    }
}

module.exports = new Controller()