import React, {useState} from "react";
import PigTile from "./PigTile";
// import hogs from "../porkers_data"

function PigList({hogs}){
    // const [filterBy, setFilterBy] = useState(false);
    const [showGreased, setShowGreased] = useState(false);


        function handleFilter(showGreased){
            setShowGreased((showGreased)=> !showGreased)
        }

        const hogsToDisplay = hogs
        .filter((hog) => (showGreased ? hog.greased : true))
        .sort((hog1, hog2) => hog1.weight - hog2.weight)
        
    const hogsDisplay = hogsToDisplay.map((hog) => 
            (<PigTile key={hog.name} hog={hog}/>))
    

    return (
        <div className="GREASED">
            <input className="ui toggle checkbox"
						checked={showGreased}
						onChange={handleFilter}
						type="checkbox"/>
      
            <div className="ui three stackable cards">
                {hogsDisplay}
            </div> 
         </div>
    );
};

export default PigList;