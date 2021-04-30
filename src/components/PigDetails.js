import React, {useState} from "react";

function PigDetails({pig}){

    const { greased, weight, specialty, "highest medal achieved": medal} = pig
    return (
        <div>
            <p>{greased? "Greased" : "Ungreased"}</p>
            <p>Weight: {weight}</p>
            <p>Speciality: {specialty}</p>
            <p>Highest Medal Achieved: {medal}</p>
        </div>
    )
}

export default PigDetails