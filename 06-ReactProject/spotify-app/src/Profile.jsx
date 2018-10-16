import React , {Component} from 'react';
import './App.css';

class Profile extends Component{

render(){

let artist1 ={name:'',images:[{url:''}], genres:[]};
if(this.props.artist.followers != null){
  artist1 = this.props.artist;
}

return (
  <div className="profile">
  <div className="profile-info">
  <img
      alt=""
      className="profile-img"
      src={artist1.images[0].url}
    />
  <div className="profile-name">{artist1.name}</div>
  <div className="profile-genres">
  {
      artist1.genres.map((genre, k)=>{
        genre = genre !== artist1.genres[artist1.genres.length-1]
        ? `${genre},`
        : `&${genre}`
        return (
          <span key={k} > {genre} </span>
        )
      })
  }
  </div>
  </div>
  </div>
)
}



}

export default Profile;