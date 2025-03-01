import React from 'react';
import "../styles/App.css"
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const Subject = ({title, teacher, notes, removeNote, createNote}) => {
    return (
        <div className="Subject">
            <h1>{title}</h1>
            <h3>{teacher}</h3>
            <NoteList notes = {notes} removeNote = {removeNote} />
            <NoteForm createNote = {createNote}></NoteForm>
            {/*<MyInput value={notes} onChange={e => setNotes([...notes, e.target.value])} type="text"></MyInput>*/}
        </div>
    );
};

export default Subject;