import './styles/App.css'
import Subject from "./Components/Subject";
import {useEffect, useMemo, useState} from "react";
import SubjectMenu from "./Components/SubjectMenu";
import MyModal from "./Components/MyModal";
import SubjectForm from "./Components/SubjectForm";
import axios from "axios";

function App() {

    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await axios.get("http://localhost:5000/get")
        console.log(response.data)
        setSubjects(response.data.subjects);
        setNotesLists(response.data.notesLists);
    }
    useEffect(() => {
        fetchData()
    }, [])

    //

    const [notes, setNotes] = useState([])
    const [notesLists, setNotesLists] = useState([]);
    const [subjects, setSubjects] = useState([]);


    const addSubject = (newSubject) => {
        //Создаем notesList для нашего subject
        setNotesLists([...notesLists, []]);
        newSubject.notes = notesLists.at(-1);

        setSubjects([...subjects, newSubject])

        setModalVisible(false)
    }

    const removeSubject = (subject) => {
        // Получаем индекс subject для удаления соответсвующего notesList
        let index = subjects.indexOf(subject);


        setNotesLists(notesLists.filter((item, i) => i !== index));
        setSubjects(subjects.filter((s) => s.id !== subject.id))
    }


    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    const removeNote = (note) => {
        setNotes(notes.filter(n => n.id !== note.id));
    }


    const [SSI, setSSI] = useState(0) // selectedSubjectIndex

    const [modalVisible, setModalVisible] = useState(false);


    // Для корректного связывания состояний
    useMemo(() => {
        setNotes(notesLists[SSI])
    }, [SSI])

    useMemo(() => {
        setNotesLists((prevState) => {
            const updatedState = [...prevState];

            updatedState[SSI] = notes
            return updatedState;
        })
    }, [notes])

    useMemo(() => {
        setSubjects(prevState => {
            const updatedState = [...prevState];
            if (notesLists[SSI]) { //God, please...
                updatedState[SSI] = {
                    ...updatedState[SSI],
                    notes: notesLists[SSI],
                }
            }
            return updatedState;
        })
    }, [notesLists])



    return (
        <div className="App">
            <SubjectMenu subjects={subjects} setSSI={setSSI} setModalVisible={setModalVisible}
                         removeSubject={removeSubject}/>
            <Subject subject={subjects[SSI]} addNote={addNote} removeNote={removeNote}/>
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <SubjectForm addSubject={addSubject}/>
            </MyModal>
        </div>
    );
}

export default App;

