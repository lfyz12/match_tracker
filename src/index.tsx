import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MatchStore} from "./store/MatchStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const matchStore = new MatchStore()

interface State  {
    matchStore: MatchStore
}

export const Context = createContext<State>({
    matchStore
})

root.render(
  <Context.Provider value={{matchStore}}>
    <App />
  </Context.Provider>
);

reportWebVitals();
