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

    app.route(`${app.urlBase}/v1/<%= modulo %>`)
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

    app.route(`${app.urlBase}/v1/<%= modulo %>/:id`)
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
}