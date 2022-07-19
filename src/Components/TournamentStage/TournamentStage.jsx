import React, {useState} from 'react';
import ReactDOM from "react-dom";
import styles from "./TournamentStage.module.scss";
import ButtonModal from "../../UI/ButtonModal";
import Modal from "../../UI/Modal";
const TournamentStage = ({stage, StageDates, modalText, arrow}) => {


    const [modal, setModal] = useState(false)

    return (
        <>
            <div className={styles.info}>
                <div className={styles.stage} onClick={() => setModal(true)}>
                    <span>{stage}</span>
                </div>
                <div className={styles.dates}>
                    <p>{StageDates}</p>
                </div>
            </div>
            {arrow ?
                <div className={styles.arrow_icon}/>
             : null}
            {ReactDOM.createPortal(<Modal visible={modal} setVisible={setModal}>{modalText}
                <ButtonModal onClick={() => setModal(false)}>Закрыть</ButtonModal>
            </Modal>, document.getElementById('modal'))}
        </>
    );
};

export default TournamentStage;
