/**
 * @swagger
 * tags:
 *   name: Article
 *   description: The users managing API
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the article
 *         author_uid:
 *           type: integer
 *           description: The unique id of the author of the article
 *         title:
 *           type: string
 *           description: The title of your article
 *         content:
 *           type: string
 *           description: The content of your article
 *       example:
 *         id: 0
 *         author_uid: 1
 *         title: The New Turing Omnibus
 *         content: In the begining there was nothing, but everything nonetheless.
 */

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Returns the list of all articles
 *     tags: [Article]
 *     responses:
 *       200:
 *         description: The list of the articles
 */

/**
 * @swagger
 * /articles/title:
 *   get:
 *     summary: Returns an article by its title
 *     tags: [Article]
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The article title
 *       404:
 *         description: The article was not found
 */
/**
 * @swagger
 * /articles/id:
 *   get:
 *     summary: Returns an article by its id
 *     tags: [Article]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The article id
 *       404:
 *         description: The article was not found
 */

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Create a new article
 *     tags: [Article]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: The article was created
 */

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     summary: Update an existing article
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: The article was updated
 *       404:
 *         description: The article was not found
 */

/**
 * @swagger
 * /articles/{id}:
 *   patch:
 *     summary: Partially update an existing article
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: The article was updated
 *       404:
 *         description: The article was not found
 */

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Delete an article
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The article was deleted
 *       404:
 *         description: The article was not found
 */
