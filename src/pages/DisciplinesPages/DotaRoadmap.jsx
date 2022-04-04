import React from 'react';

import TournamentRoadMap from "../../Components/TournamentRoadMap";

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
            />
        </>
    );
};

export default DotaRoadmap;
