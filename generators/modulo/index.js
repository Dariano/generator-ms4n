'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'modulo',
        message: 'Nome do modulo?'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('api.js'),
      this.destinationPath(`src/api/${this.props.modulo}/${this.props.modulo}-route.js`),
      { modulo: this.props.modulo }
    );
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath(
        `src/modules/${this.props.modulo}/${this.props.modulo}-controller.js`
      ),
      { modulo: this.props.modulo }
    );
    this.fs.copyTpl(
      this.templatePath('factory.js'),
      this.destinationPath(
        `src/modules/${this.props.modulo}/${this.props.modulo}-factory.js`
      ),
      { modulo: this.props.modulo }
    );
    this.fs.copyTpl(
      this.templatePath('api.spec.js'),
      this.destinationPath(
        `tests/integration/${this.props.modulo}/${this.props.modulo}-route.spec.js`
      ),
      { modulo: this.props.modulo }
    );
  }
};
