import React from 'react';
import MyButton from "./MyButton";

const SubjectMenu = ({subjects, setSSI, setModalVisible}) => {

    return (
        <div className="SubjectMenu">
            <menu >
                {subjects.map((subject, index) => (
                    <MyButton autoFocus={!index} className={"select-button"} key={subject.title} onClick={() => setSSI(index)}>
                        {subject.title}
                    </MyButton>
                ))}
            </menu>
            <MyButton className={"add-card-button"} onClick={() => setModalVisible(true)} >
                + Карточка
            </MyButton>
        </div>

    );
};

export default SubjectMenu;