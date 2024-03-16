import React from "react";
import hogs from "../porkers_data";
 
export default function HogTile() {

     return (
        <div className="dog-div">
            {hogs.map((hog) => (
                <div className="child-div" key={hog.id}>
                    <img src={hog.image}></img>
                    <h1>{hog.name}</h1>
                    
                </div>
                
            ))}
        </div>
    );
}
