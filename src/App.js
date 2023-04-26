import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

function App(){
   return <div className='rootBody'>
     <h1 className="headingStyle largeText">Todo App</h1>
      <div className="col">
      {Data.map((item, index) => <Card key = {index} todoTitle = {item.title} todoDesc = {item.desc} /> )}

      </div>
    </div>
}

export default App;