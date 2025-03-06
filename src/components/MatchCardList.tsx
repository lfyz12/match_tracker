import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import MatchCard from "./UI-Kit/matchCard/MatchCard";
import {observer} from "mobx-react-lite";

const MatchCardList = () => {
    const {matchStore} = useContext(Context)

    const getMatches = async () => {
        await matchStore.getMatches()
    }

    useEffect(() => {
        getMatches()
    }, []);

    return (
        <div className='w-full flex flex-col'>
            {matchStore.matches.map(match =>
            <MatchCard match={match}/>)}
        </div>
    );
};

export default observer(MatchCardList);