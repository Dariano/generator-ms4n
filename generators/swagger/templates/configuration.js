const swaggerJSDoc = require('swagger-jsdoc');
const swaggerTools = require('swagger-tools');

class Swagger {
    init(app) {
        const swaggerDefinition = {
            info: {
              title: '<%= nameApp %>',
              version: '1.0.0', 
              description: '<%= nameApp %>',
            },
            basePath: '/',
          };

          const options = {
            swaggerDefinition,
            apis: ['./src/api/**/*-route.js', './src/swagger/*.yaml']
          };

          const swaggerSpec = swaggerJSDoc(options);

          swaggerTools.initializeMiddleware(swaggerSpec, middleware => {
            app.use(middleware.swaggerMetadata());
            app.use(middleware.swaggerValidator());
            app.use(middleware.swaggerUi({
                swaggerUi: '/swagger-ui' // path for access the swagger in browser
            }));
            console.log('swagger running');
        })
    }
}

module.exports = new Swagger()