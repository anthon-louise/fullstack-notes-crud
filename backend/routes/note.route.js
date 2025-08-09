const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.controller')

router.post('/', noteController.createNote)
router.get('/', noteController.getNotes)
router.delete('/:id', noteController.deleteNote)

module.exports = router