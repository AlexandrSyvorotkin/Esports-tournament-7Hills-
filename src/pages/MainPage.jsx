import React, {useState} from 'react';
import styles from "../App.module.scss";
import SecondScreen from "../Layout/SecondScreen/SecondScreen";
import Information from "../Layout/Information";
import Disciplines from "../Layout/DisciplinesSection/Disciplines";
import HamburgerMenu from "../Components/HamburgerMenu";

const MainPage = () => {

    // const [secondScreenActive, setSecondScreenActive] = useState(false)

    return (
        <div className={styles.app}>
            {/*{secondScreenActive ?*/}
            {/*    <SecondScreen setSecondScreenActive={setSecondScreenActive}/> :*/}

                    <Information/>
                    <Disciplines/>
                    <HamburgerMenu/>

            }
        </div>
    );
};

export default MainPage;
