import {useState} from 'react'
import {createNote} from '../services/noteService'
import NoteInput from '../components/NoteInput'
import NoteButton from '../components/NoteButton'

function HomePage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function handleSave() {
        const data = await createNote({title, content})

        if (data.success) {
            alert(data.message)
            setTitle('')
            setContent('')
        } else {
            const message = data.message || 'Error creating note'
            alert(message)
        }
    }

    return (
        <div>
            <NoteInput value={title} onChange={setTitle} placeholder="title"/>
            <NoteInput value={content} onChange={setContent} placeholder="content"/>
            <NoteButton label="Add" onClick={handleSave}/>
        </div>
    )
}

export default HomePage