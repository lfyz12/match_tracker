import React, {useContext} from 'react';
import './App.css';
import {Context} from "./index";

function App() {
    const {matchStore} = useContext(Context)
    const getMatches = async () => {
        await matchStore.getMatches()
    }

  return (
    <div className="App">
      <button onClick={getMatches} className='w-56 h-20 border border-blue-950 rounded-md mt-5 ms-5'>Get</button>
    </div>
  );
}

export default App;
