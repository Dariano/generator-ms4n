const _package = require('../../../package')
const getRepoInfo = require('git-repo-info')

class Management {
    health(req, res) {
        const info = getRepoInfo()

        res.json({
            status: 'UP',
            version: _package.version,
            name: _package.name,
            git: {
                branch: info.branch,
                sha: info.sha,
                tag: info.tag,
                committer: info.committer,
                committerDate: info.committerDate,
                author: info.author,
                authorDate: info.authorDate,
                commitMessage: info.commitMessage
            }
        })
    }
}

module.exports = new Management()