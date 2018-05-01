'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Seja bem vindo ao gerador de microsserviços ${chalk.red('generator-ms-4-n')}!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do seu projeto?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'port',
        message: 'Qual a PORTA que rodará o app?',
        default: 3000
      },
      {
        type: 'input',
        name: 'descricao',
        message: 'Dê uma descricação para a aplicação?',
        default: 'Microsserviço em nodejs'
      },
      {
        type: 'confirm',
        name: 'addModulo',
        message: 'Adicionar modulo?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Aquivos na raiz do projeto
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('Jenkinsfile'), this.destinationPath('Jenkinsfile'));

    this.fs.copyTpl(this.templatePath('kubernetes-deployment.yml'), this.destinationPath('kubernetes-deployment.yml'), { name: this.props.name });
    this.fs.copyTpl(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'), { name: this.props.name });
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), { name: this.props.name, descricao: this.props.descricao });
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), { name: this.props.name, port: this.props.port, descricao: this.props.descricao });

     // Aquivos no src/bin/ do projeto
     this.fs.copy(this.templatePath('src/bin/www'), this.destinationPath('src/bin/www'));

    // Aquivos no src/api do projeto
    this.fs.copy(this.templatePath('src/api/management/management-router.js'), this.destinationPath('src/api/management/management-router.js'));

    // Arquivos no src/modules no projeto
    this.fs.copy(this.templatePath('src/modules/management/management-controller.js'), this.destinationPath('src/modules/management/management-controller.js'));

     // Aquivos no src/config/ do projeto
    this.fs.copy(this.templatePath('src/config/host-provider.js'), this.destinationPath('src/config/host-provider.js'));
    this.fs.copyTpl(this.templatePath('src/config/express.js'), this.destinationPath('src/config/express.js'), { name: this.props.name });
    this.fs.copyTpl(this.templatePath('src/config/config-server.js'), this.destinationPath('src/config/config-server.js'), { name: this.props.name });
    this.fs.copyTpl(this.templatePath('src/config/index.js'), this.destinationPath('src/config/index.js'), { port: this.props.port });
    this.fs.copyTpl(this.templatePath('src/config/pm2.config.js'), this.destinationPath('src/config/pm2.config.js'), { name: this.props.name });

     // Aquivos no src/middlewares/ do projeto
     this.fs.copy(this.templatePath('src/middlewares/response-error-handler.js'), this.destinationPath('src/middlewares/response-error-handler.js'));
     this.fs.copy(this.templatePath('src/middlewares/error-handler.js'), this.destinationPath('src/middlewares/error-handler.js'));
 
     // Aquivos no tests/integration do projeto
    this.fs.copy(this.templatePath('tests/integration/helpers.js'), this.destinationPath('tests/integration/helpers.js'));
    this.fs.copy(this.templatePath('tests/integration/mocha.opts'), this.destinationPath('tests/integration/mocha.opts'));

    // Aquivos no tests/integration/management do projeto
    this.fs.copy(this.templatePath('tests/integration/management/management-router.spec.js'), this.destinationPath('tests/integration/management/management-router.spec.js'));

    // Aquivos no tests/unit do projeto
    this.fs.copy(this.templatePath('tests/unit/helpers.js'), this.destinationPath('tests/unit/helpers.js'));
    this.fs.copy(this.templatePath('tests/unit/mocha.opts'), this.destinationPath('tests/unit/mocha.opts'));

    // Aquivos no tests/unit/config do projeto
    this.fs.copy(this.templatePath('tests/unit/config/config-server.spec.js'), this.destinationPath('tests/unit/config/config-server.spec.js'));
    this.fs.copyTpl(this.templatePath('tests/unit/config/host-provider.spec.js'), this.destinationPath('tests/unit/config/host-provider.spec.js'), { name: this.props.name });

    // Aquivos no tests/unit/middlewares do projeto
    this.fs.copy(this.templatePath('tests/unit/middlewares/response-error-handler.spec.js'), this.destinationPath('tests/unit/middlewares/response-error-handler.spec.js'));
    this.fs.copy(this.templatePath('tests/unit/middlewares/error-handler.spec.js'), this.destinationPath('tests/unit/middlewares/error-handler.spec.js'));
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
