import React from 'react';
import ErrorIcon from "./ErrorIcon";

const ErrorPanel = () => {
    return (
        <div className='bg-[#0F1318] w-[480px] h-[56px] rounded-[4px] p-[16px] flex justify-center items-center gap-[10px]'>
            <ErrorIcon/>
            <span className='font-medium text-lg text-white'>Ошибка: не удалось загрузить информацию</span>
        </div>
    );
};

export default ErrorPanel;