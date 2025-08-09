import {useState} from 'react'
import {createNote} from '../services/noteService'

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
            alert('Error creating note')
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSave}>Add</button>
        </div>
    )
}

export default HomePage