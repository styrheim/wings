import React from 'react';
import './App.css';
import {Bird} from "./BIrd";

function App() {
  return (
    <div className="App">
        <Bird wingScale={+1.00}/>

        <Bird wingScale={+0.90}/>
        <Bird wingScale={+0.80}/>
        <Bird wingScale={+0.70}/>
        <Bird wingScale={+0.60}/>
        <Bird wingScale={+0.50}/>
        <Bird wingScale={+0.40}/>
        <Bird wingScale={+0.30}/>
        <Bird wingScale={+0.20}/>
        <Bird wingScale={+0.10}/>
        <Bird wingScale={+0.00}/>
        <Bird wingScale={-0.05}/>
        <Bird wingScale={-0.15}/>
        <Bird wingScale={-1.00}/>
    </div>
  );
}

export default App;
