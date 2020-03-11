import React, { Component } from 'react';
import {Consumer} from '../../Context';
import Spinner from '../layouts/spinner';
import Track from './Track';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const {track_list, heading} = value; 

                        if(track_list === undefined || track_list.length === 0){
                             return <Spinner />;
                        }
                        else {
                            return (
                                <>
                                    <h3 className="track_heading">{heading}</h3>
                                    <div className="grid-col">
                                      {track_list.map( track => ( 
                                      <Track key={track.track.track_id}
                                       id={track.track.track_id}
                                       track={track.track.track_name}
                                       album={track.track.album_name}
                                       artist={track.track.artist_name}
                                       />
                                      ))}
                                    </div>

                                </>
                            );
                        }
                    }
                }
            </Consumer>
        )
    }
}

export default Tracks;
