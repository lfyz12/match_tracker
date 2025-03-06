import React, {FC} from 'react';

interface cardStatusProps {
    status: string
}

const CardStatus: FC<cardStatusProps> = ({status}: cardStatusProps) => {
    return (
        <div
            className={`h-[27px] rounded-[4px] text-white flex justify-center items-center text-xs font-semibold
            ${status === 'Ongoing' ? 'bg-[#43AD28] w-[92px]' : status === 'Finished' ? 'bg-[#EB0237] w-[92px]' : 'bg-[#EB6402] w-[112px]'}`}>
            {status === 'Ongoing' ? 'Live' : status === 'Finished' ? 'Finished' : 'Match preparing'}
        </div>
    );
};

export default CardStatus;