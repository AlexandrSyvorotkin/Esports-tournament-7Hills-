import './App.css';
import HamburgerMenu from "./Components/HamburgerMenu";
import Information from "./Components/Information";
import Disciplines from "./Layout/DisciplinesSection/Disciplines";

const App = () => (
    <div className='app'>
        <Information/>
        <Disciplines/>
        <HamburgerMenu/>
    </div>
);

export default App;
