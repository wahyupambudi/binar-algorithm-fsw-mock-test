const express = require('express')
const router = express.Router()
const { Get, Insert } = require('../controller/todo.controller')
const { CheckPostTodos } = require('../middleware/middleware')
const { Authenticate, restrictPostTodos } = require("../middleware/restrict");


// Get User
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *      - "CRUD User"
 *     summary: Get all Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                      type: string
 */
router.get('/', Authenticate, Get)


// Get User By Id
/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     tags:
 *      - "CRUD User"
 *     summary: Get all By Id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of Users By Id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                      type: string
 *                   password:
 *                      type: string
 *                   identity_type:
 *                      type: string
 *                   address:
 *                      type: string
 *                   identity_number:
 *                      type: number
 */
// router.get('/:userId', Authenticate, GetByPK)


// Post User
/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     tags:
 *      - "CRUD User"
 *     summary: Create a new User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               identity_type:
 *                 type: string
 *               address:
 *                 type: string
 *               identity_number:
 *                 type: number
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post('/', CheckPostTodos, Authenticate, restrictPostTodos, Insert)


// Update User
/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     tags:
 *      - "CRUD User"
 *     summary: Update an User by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
// router.put('/:userId', Authenticate, Update)

// Delete
/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     tags:
 *      - "CRUD User"
 *     summary: Delete an User by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User deleted successfully
 */
// router.delete('/:userId', Authenticate, Delete)

module.exports = router