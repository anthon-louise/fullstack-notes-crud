const asyncHandler = require('express-async-handler')
const pool = require('../config/db')
const validation = require('../validation/schema')

const createNote = asyncHandler(async (req, res) => {
    const value = await validation.noteSchema.validateAsync(req.body)
    const { title, content } = value

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

const getNotes = asyncHandler(async (req, res) => {
    const [rows] = await pool.query(`
        SELECT * FROM notes
        `)
    res.json({
        success: true,
        message: 'Note successfully fetched',
        notes: rows
    })
})

const deleteNote = asyncHandler(async (req, res) => {
    const value = await validation.idSchema.validateAsync(req.params)
    const noteId = value.id

    const [rows] = await pool.query(`
        SELECT * FROM notes WHERE id=?
        `, [noteId])
    if (rows.lenght === 0) {
        const err = new Error('No notes found')
        err.status = 404
        throw err
    }

    await pool.query(`
        DELETE FROM notes WHERE id=?
        `, [noteId])
    res.json({
        success: true,
        message: 'Note successfully deleted'
    })
})

module.exports = {
    createNote,
    getNotes,
    deleteNote
}
