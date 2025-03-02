import './styles/App.css'
import Subject from "./Components/Subject";
import {useEffect, useMemo, useState} from "react";
import SubjectMenu from "./Components/SubjectMenu";
import MyModal from "./Components/MyModal";
import SubjectForm from "./Components/SubjectForm";

function App() {

    const [notes, setNotes] = useState([{id:0, title:"lol"}])
    const [notesLists, setNotesLists] = useState([notes, notes]);

    const [subjects, setSubjects] = useState([
        {
            id: Date.now(),
            title: "Математика",
            subTitle: "Кириллов",
            notes: notesLists[0]
        },
        {
            id: Date.now(),
            title: "Программирование",
            subTitle: "Моргунов",
            notes: notesLists[1]
        }
    ]);




    const addSubject = (newSubject) => {
        setSubjects([...subjects, newSubject])
        setModalVisible(false)
    }

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
        // console.log(notes);
    }

    // console.log(notes)

    const removeNote = (note) => {
        setNotes(notes.filter(n => n.id !== note.id));
        console.log("removeNote");
    }



    const [SSI, setSSI] = useState(0) // selectedSubjectIndex

    //     useMemo(()=>{
    //     return [...subjects].filter((index) => index === SSI)
    // }, [subjects, SSI])

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setNotes(notesLists[SSI])
    }, [SSI])

    useEffect(() => {
        setNotesLists((prevState) => {
            const updatedState = [...prevState];
            updatedState[SSI] = notes;
            return updatedState;
        })
    }, [notes])

    useEffect(() => {
        setSubjects(prevState => {
            const updatedState = [...prevState];
            updatedState[SSI] ={
                ...updatedState[SSI],
                notes: notesLists[SSI],
            } ;
            return updatedState;
        })
    }, [notesLists])

    console.log("notes " + notes)
    console.log("notesLists " + notesLists)
    console.log("subjects " + subjects)


    return (

        <div className="App">
            <SubjectMenu subjects={subjects} setSSI={setSSI} setModalVisible={setModalVisible}/>
            <Subject subject={subjects[SSI]} addNote={addNote} removeNote={removeNote}/>
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
                {<SubjectForm addSubject = {addSubject}/>}
            </MyModal>
            {/*<Subject notes={notes} removeNote={removeNote} createNote={createNote} title={"Математика"} teacher={"Кириллов К.А."}/>*/}
        </div>
    );
}

export default App;

