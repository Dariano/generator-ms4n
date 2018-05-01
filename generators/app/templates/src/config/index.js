// Essas informações serão sobrescritas pelas informações que virá do config-repo
let _host = {
    port: <%= port %>,
}

module.exports = {
    host: () => _host,
    atualizar: (config) => Object.keys(config).forEach(key => _host[key] = config[key])
}