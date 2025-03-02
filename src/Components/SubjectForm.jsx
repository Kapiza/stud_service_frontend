import React, {useState} from 'react';
import MyInput from "./MyInput";
import MyButton from "./MyButton";
// import "../styles/App.css"

const SubjectForm = ({addSubject}) => {

    const [subject, setSubject] = useState(
        {title: "", subTitle: ""}
    );

    const createSubject = () => {
        subject.id = Date.now();
        addSubject(subject);
        setSubject({title: "", subTitle: ""});
    }

    return (
        <div className="SubjectForm">
            <MyInput
                placeholder={"Заголовок"}
                className={"card-input"}
                value={subject.title}
                onChange={e => setSubject( {...subject, title: e.target.value})}
            />
            <MyInput
                placeholder={"Подзаголовок"}
                className={"card-input"}
                value={subject.subTitle}
                onChange={e => setSubject( {...subject, subTitle: e.target.value})}
            />
            <MyButton className={"add-card-button"} onClick={createSubject} >
                + Карточка
            </MyButton>
        </div>
    );
};

export default SubjectForm;