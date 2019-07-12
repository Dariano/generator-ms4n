Configurações

 - Instalar os componentes `swagger-jsdoc` e `swagger-tools`
  ```sh
  npm i -S swagger-jsdoc swagger-tools
  ```

 - Criar um diretório `src/swagger` e um arquivo `index.js`
  
```sh
  mkdir src/swagger
  touch src/swagger/index.js
```

 - No arquivo `index.js` adicionar o código abaixo
 
 ```js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerTools = require('swagger-tools');

class Swagger {
    init(app) {
        const swaggerDefinition = {
            info: {
              title: 'Nome do serviço',
              version: '1.0.0', 
              description: 'Descrição para o serviço',
            },
            basePath: '/',
          };

          const options = {
            swaggerDefinition,
            apis: ['./src/api/**/*-route.js', './src/swagger/*yaml']
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
 ```
 - No arquivo `www` em `src/bin` importar `require('../swagger')` e no final chamar `swagger.init(app)`
 ```js
...
const swagger = require('../swagger')
....
swagger.init(app)
 ```
 - Logo em seguida, liberar o acesso ao swagger para não passar pela autenticação
```js
const excludeUrls = [
    ...
    '/swagger-ui',
    '/api-docs',
]

module.exports = (req, res, next) => {
    if(excludeUrls.some(url => _.startsWith(req.url, url))){
        next()
        return
    }
    ...
}
```

 - Seguraça, criar arquivo em `src/swagger/security.yaml` e adiciona o seguindo código.
 
 ```yaml
securityDefinitions:
  ApiKeyAuth:
    type: apiKey
    in: header
    name: Authorization
 ```

 - Nos endpoints adicionar o security.

 ```js
/**
* @swagger
* /events-portal-bff/v1/company/{id}:
*   get:
*     security:
*       - ApiKeyAuth: []
*     description: Return the company
*     tags: [Company]
*     parameters:
*       - $ref: '#/parameters/idCompany'
*     responses:
*       200:
*         description: Company
*/
 ```

 - Configurar os endpoints, seguir as documentações.

https://github.com/Surnet/swagger-jsdoc/blob/098078b469/example/v2/routes.js

https://github.com/apigee-127/swagger-tools/blob/master/samples/2.0/petstore.json

> Ex: 

```js
module.exports = (app) => {

     /**
     * @swagger
     * parameters:
     *   idCompany:
     *     name: id
     *     description: Id company
     *     in: path
     *     required: true
     *     type: integer
     */
    

    /**
     * @swagger
     * /events-portal-bff/v1/company:
     *   get:
     *     description: Return the company
     *     tags: [Company]
     *     responses:
     *       200:
     *         description: Company
     *   post:
     *     description: Return the company
     *     tags: [Company]
     *     responses:
     *       200:
     *         description: Company
     */
    app.route(`${app.urlBase}/v1/company`)
        .get(controller.getAll)
        .post(controller.create)

    /**
     * @swagger
     * /events-portal-bff/v1/company/{id}:
     *   get:
     *     description: Return the company
     *     tags: [Company]
     *     parameters:
     *       - $ref: '#/parameters/idCompany'
     *     responses:
     *       200:
     *         description: Company
     */
    app.route(`${app.urlBase}/v1/company/:id`)
        .get(controller.get)
        .put(controller.update)
        .delete(controller.remove)
}
```
