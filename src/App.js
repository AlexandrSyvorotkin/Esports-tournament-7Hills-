import './App.css';
import Information from "./Layout/Information";
import Disciplines from "./Layout/Disciplines";
import RightModalWindow from "./Components/RightModalWindow";
import {useState} from "react";

const App = () => {
    // Переименовать все что связано с модальным окном, вынести гамбургер на верхний уровень!
    const [active, setActive] = useState(true)

    return (
        <>
            <div className='app'>
                <Information/>
                <Disciplines setActive={setActive}/>
            </div>
            {active && <RightModalWindow active={active} setActive={setActive}/>}
        </>
    )

};

export default App;
