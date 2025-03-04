// import React, {useState} from 'react';
import "../styles/App.css"
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const Subject = ({subject, addNote, removeNote}) => {

    if (!subject) {
        return (
            // В стилях центрируем сообщение
            <div style={{ position: "absolute", top:  "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                Предмет не выбран
            </div>
    )
    }

    const {title, subTitle, notes} = subject;

    return (
        <div className="Subject">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <NoteList notes = {notes} removeNote = {removeNote} />
            <NoteForm addNote = {addNote}></NoteForm>
        </div>
    );
};

export default Subject;