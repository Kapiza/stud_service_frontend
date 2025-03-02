import React from 'react';
import "../styles/MyModal.css"

const MyModal = ({children, modalVisible, setModalVisible}) => {

    const rootClasses = ['myModal'];

    if(modalVisible){
        rootClasses.push('myModalActive');
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalVisible(false)} >
            <div className={"myModalContent"} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    );
};

export default MyModal;