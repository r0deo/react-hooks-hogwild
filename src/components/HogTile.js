// HogTile.js
import React, { useState } from "react";
import hogs from "../porkers_data";

export default function HogTile() {
    const [selectedHog, setSelectedHog] = useState(null);

    const handleClick = (hog) => {
        // Toggle the selected hog
        setSelectedHog(selectedHog === hog ? null : hog);
    };

    return (
        <div className="hog-div">
        {hogs.map((hog) => (
            <div className="child-div" key={hog.id} onClick={() => handleClick(hog)}>
                <img src={hog.image} alt={hog.name} width="200px" />
                <h1>{hog.name}</h1>
                {/* Display details if hog is selected */}
                {selectedHog === hog && (
                    <div className="details">
                        <p>Specialty: {hog.specialty}</p>
                        <p>Weight: {hog.weight}</p>
                        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                        <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                    </div>
                )}
            </div>
        ))}
    </div>
    
    );
}
