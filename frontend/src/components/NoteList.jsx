import NoteButton from "./NoteButton"

function NoteList({notes, handleDelete}) {
    return (
        <ul>
            {
                notes.map((note) => (
                    <li key={note.id}>
                        <strong>{note.title}</strong>: {note.content}
                        <NoteButton label="🗑️" onClick={() => handleDelete(note.id)}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default NoteList