import React from "react";
import Card from "./components/Card";

function App(){
   return <div className='rootBody'>
     <h1 className="headingStyle largeText">Todo App</h1>
       <Card todoTitle = "call mother" todoDesc = "This is desc1" />
       <Card todoTitle = "call father" todoDesc = "This is desc2" />
       <Card todoTitle = "call wife" todoDesc = "This is desc3"/>
    </div>
}

export default App;