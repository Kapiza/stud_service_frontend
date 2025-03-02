import React, {useState} from 'react';
import "../styles/App.css"
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const Subject = ({subject, addNote, removeNote}) => {

    const {title, subTitle, notes} = subject;

    // console.log(notes);

    // const [notes, setNotes] = useState([]
    //     // {id:1, title:"Лабораторная 1"},
    // );





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