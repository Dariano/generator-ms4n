const controller = require('../../modules/<%= modulo %>/<%= modulo %>-controller')

module.exports = (app) => {

    /** 
     * @swagger
     * tags:
     *   name: Modulo
     *   description: Descrição Modulo
     */

    /**
     * @swagger
     * definitions:
     *   Modulo:
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
     *   moduloBody:
     *     in: body
     *     name: Modulo
     *     schema:
     *       $ref: '#/definitions/Modulo'
     */

    app.route(`${app.urlBase}/v1/<%= modulo %>`)
        /**
         * @swagger
         * /events-portal-bff/v1/modulo:
         *   get:
         *     description: Fetch Modulo
         *     tags: [Modulo]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *     responses:
         *       200:
         *         description: Fetch modulos
         *         schema:
         *           type: array
         *           items:
         *             $ref: '#/definitions/Modulo'
         */
        .get(controller.getAll)
        /**
         * @swagger
         * /events-portal-bff/v1/modulo:
         *   post:
         *     description: Create modulo
         *     tags: [Modulo]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *       - $ref: '#/parameters/moduloBody'
         *     responses:
         *       201:
         *         description: Create modulo
         */
        .post(controller.create)

    app.route(`${app.urlBase}/v1/<%= modulo %>/:id`)
        /**
         * @swagger
         * /events-portal-bff/v1/modulo/{id}:
         *   get:
         *     description: Fetch modulo
         *     tags: [Modulo]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *     responses:
         *       200:
         *         description: Fetch modulo
         *         schema:
         *           type: object
         *           $ref: '#/definitions/Modulo'
         */
        .get(controller.get)
        /**
         * @swagger
         * /events-portal-bff/v1/modulo/{id}:
         *   put:
         *     description: Update modulo
         *     tags: [Modulo]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *       - $ref: '#/parameters/moduloBody'
         *     responses:
         *       204:
         *         description: Update modulo
         */
        .put(controller.update)
        /**
         * @swagger
         * /events-portal-bff/v1/modulo/{id}:
         *   delete:
         *     description: Delete modulo
         *     tags: [Modulo]
         *     security:
         *       - ApiKeyAuth: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - $ref: '#/parameters/idParam'
         *     responses:
         *       204:
         *         description: Delete modulo
         */
        .delete(controller.remove)
}