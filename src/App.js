import './App.module.scss';
import HamburgerMenu from "./Components/HamburgerMenu";
import Disciplines from "./Layout/DisciplinesSection/Disciplines";
import {useState} from 'react'
import SecondScreen from "./Layout/SecondScreen/SecondScreen";
import styles from './App.module.scss'
import Information from "./Layout/Information";
import {Route, Router, Routes} from "react-router-dom";
import DotaDiscipline from "./pages/DotaDiscipline";
import CsgoDiscipline from "./pages/CsgoDiscipline";
import FifaDiscipline from "./pages/FifaDiscipline";
import ValorantDiscipline from "./pages/ValorantDiscipline";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";


const App = () => {

    return (
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/dota' element={<DotaDiscipline/>}/>
                <Route path='/csgo' element={<CsgoDiscipline/>}/>
                <Route path='/fifa' element={<FifaDiscipline/>}/>
                <Route path='/valorant' element={<ValorantDiscipline/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
    )
}

export default App;
