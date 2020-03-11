import React, { Component } from 'react';
import {Consumer} from '../../Context';

 class Search extends Component {
     state = {
         trackTitle: ""
     }

     handleChange = (e) => {
         this.setState( {
             [e.target.name]: e.target.value
         } );
     }
     
      formSubmit = async (dispatch, e) => {
         e.preventDefault();

         const request = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&apikey=${process.env.REACT_APP_API_KEY}`);

         const response = await request.json();

         dispatch( {
             type: 'SEARCH_TRACKS',
             payload: response.message.body.track_list
         } );

         this.setState( {
             trackTitle: ""
         } );
        
     }

    render() {
        return (
            <Consumer>
                {
                  value => {
                      const {dispatch} = value;
                      return (
                          <>
                          <div className="search-container">
                              <h1 className="main-heading">
                                  <i className="fas fa-music"></i> Search For A Song
                              </h1>
                               <h3 className="primary-heading">
                                   get the lyrics for any song
                               </h3>
                          </div>
                          <form className="form" onSubmit={this.formSubmit.bind(this, dispatch)}>
                              <input type="text"
                               value={this.state.trackTitle}
                               name="trackTitle"
                               onChange={this.handleChange}
                               placeholder="Search for a song"
                               autoComplete="off"
                               className="inp"/>
                               <button className="btn btn-search" type="submit">Search</button>
                          </form>
                          </>
                      )
                  }  
                }
            </Consumer>
        )
    }
}

export default Search;
