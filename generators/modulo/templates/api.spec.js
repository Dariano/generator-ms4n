const jwt = require('jwt-simple')

describe('Router: <%= modulo %>', () => {

    const PATH_BFF_BASE = `${app.urlBase}/v1/<%= modulo %>`
    const PATH_BFF_BASE_ID = `${app.urlBase}/v1/<%= modulo %>/1`
    const PATH_SERVICE_BASE = `/event-service/v1/event/<%= modulo %>`
    let token = ''

    before((done) => {
        token = jwt.encode({}, config.token_key)

        done()
    })
    <% if(httpVebs.some(v => v == 'GET-ALL')) { %>
    describe('GET ' + PATH_BFF_BASE, () => {
        it('should get all <%= modulo %>s', (done) => {
            nock(config.host)
                .get(`${PATH_SERVICE_BASE}`)
                .reply(httpStatus.OK, [])

            request
                .get(PATH_BFF_BASE)
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.OK)

                    done(err)
                })
        })

        it('should fail to fetch all <%= modulo %>s', (done) => {
            nock(config.host)
                .get(`${PATH_SERVICE_BASE}`)
                .reply(httpStatus.BAD_REQUEST)

            request
                .get(PATH_BFF_BASE)
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.BAD_REQUEST)

                    done(err)
                })
        })
    })<% } %>
    <% if(httpVebs.some(v => v == 'GET')) { %>
    describe('GET ' + PATH_BFF_BASE_ID, () => {
        it('should get <%= modulo %>', (done) => {
            nock(config.host)
                .get(`${PATH_SERVICE_BASE}/1`)
                .reply(httpStatus.OK, {})

            request
                .get(PATH_BFF_BASE_ID)
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.OK)

                    done(err)
                })
        })

        it('should fail to fetch <%= modulo %>', (done) => {
            nock(config.host)
                .get(`${PATH_SERVICE_BASE}/1`)
                .reply(httpStatus.BAD_REQUEST)

            request
                .get(PATH_BFF_BASE_ID)
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.BAD_REQUEST)

                    done(err)
                })
        })
    })<% } %>
    <% if(httpVebs.some(v => v == 'POST')) { %>
    describe('POST ' + PATH_BFF_BASE, () => {
        it('should create <%= modulo %>', (done) => {
            nock(config.host)
                .post(`${PATH_SERVICE_BASE}`)
                .reply(httpStatus.CREATED, {})

            request
                .post(PATH_BFF_BASE, {})
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.CREATED)

                    done(err)
                })
        })

        it('should fail create <%= modulo %>', (done) => {
            nock(config.host)
                .post(`${PATH_SERVICE_BASE}`, {})
                .reply(httpStatus.BAD_REQUEST)

            request
                .post(PATH_BFF_BASE, {})
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.BAD_REQUEST)

                    done(err)
                })
        })
    })<% } %>
    <% if(httpVebs.some(v => v == 'PUT')) { %>
    describe('PUT ' + PATH_BFF_BASE_ID, () => {
        it('should update <%= modulo %>', (done) => {
            nock(config.host)
                .put(`${PATH_SERVICE_BASE}/1`)
                .reply(httpStatus.OK, {})

            request
                .put(PATH_BFF_BASE_ID, {})
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.OK)

                    done(err)
                })
        })

        it('should fail update <%= modulo %>', (done) => {
            nock(config.host)
                .put(`${PATH_SERVICE_BASE}/1`)
                .reply(httpStatus.BAD_REQUEST)

            request
                .put(PATH_BFF_BASE_ID, {})
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.BAD_REQUEST)

                    done(err)
                })
        })
    })<% } %>
    <% if(httpVebs.some(v => v == 'DELETE')) { %>
    describe('DELETE ' + PATH_BFF_BASE_ID, () => {
        it('should remove <%= modulo %>', (done) => {
            nock(config.host)
                .intercept(`${PATH_SERVICE_BASE}/1`, 'DELETE')
                .reply(httpStatus.NO_CONTENT)

            request
                .delete(PATH_BFF_BASE_ID)
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.NO_CONTENT)

                    done(err)
                })
        })

        it('should fail remove <%= modulo %>', (done) => {
            nock(config.host)
                .intercept(`${PATH_SERVICE_BASE}/1`, 'DELETE')
                .reply(httpStatus.BAD_REQUEST)

            request
                .delete(PATH_BFF_BASE_ID)
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(httpStatus.BAD_REQUEST)

                    done(err)
                })
        })
    })<% } %>
});
