const mysql = require('mysql2/promise')
require('dotenv').config()

const pool = mysql.createPool({
    user: process.env.USER,
    database: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
})

async function initializeDatabase() {
    try {
        const connection = await pool.getConnection()

        await connection.query(`
        CREATE TABLE IF NOT EXISTS notes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title TEXT,
            content TEXT
        )
        `)

        console.log('Database connected')
        connection.release()
    } catch (err) {
        throw new Error(`Initializing database failed: ${err.message}`)
    }
}

initializeDatabase()

module.exports = pool