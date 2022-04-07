import './App.module.scss';
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import ModalContext from "./context/modal-context";

// Disciplines Routes
import CsgoRoadmap from "./pages/DisciplinesPages/CsgoRoadmap";
import FifaRoadmap from "./pages/DisciplinesPages/FifaRoadmap";
import ValorantRoadmap from "./pages/DisciplinesPages/ValorantRoadmap";
import DotaRoadmap from "./pages/DisciplinesPages/DotaRoadmap";

// Routes
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

// Menu Routes
import AboutProject from "./pages/MenuPages/AboutProject";
import Contacts from "./pages/MenuPages/Contacts";
import PhotoGalary from "./pages/MenuPages/PhotoGalary";
import Faq from "./pages/MenuPages/FAQ";

//Registration Routes
import DotaRegistration from "./pages/RegistrationPages/DotaRegistration";
import CsgoRegistration from "./pages/RegistrationPages/CsgoRegistration";
import ValorantRegistration from "./pages/RegistrationPages/ValorantRegistration";
import FifaRegistration from "./pages/RegistrationPages/FifaRegistration";



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
                    <Route path='/csgo' element={<CsgoRoadmap/>}/>
                    <Route path='/valorant' element={<ValorantRoadmap/>}/>
                    <Route path='/fifa' element={<FifaRoadmap/>}/>

                    <Route path='/aboutus' element={<AboutProject />}/>
                    <Route path='/contacts' element={<Contacts />}/>
                    <Route path='/photosgalary' element={<PhotoGalary />}/>
                    <Route path='/faq' element={<Faq />}/>
                    <Route path='/aboutus' element={<AboutProject />}/>

                    <Route path='/dota-registration' element={<DotaRegistration />}/>
                    <Route path='/cs-go-registration' element={<CsgoRegistration />}/>
                    <Route path='/valorant-registration' element={<ValorantRegistration />}/>
                    <Route path='/fifa-registration' element={<FifaRegistration />}/>

                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                </ModalContext.Provider>
            </>
    )
}

export default App;
