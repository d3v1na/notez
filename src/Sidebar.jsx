function Sidebar({ notes, addNote, deleteNote, activeNote, setActiveNote }) {
    return (
        <div className="appSidebar">
            <div className="appSidebarHeader">
                <h1>notez!</h1>
                <button onClick={addNote}>+</button>
            </div>
            <div className="appSidebarNotes">
                {notes.map(({ id, title, body, lastModified }) => (
                    <div
                        className={`appSidebarNote ${
                            id === activeNote && "active"
                        }`}
                        onClick={() => setActiveNote(id)}
                    >
                        <div className="sidebarNoteTitle">
                            <strong>{title}</strong>
                            <button onClick={(e) => deleteNote(id)}>
                                delete
                            </button>
                        </div>

                        <p></p>

                        <small className="noteMeta">
                            last modified{" "}
                            {new Date(lastModified).toLocaleDateString(
                                "en-GB",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
