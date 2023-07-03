/**
 * @swagger
 * tags:
 *   name: User
 *   description: The users managing API
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         uid:
 *           type: integer
 *           description: The auto-generated unique id of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         uid: 1
 *         email: example1@email.com
 *         password: passwordexample1
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of the articles
 */

/**
 * @swagger
 * /users/id:
 *   get:
 *     summary: Returns a user by its id
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The user's id
 *       404:
 *         description: The user was not found
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: The user was created
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update an existing user
 *     tags: [User]
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: The user was updated
 *       404:
 *         description: The user was not found
 */

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Partially update an existing user
 *     tags: [User]
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: The user was updated
 *       404:
 *         description: The user was not found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a users
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
