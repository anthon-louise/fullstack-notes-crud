function NoteButton({label, onClick, disabled = false}) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}

export default NoteButton