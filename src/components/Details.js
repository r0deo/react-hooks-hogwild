// Details.js
import React from "react";

export default function Details({ hog }) {
    if (!hog) return null;

    const { name, specialty, greased, weight, highest } = hog;

    return (
        <div>
            <h2>{name}</h2>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased: {greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {highest}</p>
        </div>
    );
}
