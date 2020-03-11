import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'

 const Track = (props) => {
     const {track, album, id} = props;
    return (
        <div className="track">
            <p><strong><i className="fas fa-play"></i> Track</strong>: {track}</p>
            <p><strong><i className="fas fa-compact-disc"></i> Album</strong>: {album} </p>
            <Link to={`lyrics/track/${id}`} className="btn btn-lyric" ><i className="fas fa-chevron-right"></i> view lyrics</Link>
        </div>
    )
}

export default Track;
