import './styles/App.css'
import Subject from "./Components/Subject";
import {useState} from "react";




function App() {

    const [notes, setNotes] = useState([]
        // {id:1, title:"Лабораторная 1"},
        // {id:2, title:"Лабораторная 2"},
        // {id:3, title:"Лабораторная 3"}
    );

    const createNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    const removeNote = (note) => {
        setNotes(notes.filter(n => n.id !== note.id));
        console.log("removeNote");
    }

    return (

        <div className="App">
            <Subject notes={notes} removeNote={removeNote} createNote={createNote} title={"Математика"} teacher={"Кириллов К.А."}/>
        </div>
    );
}

export default App;

