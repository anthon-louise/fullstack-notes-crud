const asyncHandler = require('express-async-handler')
const pool = require('../config/db')
const validation = require('../validation/schema')

const createNote = asyncHandler(async (req, res) => {
    const value = await validation.noteSchema.validateAsync(req.body)
    const {title, content} = value

    const [result] = await pool.query(`
        INSERT INTO notes (title, content) VALUES (?, ?)
        `, [title, content])

    res.json({
        success: true,
        message: 'Note successfully created',
        note: {
            id: result.insertId,
            title,
            content
        }
    })
})

module.exports = {
    createNote
}
