const httpStatus = require('http-status')
const { validationResult } = require('express-validator/check')

const notificaErros = (res, erros) => {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json(Object.values(erros.mapped()).map(valor => valor.msg))
}

const log = (mensagem) => {
    if(!process.env.NODE_ENV || !process.env.DEBUG){
        return
    }

    console.log('------------------------------------');
    console.error(mensagem);
    console.log('------------------------------------');
}

class ResponseErrorHandler {

    notificaErro(res) {
        return erro => {
            erro.response = erro.response || { status: httpStatus.INTERNAL_SERVER_ERROR }

            const internalError = {
                timestamp: new Date(),
                status: erro.response.status,
                error: undefined,
                message: erro.toString(),
                pathOrigem: res.req && res.req.url,
                pathService: erro.config && erro.config.url
            }

            const resposta = { data: erro.response.data || internalError }

            log(resposta)

            res.status(erro.response.status)
                .json(resposta)
        }
    }

    checkExistemErros(req, res, next) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return notificaErros(res, erros)
        }

        next()
    }
}

module.exports = new ResponseErrorHandler()