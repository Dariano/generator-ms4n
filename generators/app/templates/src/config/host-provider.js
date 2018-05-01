const config = require('./index')

module.exports = {
    configServer: recurso => {
        const hostConfigServer = process.env.NODE_ENV == 'dev'
            ? 'http://servicos-tst.com.br/config-server-arch-dev'
            : 'http://config-server-arch.plataforma.svc.local'

        return `${hostConfigServer}/${recurso}`
    }
}