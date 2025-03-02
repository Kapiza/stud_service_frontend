import React from 'react';
import MyButton from "./MyButton";

const SubjectMenu = ({subjects, setSSI, setModalVisible, removeSubject}) => {

    return (
        <div className="SubjectMenu">
            <menu>
                {subjects.map((subject, index) => (
                    <div>

                        <MyButton autoFocus={!index} className={"select-button"} key={subject.title}
                                  onClick={() => setSSI(index)}>
                            {subject.title}
                        </MyButton>
                        <MyButton className = {"delete-card-button"} onClick={() => removeSubject(subject)}>
                            X
                        </MyButton>
                    </div>

                ))}
            </menu>
            <MyButton className={"add-card-button"} onClick={() => setModalVisible(true)}>
                + Карточка
            </MyButton>
        </div>

    );
};

export default SubjectMenu;