import { useState, useEffect } from "react"

function NoteList({notes}) {
    return (
        <ul>
            {
                notes.map((note) => (
                    <li key={note.id}>
                        <strong>{note.title}</strong>: {note.content}
                    </li>
                ))
            }
        </ul>
    )
}

export default NoteList