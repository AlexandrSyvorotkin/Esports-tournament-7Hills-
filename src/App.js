import './App.css';
import Information from "./Layout/Information";
import Disciplines from "./Layout/Disciplines";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Dota from "./pages/Dota";
import Valorant from "./pages/Valorant";
import Csgo from "./pages/Csgo";
import Fifa from "./pages/Fifa";
import Main from "./pages/Main";

const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/dota' element={<Dota/>} />
            <Route path='/valorant' element={<Valorant/>} />
            <Route path='/csgo' element={<Csgo/>} />
            <Route path='/fifa' element={<Fifa/>} />
        </Routes>
</Router>
);

export default App;
