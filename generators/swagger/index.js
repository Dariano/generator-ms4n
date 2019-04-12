'use strict';

const _ = require('lodash');
const chalk = require('chalk');

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.projectName = _.last(this.destinationRoot().split('/'));

    this.fs.copyTpl(
      this.templatePath('configuration.js'),
      this.destinationPath(`src/swagger/index.js`),
      { nameApp: this.projectName }
    );

    this.fs.copy(
      this.templatePath('security.yaml'),
      this.destinationPath(`src/swagger/security.yaml`)
    );
  }

  install() {
    this.spawnCommandSync('npm', ['i', '-S', 'swagger-jsdoc', 'swagger-tools']);
  }

  end() {
    console.log(
      `\n\n ${chalk.red('---------- Inserir no arquivo src/bin/www -------------')}\n`
    );
    console.log(
      `${chalk.blue('const')} swagger = ${chalk.yellow('require')}('../swagger')`
    );
    console.log('...');
    console.log(`swagger.${chalk.yellow('init')}(app)\n`);
    console.log(
      `${chalk.blue(
        'https://github.com/Dariano/generator-ms4n/blob/master/generators/app/templates/README.md'
      )}\n`
    );
    console.log(
      `${chalk.red('-------------------------------------------------------\n')}`
    );
  }
};
