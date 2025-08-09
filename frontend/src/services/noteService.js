const API_URL = 'http://localhost:5000'

export async function createNote(note) {
    const res = await fetch(`${API_URL}/notes`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(note)
    })
    return res.json()
}