const httpStatus = require('http-status')
const factory = require('./<%= modulo %>-factory')
const { notifyError } = require('../../middlewares/response-error-handler')

class Controller {
    get(req, res) {
        const token = req.headers.authorization
        const id = req.params.id

        factory
            .get(id, token)
            .then(item => res.json(item))
            .catch(notifyError(res))
    }

    getAll(req, res) {
        const token = req.headers.authorization

        factory
            .getAll(token)
            .then(item => res.json(item))
            .catch(notifyError(res))

    }

    create(req, res) {
        const token = req.headers.authorization
        const <%= modulo %> = req.body

        factory
            .create(<%= modulo %>, token)
            .then(() => res.sendStatus(httpStatus.CREATED))
            .catch(notifyError(res))
    }

    update(req, res) {
        const token = req.headers.authorization
        const <%= modulo %> = req.body
        const id = req.params.id

        factory
            .update(id, <%= modulo %>, token)
            .then(() => res.sendStatus(httpStatus.OK))
            .catch(notifyError(res))
    }

    remove(req, res) {
        const token = req.headers.authorization
        const id = req.params.id

        factory
            .remove(id, token)
            .then(() => res.sendStatus(httpStatus.NO_CONTENT))
            .catch(notifyError(res))
    }
}

module.exports = new Controller()