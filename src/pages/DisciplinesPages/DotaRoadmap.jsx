import React from 'react';

import TournamentRoadMap from "../../Components/TournamentRoadMap";
import dota from '../../Assets/img-for-roadmap/dota2.png'

const DotaRoadmap = ({modalActive, setModalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '2-3 мая',
        playoffs: '8-10 мая',
        final: '11-13 июня'
    }

    return (
        <>
            <TournamentRoadMap
                modalActive={modalActive}
                setModalActive={setModalActive}
                discipline={'Dota'}
                dates={dates}
                img={dota}
            />
        </>
    );
};

export default DotaRoadmap;
