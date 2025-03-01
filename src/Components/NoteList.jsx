import React from 'react';
import NoteItem from "./NoteItem";

const NoteList = ({notes, removeNote}) => {
    return (
        <ul>
            {notes.map(note => (
                <NoteItem key={note.id} note={note} removeNote={removeNote} />
            ))}
        </ul>
    );
};

export default NoteList;