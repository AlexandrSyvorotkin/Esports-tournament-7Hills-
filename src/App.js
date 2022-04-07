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
import DotaFormRegistration from "./Components/DIsciplinesForms/DotaFormRegistration";
import DotaRegistration from "./pages/RegistrationPages/DotaRegistration";
import CsgoRegistration from "./pages/RegistrationPages/CsgoRegistration";



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
                    <Route path='/Esports-tournament-7Hills-' element={<MainPage/>}/>
                    <Route path='/Esports-tournament-7Hills-/dota' element={<DotaRoadmap/>}/>
                    <Route path='/Esports-tournament-7Hills-/csgo' element={<CsgoRoadmap />}/>
                    <Route path='/Esports-tournament-7Hills-/fifa' element={<FifaRoadmap />}/>
                    <Route path='/Esports-tournament-7Hills-/valorant' element={<ValorantRoadmap />}/>
                    <Route path='/Esports-tournament-7Hills-/aboutus' element={<AboutProject />}/>
                    <Route path='/Esports-tournament-7Hills-/contacts' element={<Contacts />}/>
                    <Route path='/Esports-tournament-7Hills-/photosgalary' element={<PhotoGalary />}/>
                    <Route path='/Esports-tournament-7Hills-/faq' element={<Faq />}/>
                    <Route path='/Esports-tournament-7Hills-/aboutus' element={<AboutProject />}/>
                    <Route path='/Esports-tournament-7Hills-/dota-registration' element={<DotaRegistration />}/>
                    <Route path='/Esports-tournament-7Hills-/cs-go-registration' element={<CsgoRegistration />}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                </ModalContext.Provider>
            </>
    )
}

export default App;
