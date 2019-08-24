import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import LocationCard from "./LocationCard";

export default function LocationList() {
    // TODO: Add useState to track data from useEffect

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
            .then(res => {
                setLocations(res.data.results);
            })
            .catch(err => console.log(err.response));
    }, []);

    return (
        <section className="location-list grid-view">
            {locations.map(location => (
                <LocationCard key={location.name} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length} />
            ))}
        </section>
    );
}
