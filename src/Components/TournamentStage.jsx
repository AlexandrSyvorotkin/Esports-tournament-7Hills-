import React, {useState} from 'react';
import styles from "./TournamentStage.module.scss";
import ButtonModal from "../UI/ButtonModal";
import Modal from "../UI/Modal";

const TournamentStage = ({stage, dates, modalText}) => {

    const [modal, setModal] = useState(false)
    return (
        <>
            <div className={styles.stage} onClick={()=>setModal(true)}>
                <span>{stage}</span>
                <p className={styles.dates}>{dates.qualification}</p>
            </div>
            <div>
                <div className={styles.arrow_icon}/>
            </div>
            <Modal visible={modal} setVisible={setModal}>{modalText}
                <ButtonModal onClick={()=> setModal(false)}>Закрыть</ButtonModal>
            </Modal>
        </>
    );
};

export default TournamentStage;
