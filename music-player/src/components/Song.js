import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Song({ currentSong }) {
  return <div className="song-container">
    <img src={currentSong.cover} />
    <h1>{currentSong.name}</h1>
    <h3>{currentSong.artist}</h3>
  </div>;
}
