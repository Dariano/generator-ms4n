const { notificaErro } = require('../../../src/middlewares/response-error-handler')

describe('MIDDLEWARE: response-error', () => {
    it('deve notificar erro', () => {
        const res = {
            status: (status) => this,
            json: (mensagem) => {}
        }
        const statusStub = sinon.stub(res, "status").returns(res)
        const jsonStub = sinon.stub(res, "json")

        const notificar = notificaErro(res)

        let erro = {}

        notificar(erro)

        expect(statusStub.called).to.true;
        expect(jsonStub.called).to.true;
    });

    it('deve notificar erro em modo debug', () => {
        process.env.DEBUG = true

        const res = {
            status: (status) => this,
            json: (mensagem) => {}
        }
        const statusStub = sinon.stub(res, "status").returns(res)
        const jsonStub = sinon.stub(res, "json")

        const notificar = notificaErro(res)

        let erro = {}

        notificar(erro)

        expect(statusStub.called).to.true;
        expect(jsonStub.called).to.true;

        process.env.DEBUG = false
    });
});