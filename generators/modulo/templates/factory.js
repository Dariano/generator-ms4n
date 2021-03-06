const request = require('axios')
const urlProvider = require('../../config/host-provider')

class Factory {
    <% if(httpVebs.some(v => v == 'GET')) { %>
    async get(id, token) {
        const url = urlProvider.<%= modulo %>(`v1/<%= urlBase %>/${id}`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .get(url, config)
            .then(res => res.data)
    }<% } %>
    <% if(httpVebs.some(v => v == 'GET-ALL')) { %>
    async getAll(token) {
        const url = urlProvider.<%= modulo %>(`v1/<%= urlBase %>`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .get(url, config)
            .then(res => res.data)
    }<% } %>
    <% if(httpVebs.some(v => v == 'POST')) { %>
    async create(<%= modulo %>, token) {
        const url = urlProvider.<%= modulo %>(`v1/<%= urlBase %>`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .post(url, <%= modulo %>, config)
            .then(res => res.data)
    }<% } %>
    <% if(httpVebs.some(v => v == 'PUT')) { %>
    async update(id, <%= modulo %>, token) {
        const url = urlProvider.<%= modulo %>(`v1/<%= urlBase %>/${id}`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .put(url, <%= modulo %>, config)
            .then(res => res.data)
    }<% } %>
    <% if(httpVebs.some(v => v == 'DELETE')) { %>
    async remove(id, token) {
        const url = urlProvider.<%= modulo %>(`v1/<%= urlBase %>/${id}`)

        const config = {
            headers: {
                'Authorization': token
            }
        }

        return await request
            .delete(url, config)
            .then(res => res.data)
    }<% } %>
}

module.exports = new Factory()