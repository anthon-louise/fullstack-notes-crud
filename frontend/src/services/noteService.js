import axios from 'axios'

const API_URL = 'http://localhost:5000'

export async function createNote(note) {
    try {
        const res = await axios.post(`${API_URL}/notes`, note)
        return res.data
    } catch (err) {
        if (err.response && err.response.data) {
            return err.response.data
        }
        return { success: false, message: 'Failed to create note' }
    }
}

export async function getNotes() {
    try {
        const res = await axios.get(`${API_URL}/notes`)
        return res.data.notes
    } catch (err) {
        console.error('Error fetching notes', err)
        return { success: false, message: 'Failed to fetch notes' }
    }
}

export async function deleteNote(id) {
    try {
        const res = await axios.delete(`${API_URL}/notes/${id}`)
        return res.data
    } catch (err) {
        if (err.response && err.response.data) {
            return err.response.data
        }
        return { success: false, message: 'Failed to delete note' }
    }
}