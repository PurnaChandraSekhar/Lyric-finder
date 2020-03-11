import React, { Component } from 'react';
import Spinner from './layouts/spinner';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

 class Lyrics extends Component {

     state = {
         track: {},
         lyrics: {}
     }

     async componentDidMount() {
         const fetchLyric = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`);

         const LyricResponse = await fetchLyric.json();

         const fetchTrack = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`);

         const TrackResponse =  await fetchTrack.json();

         this.setState( {
             track: TrackResponse.message.body.track,
             lyrics: LyricResponse.message.body.lyrics
         } )
    }

    render() {
        const {track, lyrics} = this.state;
       if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
           return <Spinner />;
       } else {
           return (
               <>
                  <div className="wrapper">
                  <Link to="/" className="btn btn-back">Go Back</Link>
                    <div className="lyric-container">
                    <span className="header">
                    <strong>{track.track_name}</strong> by {track.artist_name}
                    </span>
                    <hr/>
                    <span className="header">
                        <strong>Lyrics</strong>:

                        <p className="text">{lyrics.lyrics_body}</p>
                    </span>
                    </div>
                  </div>

                  <div className="track-details">
                      <p className="header">
                      <strong>Album ID</strong>: {track.track_id}
                      </p>
                      <hr/>
                      <p className="header">
                      <strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                      </p>
                      <hr/>
                      <p className="header">
                      <strong>Release Date</strong>: <Moment format="DD/MM/YYYY">{lyrics.updated_time}</Moment>
                      </p>
                  </div>
               </>
           )
       }
    }
}

export default Lyrics;
