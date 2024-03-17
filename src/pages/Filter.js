// Filter.js
import React from "react";
import hogs from "../porkers_data";

export default function Filter() {
    const greasedHogs = hogs.filter((hog) => hog.greased);

    return (
        <div className="Filter">
        <div>
            <h1>Greased Hogs</h1>
            {greasedHogs.map((hog) => (
                <div className="hog-card" key={hog.id}>
                    <p>{hog.name}</p>
                    <img src={hog.image} alt={hog.name} />
                    {/* Add more details if needed */}
                </div>
            ))}
        </div>
    </div>
    
    );
}
