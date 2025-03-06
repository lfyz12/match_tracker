import React, {FC} from 'react';
import TeamPart from "./TeamPart";
import {IMatch} from "../../../models/IMatch";
import CardStatus from "../cardStatus/CardStatus";

interface matchCardProps {
    match: IMatch
}

const MatchCard: FC<matchCardProps> = ({match}: matchCardProps) => {
    return (
        <div className='bg-[#0B0E12] w-full h-[87px] text-white flex justify-between items-center mb-3 rounded-[4px] p-[16px]'>
            <TeamPart title={match.homeTeam.name} home={true}/>

            <div className='h-full w-1/3 flex flex-col justify-center items-center'>
                <div className='font-semibold w-fit flex justify-center items-center text-xl'>{match.homeScore} : {match.awayScore}</div>
                <CardStatus status={match.status}/>
            </div>

            <TeamPart title={match.awayTeam.name} home={false}/>
        </div>
    );
};

export default MatchCard;