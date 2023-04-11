import React from "react";
import Card from "./components/Card";

function App(){
   return <div className='rootBody'>
     <h1 className="headingStyle largeText">Todo App</h1>
       <Card />
       <Card />
       <Card />
       <Card />
    </div>
}

export default App;