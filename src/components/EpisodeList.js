import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
            .then(res => {
                setEpisodes(res.data.results);
            })
            .catch(err => console.log(err.response));
    }, []);

    return (
        <section className="episode-list grid-view">
            {episodes.map(episode => (
                <EpisodeCard key={episode.name} name={episode.name} air_date={episode.air_date} episodeNum={episode.episode}/>
            ))}
        </section>
    );
}
