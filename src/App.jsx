import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);

    function addNote() {
        const newNote = {
            id: uuid(),
            title: "untitled",
            body: "",
            lastModified: Date.now(),
        };
        setNotes([newNote, ...notes]);
    }

    function deleteNote(idToDelete) {
        setNotes(notes.filter((note) => note.id !== idToDelete));
    }

    function getActiveNote() {
        return notes.findIndex((note) => note.id === activeNote);
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
