import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

function App() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function addNote() {
        const newNote = {
            id: uuid(),
            title: "untitled",
            body: "",
            lastModified: Date.now(),
        };
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    }

    function deleteNote(noteId) {
        setNotes(notes.filter((note) => note.id !== noteId));
    }

    function getActiveNote() {
        return notes.find(({note}) => id === activeNote);
    }

    const updateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArr);
    };

    return (
        <div className="App">
            <Sidebar
                notes={notes}
                addNote={addNote}
                deleteNote={deleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Main activeNote={getActiveNote()} updateNote={updateNote} />
        </div>
    );
}

export default App;
