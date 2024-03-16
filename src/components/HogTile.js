// HogTile.js
import React, { useState } from "react";
import hogs from "../porkers_data";
import Details from './Details';

export default function HogTile() {
    const [details, setDetails] = useState(null);

    function changeDetails(hog) {
        setDetails(hog);
    }
        
    return (
        <div className="hog-div">
            {hogs.map((hog) => (
                <div className="child-div" key={hog.id}>
                    <img src={hog.image} alt={hog.name} />
                    <h1 onClick={() => changeDetails(hog)}>{hog.name}</h1>
                    {details && details.id === hog.id && <Details hog={details} />}
                </div>
            ))}
        </div>
    );
}
