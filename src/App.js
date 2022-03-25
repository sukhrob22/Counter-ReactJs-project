
import React, { useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css'j
import Counter from "./components/counter/Counter";

import './App.css';


function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decreament = () => {
        setCounter(counter - 1);
    };
    
    const refresh = ()=> {
        setCounter(0)
    }
    
    return ( <div className = "App" > 
   
    <Counter refresh={refresh} decreament={decreament} increment={increment} counter={counter}/>
   
    </div> );
}
export default App;