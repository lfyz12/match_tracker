import React, {FC} from 'react';
import teamLogo from '../../../assets/teamLogo.png'
interface teamPartProps {
    title: string
    home: boolean
}

const TeamPart: FC<teamPartProps> = ({title, home}: teamPartProps) => {
    return (
        <div className='w-fit h-full font-semibold text-[16px] flex justify-start items-center gap-2'>
            <img alt='logo' src={teamLogo} className={`h-[48px] w-[48px] ${home ? '' : 'order-1'}`}/>
            {title}
        </div>
    );
};

export default TeamPart;