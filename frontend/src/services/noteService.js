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
        return {success: false, message: 'Failed to create note'}
    }
}

