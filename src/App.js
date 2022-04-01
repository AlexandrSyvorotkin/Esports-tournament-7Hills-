import './App.module.scss';
import {Route, Routes} from "react-router-dom";
import CsgoRoadmap from "./pages/CsgoRoadmap";
import FifaRoadmap from "./pages/FifaRoadmap";
import ValorantRoadmap from "./pages/ValorantRoadmap";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import DotaRoadmap from "./pages/DotaRoadmap";
import {useState} from "react";


const App = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/dota' element={<DotaRoadmap modalActive={modalActive} setModalActive={setModalActive}/>}/>
                <Route path='/csgo' element={<CsgoRoadmap modalActive={modalActive} setModalActive={setModalActive}/>}/>
                <Route path='/fifa' element={<FifaRoadmap modalActive={modalActive} setModalActive={setModalActive}/>}/>/>
                <Route path='/valorant' element={<ValorantRoadmap modalActive={modalActive} setModalActive={setModalActive}/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
    )
}

export default App;
