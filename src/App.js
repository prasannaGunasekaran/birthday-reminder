import React,{useState} from "react";
import List from "./list";
import data from "./data";
import "./index.css";


 const App=()=>{
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const leftItems = people.filter((persons) => persons.id !== id);

    setPeople(leftItems);
  };
   return(
    <>
<main className="main">
  <List person={people} removePerson={removeItem} />
  <div className="btn">
  <button type="button" className="button1" onClick={() => setPeople([])}>
        Clear All
  </button>
  </div>
</main>
</>
   )
  }

export default App;
