const hostProvider = require('../../../src/config/host-provider')

describe('Configurações de endereços de serviços', () => {
    describe('CONFIG-SERVER', () => {
        afterEach(() => {
            process.env.NODE_ENV = 'test'
        })

        it('deve construir a URL para acessar o CONFIG-SERVER com endereço do kubernetes', () => {
            process.env.NODE_ENV = 'prd'
            const url = hostProvider.configServer('<%= name %>.json')
            const urlEsperada = `http://config-server-arch.plataforma.svc.local/<%= name %>.json`

            expect(url).to.be.eql(urlEsperada)
        })

        it('deve construir a URL para acessar o CONFIG-SERVER ambiente de teste', () => {
            process.env.NODE_ENV = 'dev'
            const url = hostProvider.configServer('<%= name %>.json')
            const urlEsperada = `http://servicos-tst.com.br/config-server-arch-dev/<%= name %>.json`

            expect(url).to.be.eql(urlEsperada)
        })
    })
})