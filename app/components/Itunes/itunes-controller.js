import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  for (let i = 0; i < results.length; i++) {
    let song = results[i] // style="height: 393px"
    template += `<div class="col-12 col-md-3 offset-md-1 card-img-top text-center" id="song-card"> 
        <img class="card-img-top" src="${song.albumArt}" style="max-height:245px; max-width:245px"/>
        <div class="card-body">
          <h4 class="card-title" id="overflow-text">${song.title}</h4>
          <h5 id="overflow-text">${song.artist}  - ${song.collection}</h5> <br/>
          <h7>$${song.price}</h7> <br/>
          <audio style="width: 90%;" controls src="${song.preview}"></audio>
        </div>
                  </div >
                  `
  }
  document.getElementById('songs').innerHTML = template;
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    //@ts-ignore
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      // @ts-ignore
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController