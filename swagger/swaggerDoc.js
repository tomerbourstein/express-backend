/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Returns the list of all articles
 *     responses:
 *       200:
 *         description: The list of the articles
 */

/**
 * @swagger
 * /articles/title:
 *   get:
 *     summary: Returns an article by its title
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
 *     summary: Delete a article
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
