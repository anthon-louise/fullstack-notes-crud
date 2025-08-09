function NoteInput({value, onChange, placeholder}) {
    return (
        <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default NoteInput