
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         uid:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         uid: 0
 *         email: TheNew@Turing.com
 *         password: password0
 *     Article:
 *       type: object
 *       required:
 *        - author_uid
 *        - title
 *        - content
 *       properties:
 *         id:
 *           type: integer
 *         author_uid:
 *           type: integer
 *           description: The unique id of your blog post author
 *         title:
 *           type: string
 *           description: The title of your blog post
 *         content:
 *           type: string
 *           description: The content of your blog post
 *       example:
 *         author_uid: 0
 *         title: The first blog post of all times
 *         content: In the beginning there was only the sun and the moon
 */

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: The articles managing API
 * /articles:
 *   get:
 *     summary: Lists all the articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *   post:
 *     summary: Create a new article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *               properties:
 *                 author_uid:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *     responses:
 *       201:
 *         description: The created article.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *               properties:
 *                 author_uid:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       500:
 *         description: Some server error
 * /articles/{id}:
 *   get:
 *     summary: Get the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: The article response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: The article was not found
 *   put:
 *    summary: Update the article by the id
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The article id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Article'
 *    responses:
 *      200:
 *        description: The article was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Article'
 *      404:
 *        description: The article was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *
 *     responses:
 *       200:
 *         description: The article was deleted
 *       404:
 *         description: The article was not found
 */
