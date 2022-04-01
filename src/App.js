import './App.module.scss';
import {Route, Routes} from "react-router-dom";
import CsgoRoadmap from "./pages/CsgoRoadmap";
import FifaRoadmap from "./pages/FifaRoadmap";
import ValorantRoadmap from "./pages/ValorantRoadmap";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import DotaRoadmap from "./pages/DotaRoadmap";
import {useState} from "react";
import ModalContext from "./context/modal-context";


const App = () => {

    const [modalActive, setModalActive] = useState(false)

    const CloseModalHandler = () => setModalActive(false)
    const OpenModalHandler = () => setModalActive(true)

    return (
            <>
                <ModalContext.Provider value={{
                    isModalOpened: modalActive,
                    OpenModal: OpenModalHandler,
                    CloseModal: CloseModalHandler
                }}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/dota' element={<DotaRoadmap/>}/>
                    <Route path='/csgo' element={<CsgoRoadmap />}/>
                    <Route path='/fifa' element={<FifaRoadmap />}/>
                    <Route path='/valorant' element={<ValorantRoadmap />}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                </ModalContext.Provider>
            </>
    )
}

export default App;
