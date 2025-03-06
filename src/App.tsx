import React from 'react';
import './App.css';
import MatchCardList from "./components/MatchCardList";
import Header from "./components/Header";
import {observer} from "mobx-react-lite";

function App() {


  return (
    <div className="App px-8 pt-10 bg-[#06080C] w-screen h-screen">
        <Header/>
        <MatchCardList/>
    </div>
  );
}

export default observer(App);
