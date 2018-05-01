const notificaErro = require('../../../src/middlewares/error-handler')

describe('MIDDLEWARE: error-handler', () => {
    it('deve notificar erro', () => {
        const res = {
            status: () => this,
            json: () => { }
        }

        const req = {}
        const next = () => { }

        const statusStub = sinon.stub(res, "status").returns(res)
        const jsonStub = sinon.stub(res, "json")


        let error = "Erro"
        notificaErro(error, req, res, next)

        expect(statusStub.called).to.true;
        expect(jsonStub.called).to.true;
    });
})