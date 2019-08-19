import React, { useEffect, useState }  from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList () {
    const [episodeData, setEpisodeData] = useState([]);

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
            setEpisodeData(response.data.results);
        })
        .catch(error => console.log("error", error));
    },[]);

    console.log(episodeData);

    return (
        <section className="episode-list grid-view">
            {episodeData.map(episode => (
                <EpisodeCard episodeData={episode} />
            ) )}
        </section>
    );
}