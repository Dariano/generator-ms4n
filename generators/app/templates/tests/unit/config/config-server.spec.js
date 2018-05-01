const axios = require('axios')
const configServer = require('../../../src/config/config-server')
const configuracao = require('../../../src/config')

describe('CONFIG-SERVER', () => {
    let configuracaoOriginal
    before(() => {
        configuracaoOriginal = Object.assign({}, configuracao.host())
    });

    afterEach(() => {
        configuracao.atualizar(configuracaoOriginal)
    });

    it('DEV', async () => {
        const config = {
            host: {
                port: 3000
            }
        }

        const response = {
            data: {
                app: config
            }
        }

        const axiosStub = sinon.stub(axios, 'get').resolves(response)

        await configServer.buscar()

        expect(config.host.port).to.eql(configuracao.host().port)

        axiosStub.restore()
    });
});