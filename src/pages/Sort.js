import React, { useState } from "react";
import hogs from "../porkers_data";

export default function Sort() {
    const [sortBy, setSortBy] = useState('');

    function handleSort(event) {
        setSortBy(event.target.value);
    }

    function compareByName(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }

    function compareByWeight(a, b) {
        return a.weight - b.weight;
    }

    const sortedHogs = [...hogs];

    if (sortBy === 'name') {
        sortedHogs.sort(compareByName);
    } else if (sortBy === 'weight') {
        sortedHogs.sort(compareByWeight);
    }

    return (
        <div className="sort">
            <label>Sort:</label>
            <select value={sortBy} onChange={handleSort}>
                <option value="">-- Select --</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            <ul>
                {sortedHogs.map((hog, index) => (
                    <li key={index}>{hog.name} - {hog.weight}</li>
                ))}
            </ul>
        </div>
    );
}
