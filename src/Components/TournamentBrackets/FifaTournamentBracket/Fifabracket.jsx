import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import GroupStage from "../GroupStages/GroupStage";
import PlayoffStage from "../PlayOffs/PlayoffStage";
import ButtonBrackets from "../../../UI/ButtonBrackets";

const Fifabracket = ({groups, playoffs}) => {
    return (
        <div>
            <Link to='group-stage'><ButtonBrackets>Групповая стадия</ButtonBrackets></Link>
            <Link to='playoffs-stage'><ButtonBrackets>Плей-офф</ButtonBrackets></Link>
            <Routes>
                <Route path='group-stage' element={<GroupStage groups={groups}/>}/>
                <Route path='playoffs-stage' element={<PlayoffStage playoffs={playoffs}/>}/>
            </Routes>
        </div>
    );
};

export default Fifabracket;