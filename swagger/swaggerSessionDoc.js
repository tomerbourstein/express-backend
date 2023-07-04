/**
 * @swagger
 * tags:
 *   name: Session
 *   description: The users login session
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user stored in the database
 *         password:
 *           type: string
 *           description: The pasword of the user stored in the database
 *       example:
 *         email: example1@email.com
 *         password: strongPassword1234
 */

/**
 * @swagger
 * /session/login:
 *   post:
 *     summary: Login an existing user.
 *     tags: [Session]
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
 *         description: The user is validated (token created)
 */

/**
 * @swagger
 * /session/logout/{token}:
 *   delete:
 *     summary: Delete a user's token
 *     tags: [Session]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: The user's token was deleted or there is no content
 */  