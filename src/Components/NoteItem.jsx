import React from 'react';
import MyButton from "./MyButton";
import "../styles/App.css"

const NoteItem = ({note, removeNote}) => {
    return (
        <div className="Note">
            <p>
                {note.title}
            </p>
            <MyButton className={"delete-button"} onClick={() => removeNote(note)}>
                Удалить
            </MyButton>
        </div>


    );
};

export default NoteItem;