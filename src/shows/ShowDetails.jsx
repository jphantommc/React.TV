import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from"../episodes/EpisodeDetails";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();
  if (!show) {
    return <p>Please Pick one so you will not be bored!</p> ;
   }
  return (

  <div className = "show-details">
    <EpisodeList
    name={show.name}
    episodes={show.episodes}
    selectedEpisode={selectedEpisode}
    setSelectedEpisode={setSelectedEpisode}
    />
    <EpisodeDetails episode={selectedEpisode} />
  <EpisodeDetails episode={selectedEpisode} />
</div>
  );
   
}
