import React, {FC} from 'react';
import RefreshIcon from "./RefreshIcon";
import {IMatch} from "../../../models/IMatch";

interface uiButton {
    getMatches: () => void
}

const UiButton: FC<uiButton> = ({getMatches}: uiButton) => {


    return (
        <button
            onClick={getMatches}
            className='bg-[#EB0237] active:bg-[#A01131] disabled:bg-[#701328] w-[204px] h-[56px] rounded-[4px] text-white font-semibold text-lg flex justify-center gap-2 items-center'>
            Обновить <RefreshIcon/>
        </button>
    );
};

export default UiButton;