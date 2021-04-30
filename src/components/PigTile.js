import React, {useState} from "react";
import PigDetails from "./PigDetails"

function PigTile({hog}){
    const [pigDetails, setPigDetails] = useState(false)

    function handlePigClick(){
        setPigDetails((pigDetails) => !pigDetails)
      }

        const {name, image} = hog;

    return(
            <div className="ui card eight wide column pigTile">
                <h3>{name}</h3>
                <img src={image} alt={name}/>
                <div className="pigDetails">
                    {pigDetails?  <PigDetails pig={hog}/> : null}
                    <button onClick={handlePigClick}>
                        {pigDetails ? "Less Info" : "More Info"}
                    </button>
                </div>
            
            </div>
    );
};


export default PigTile;