import { useState, useEffect } from 'react'
import { createNote, deleteNote } from '../services/noteService'
import NoteInput from '../components/NoteInput'
import NoteButton from '../components/NoteButton'
import NoteList from '../components/NoteList'
import { getNotes } from "../services/noteService"


function HomePage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])

    async function fetchData() {
        const data = await getNotes()
        console.log(data)
        if (Array.isArray(data)) {
            setNotes(data)
        }
    }

    async function handleDelete(id) {
        const data = await deleteNote(id)
        if (data.success) {
            alert(data.message)
            fetchData()
        } else {
            alert(data.message || 'Error deleting note')
        }
    }

    async function handleSave() {
        const data = await createNote({ title, content })

        if (data.success) {
            fetchData()
            alert(data.message)
            setTitle('')
            setContent('')
        } else {
            const message = data.message || 'Error creating note'
            alert(message)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <NoteInput value={title} onChange={setTitle} placeholder="title" />
            <NoteInput value={content} onChange={setContent} placeholder="content" />
            <NoteButton label="Add" onClick={handleSave} />

            {
                notes.length > 0 ? (
                    <NoteList notes={notes} handleDelete={handleDelete} />
                ) : (
                    <p>No notes found</p>
                )
            }
        </div>
    )
}

export default HomePage