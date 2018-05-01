const request = require('axios')
const urlProvider = require('./host-provider')
let config = require('./index')

class ConfigServer {
    async buscar() {
        let res = await request.get(urlProvider.configServer('<%= name %>.json'))
        config.atualizar(res.data.app.host)

        return config
    }
}

module.exports = new ConfigServer()