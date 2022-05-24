const express = require('express')
const messageControllers = require('./messageController')
const router = express.Router();

router.get('/', messageControllers.getMessages);
router.get('/:id', messageControllers.getMessageById);
router.post('/', messageControllers.createMessage);
router.patch('/:id', messageControllers.updateMessage);
router.delete('/:id', messageControllers.deleteMessage);

module.exports = router