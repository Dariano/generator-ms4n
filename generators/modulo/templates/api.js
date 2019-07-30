const controller = require('../../modules/<%= modulo %>/<%= modulo %>-controller')

module.exports = (app) => {

    /** 
     * @swagger
     * tags:
     *   name: <%= modulo %>
     *   description: Description <%= modulo %>
     */

    /**
     * @swagger
     * definitions:
     *   <%= modulo %>:
     *     required:
     *       - matchMakingId
     *       - questionType
     *       - required
     *       - title
     *     properties:
     *       id:
     *         type: integer
     *       matchMakingId:
     *         type: integer
     *       questionType:
     *         type: string
     *       required:
     *         type: boolean
     *       title:
     *         type: string
     *       options:
     *         type: array
     *         items:
     *           properties:
     *             id:
     *               type: integer
     *             description:
     *               type: string
     *           
     */

     /** 
     * @swagger
     * parameters:
     *   idParam:
     *     name: id
     *     in: path
     *     description: Session ID
     *     required: true
     *     type: integer
     *   <%= modulo %>Body:
     *     in: body
     *     name: <%= modulo %>
     *     schema:
     *       $ref: '#/definitions/<%= modulo %>'
     */
<% if(httpVebs.some(v => v == 'GET-ALL' || v == 'POST')) { %>
    app.route(`${app.urlBase}/v1/<%= modulo %>`)
    <% if(httpVebs.some(v => v == 'GET-ALL')) { %>
        /**
         * @swagger
         * /events-portal-bff/v1/<%= modulo %>:
         *   get:
         *     description: Fetch <%= modulo %>
         *     tags: [<%= modulo %>]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *     responses:
         *       200:
         *         description: Fetch <%= modulo %>s
         *         schema:
         *           type: array
         *           items:
         *             $ref: '#/definitions/<%= modulo %>'
         */
        .get(controller.getAll) 
    <% } 
     if(httpVebs.some(v => v == 'POST')) { %>
        /**
         * @swagger
         * /events-portal-bff/v1/<%= modulo %>:
         *   post:
         *     description: Create <%= modulo %>
         *     tags: [<%= modulo %>]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *       - $ref: '#/parameters/<%= modulo %>Body'
         *     responses:
         *       201:
         *         description: Create <%= modulo %>
         */
        .post(controller.create)
    <% } %>
<% } %>
<% if(httpVebs.some(v => v == 'GET' || v == 'PUT' || v == 'DELETE')) { %>
    app.route(`${app.urlBase}/v1/<%= modulo %>/:id`)
    <% if(httpVebs.some(v => v == 'GET')) { %>
        /**
         * @swagger
         * /events-portal-bff/v1/<%= modulo %>/{id}:
         *   get:
         *     description: Fetch <%= modulo %>
         *     tags: [<%= modulo %>]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *     responses:
         *       200:
         *         description: Fetch <%= modulo %>
         *         schema:
         *           type: object
         *           $ref: '#/definitions/<%= modulo %>'
         */
        .get(controller.get)
    <% } 
    if(httpVebs.some(v => v == 'PUT')) { %>
        /**
         * @swagger
         * /events-portal-bff/v1/<%= modulo %>/{id}:
         *   put:
         *     description: Update <%= modulo %>
         *     tags: [<%= modulo %>]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *       - $ref: '#/parameters/<%= modulo %>Body'
         *     responses:
         *       204:
         *         description: Update <%= modulo %>
         */
        .put(controller.update)
    <% }  if(httpVebs.some(v => v == 'DELETE')) { %>
        /**
         * @swagger
         * /events-portal-bff/v1/<%= modulo %>/{id}:
         *   delete:
         *     description: Delete <%= modulo %>
         *     tags: [<%= modulo %>]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *     responses:
         *       204:
         *         description: Delete <%= modulo %>
         */
        .delete(controller.remove)
    <% } %>
<% } %>
}