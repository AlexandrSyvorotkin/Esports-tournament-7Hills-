import './App.module.scss';
import {Route, Routes} from "react-router-dom";


// Disciplines Routes
import CsgoRoadmap from "./pages/TournamentRoadmaps/CsgoRoadmap";
import FifaRoadmap from "./pages/TournamentRoadmaps/FifaRoadmap";
import ValorantRoadmap from "./pages/TournamentRoadmaps/ValorantRoadmap";
import DotaRoadmap from "./pages/TournamentRoadmaps/DotaRoadmap";

// Routes
import MainPage from "./pages/MainPage";
import NotFound from "./pages/MenuPages/NotFound/NotFound";

// Menu Routes
import AboutProject from "./pages/MenuPages/AboutProject/AboutProject";
import Contacts from "./pages/MenuPages/Contacts/Contacts";
import PhotoGalary from "./pages/MenuPages/PhotoGalary/PhotoGalary";
import Faq from "./pages/MenuPages/FAQ/FAQ";

//Registration Routes
import DotaRegistration from "./pages/RegistrationPages/DotaRegistration";
import CsgoRegistration from "./pages/RegistrationPages/CsgoRegistration";
import ValorantRegistration from "./pages/RegistrationPages/ValorantRegistration";
import FifaRegistration from "./pages/RegistrationPages/FifaRegistration";
import AllRegistration from "./pages/MenuPages/AllRegistrations/AllRegistration";
import Docs from "./pages/MenuPages/Positions/Docs";
import TournamentBrackets from "./pages/MenuPages/TournamentBrakets/TournamentBrackets";
import DotaTournamentBracket from "./pages/TournamentBrackets/DotaTournamentBracket";
import {useState} from "react";
import SideMenuContext from "./context/modal-context";
import ValorantTournamentPage from "./pages/TournamentBrackets/ValorantTournamentPage";
import CsgoTournamentBracket from "./pages/TournamentBrackets/CsgoTournamentBracket";
import FifaTournamentBracket from "./pages/TournamentBrackets/FifaTournamentBracket";



const App = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
            <>
                <SideMenuContext.Provider value={{
                    isSideMenuOpened: menuActive,
                    OpenSideMenu: () => {setMenuActive(true)},
                    CloseSideMenu: () => {setMenuActive(false)}
                }}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>

                    <Route path='dota/*' element={<DotaRoadmap/>}/>
                    <Route path='csgo' element={<CsgoRoadmap/>}/>
                    <Route path='valorant' element={<ValorantRoadmap/>}/>
                    <Route path='fifa' element={<FifaRoadmap/>}/>

                    {/*// Menu pages*/}
                    <Route path='aboutus' element={<AboutProject />}/>
                    <Route path='contacts' element={<Contacts />}/>
                    <Route path='photosgalary' element={<PhotoGalary />}/>
                    <Route path='registration' element={<AllRegistration />}/>
                    <Route path='faq' element={<Faq />}/>
                    <Route path='aboutus' element={<AboutProject />}/>
                    <Route path='/positions/*' element={<Docs/>}/>
                    <Route path='/tournament-brackets/*' element={<TournamentBrackets/>}/>
                    {/*//*/}

                    {/*// Registration pages*/}
                    <Route path='dota-registration' element={<DotaRegistration />}/>
                    <Route path='cs-go-registration' element={<CsgoRegistration />}/>
                    <Route path='valorant-registration' element={<ValorantRegistration />}/>
                    <Route path='fifa-registration' element={<FifaRegistration />}/>
                    {/*//*/}




                    <Route path='tournament-brackets/dota-tournament-bracket/*' element={<DotaTournamentBracket/>}/>
                    <Route path='tournament-brackets/valorant-tournament-bracket/*' element={<ValorantTournamentPage/>}/>
                    <Route path='tournament-brackets/csgo-tournament-bracket/*' element={<CsgoTournamentBracket/>}/>
                    <Route path='tournament-brackets/fifa-tournament-bracket/*' element={<FifaTournamentBracket/>}/>

                    <Route path='*' element={<NotFound/>}/>

                </Routes>
                </SideMenuContext.Provider>
            </>
    )
}

export default App;
