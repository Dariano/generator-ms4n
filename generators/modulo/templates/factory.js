const request = require('axios')
const urlProvider = require('../../config/host-provider')

class Factory {
    async get(id, token) {
        const url = urlProvider.<%= modulo %>(`<%= modulo %>/${id}`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .get(url, config)
            .then(res => res.data)
    }

    async getAll(token) {
        const url = urlProvider.<%= modulo %>(`<%= modulo %>`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .get(url, config)
            .then(res => res.data)
    }

    async create(<%= modulo %>, token) {
        const url = urlProvider.<%= modulo %>(`<%= modulo %>`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .post(url, <%= modulo %>, config)
            .then(res => res.data)
    }

    async update(id, <%= modulo %>, token) {
        const url = urlProvider.<%= modulo %>(`<%= modulo %>/${id}`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .put(url, <%= modulo %>, config)
            .then(res => res.data)
    }

    async remove(id, token) {
        const url = urlProvider.<%= modulo %>(`<%= modulo %>/${id}`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .delete(url, config)
            .then(res => res.data)
    }
}

module.exports = new Factory()