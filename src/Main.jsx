function Main({ activeNote, updateNote }) {
    function editField(field, value) {
        updateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        });
    }
    return (
        <div className="appMain">
            <div className="appMainNoteEdit">
                <input
                    type="text"
                    id="title"
                    placeholder="title"
                    value={activeNote.title}
                    onChange={(e) => editField("title", e.target.value)}
                    autoFocus
                />
                <textarea
                    id="body"
                    placeholder="take a  note.."
                    value={activeNote.body}
                    onChange={(e) => editField("body", e.target.value)}
                />
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">
                    {activeNote.body}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default Main;
