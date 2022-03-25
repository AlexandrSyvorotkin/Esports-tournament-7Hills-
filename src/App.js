import './App.css';
import Disciplines from "./Layout/Disciplines";
import HamburgerMenu from "./Components/HamburgerMenu";
import Information from "./Components/Information";

const App = () => (
    <div className='app'>
        <Information/>
        <Disciplines/>
        <HamburgerMenu/>
    </div>
);

export default App;
