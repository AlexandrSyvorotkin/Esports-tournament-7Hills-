import './App.css';
import HamburgerMenu from "./Components/HamburgerMenu";
import Information from "./Components/Information";
import Disciplines from "./Layout/DisciplinesSection/Disciplines";
import {useState} from 'react'
import SecondScreen from "./Layout/SecondScreen/SecondScreen";


const App = () => {

    const [secondScreenActive, setSecondScreenActive] = useState(false)

    return (
        <div className='app'>

            {secondScreenActive ?
                <SecondScreen setSecondScreenActive={setSecondScreenActive}/> :
                <>
                    <Information/>
                    <Disciplines/>
                    {/*<HamburgerMenu setSecondScreenActive={setSecondScreenActive}/>*/}
                </>
            }
        </div>
    )
}



 // все нейминги стилей привести к одному значению!!!
// Переделать адаптив + брейкпоинты с 600пикселй
// Подумать над ховером картинок
//classnames

export default App;
