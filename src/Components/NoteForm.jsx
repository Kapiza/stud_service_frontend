import {useState} from 'react';
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import "../styles/App.css"


const NoteForm = ({addNote}) => {

    const [note, setNote] = useState({id: "", title: ""});

    const createNote = () => {
        note.id = Date.now();
        // note.notes = [];
        addNote(note)
        setNote({id: "", title: ""});
    }

    return (
        <div className="NoteForm">
            <MyInput
                placeholder={"..."}
                className="note-input"
                value={note.title}
                onChange={e => setNote({...note, title: e.target.value})}
            />
            <MyButton className="add-button" onClick={createNote}>+ Заметка</MyButton>
        </div>
    );
};

export default NoteForm;