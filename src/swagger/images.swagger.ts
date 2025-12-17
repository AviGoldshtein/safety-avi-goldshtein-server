/**
 * @swagger
 * tags:
 *   name: Event Images
 *   description: Images related to a specific event
 */

/**
 * @swagger
 * /api/events/{eventId}/images:
 *   get:
 *     summary: Get images for an event
 *     tags: [Event Images]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of images
 */

/**
 * @swagger
 * /api/events/{eventId}/images:
 *   post:
 *     summary: Upload images for an event
 *     tags: [Event Images]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Images uploaded
 */

/**
 * @swagger
 * /api/events/{eventId}/images:
 *   delete:
 *     summary: Delete images of an event
 *     tags: [Event Images]
 *     parameters:
 *       - in: path
 *         name: eventId
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
 *               imageIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Images deleted
 */
