import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Gallery from './Gallery';
import SpotifyWebApi from 'spotify-web-api-js';
import {FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props){
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if (token){
      spotifyApi.setAccessToken(token);
    }

    this.state={
      loggedIn: token ? true : false,
      query:'',
      artist:null,
      tracks:[]
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1); 
    while ( e = r.exec(q)) { 
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  
  search(){
  
  const BASE_URL='https://api.spotify.com/v1/search?';
  let FETCH_URL =BASE_URL+'q='+this.state.query
    +'&type=artist&limit=1';
  const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
  const auth_token = 'Bearer'+this.state.loggedIn
  
  
  fetch(FETCH_URL,{
    method:'GET',
    headers: {
      'Content-Type' :'application/json',
      'Authorization': auth_token,
      },
    mode: 'cors',
    cache:'default'
    })
  
  .then(response =>
    Promise.resolve({
      data:response.json(),
      status: response.status
    })
    .then(post => post.data)
    .then(json => json.artists)
    .then(items =>{
      console.log(items);
      const artist=items.items[0];
      this.setState(artist);
      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
      fetch(FETCH_URL,{
        method:'GET',
        headers: {
          'Content-Type' :'application/json',
          'Authorization': auth_token,
          },
      })
    .then(response =>response.json())
    .then(json => {
      console.log('artist',json);
      const tracks=json.tracks;
      this.setState({tracks});
    })
  
    })
  );
  
  }

render() {  
let url = 'https://accounts.spotify.com/authorize?' +
'client_id=acf61498c3c04a36a295847926f5e40f&'+
'response_type=code&'+
'redirect_uri=http://localhost:3000/callback&'+
'scope=user-read-private user-read-email&'+
'state=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return (
    <div className="App">
      <div className="App-out">    
          <div className="App-title">Spotify App</div>
            <br></br>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search artist"
                  value ={this.state.query}
                  onChange={event =>{this.setState({query:event.target.value})}}
                  onKeyPress={event=>{
                  if(event.key==='Enter')
                  this.search();
                  }}
                  />
              <InputGroup.Addon onClick={()=>this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
            <br></br>
            {this.state !==null?
              <div>
              <Profile
              artist={this.state}
              />
              <Gallery
              tracks={this.state.tracks}
              />
              </div>:<div></div>}
      <a href={url}>
      <button className="button">Login to search</button>
      </a>
      </div>
</div>
    );
  }
}

export default App;
