import React, {useContext, useState} from 'react';
import logo from '../assets/logo.png'
import UIButton from "./UI-Kit/UIButton/UIButton";
import {Context} from "../index";
import ErrorPanel from "./UI-Kit/UIButton/ErrorPanel";
import {observer} from "mobx-react-lite";
const Header = () => {
    const {matchStore} = useContext(Context)

    const getMatches = async () => {
            await matchStore.getMatches();
    };



    return (
        <div className='w-full h-fit flex justify-between items-center mb-5'>
            <img alt={'logo'} src={logo} className='max-w-[257px] max-h-8'/>
            <div className='w-fit h-fit gap-3 flex items-center'>
                {matchStore.error && <ErrorPanel/>}
                <UIButton getMatches={getMatches}/>
            </div>
        </div>
    );
};

export default observer(Header);