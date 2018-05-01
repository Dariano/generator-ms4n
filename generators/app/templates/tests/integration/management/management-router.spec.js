describe('Router: Management', () => {
    
        const PATH_BFF_HEALTH = '/management/health'
        const package = require('../../../package')
    
        describe('GET ' + PATH_BFF_HEALTH, () => {
            it('deve validar o status da aplicação', (done) => {
                request
                    .get(PATH_BFF_HEALTH)
                    .end((err, res) => {
                        expect(res.statusCode).to.be.eql(httpStatus.OK)
                        expect(res.body.version).to.be.eql(package.version)
                        expect(res.body.name).to.be.eql(package.name)
    
                        done(err)
                    })
            })
        })
    });