import React from 'react';
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import "../styles/App.css"
// import fs from "fs";

const NoteForm = ( {createNote}) => {

    const [note, setNote] = React.useState({id:"", title:""});

    // const fs = require('fs')


    const addNote = () => {
        //Сохраняем изменение в файл
        // let rawData = fs.readFileSync("./data.json");
        // let parsedData = JSON.parse(rawData);
        // parsedData.push(note);
        // let data = JSON.stringify(parsedData);
        // fs.writeFileSync("./data.json", data);

        //
        note.id = Date.now();
        createNote(note)
        setNote({id:"", title:""});
    }

    return (
        <div className="NoteForm">
            <MyInput
                value = {note.title}
                onChange={e => setNote({...note, title: e.target.value})}
            ></MyInput>
            <MyButton className= "add-button" onClick={addNote}>+ Заметка</MyButton>
        </div>
    );
};

export default NoteForm;