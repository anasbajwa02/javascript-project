// 

const songs = [
  { song: "song.mp4", name: "HAS HAS", pic: "img.jpg" },
  { song: "Ve-Kamleya.mp4", name: "VE kamleya", pic: "img3.jpg" },
  { song: "Le-Aaunga.mp4", name: "LE Aaunga", pic: "img2.jpg" },
];

let currntIndex = 0;

// Get DOM elements
const musicPic = document.getElementById("music-pic");
const musicName = document.querySelector(".music-name");
const playSong = document.getElementById("song");

// Load saved data or default
window.onload = () => {
  currntIndex = localStorage.getItem("currentSongIndex") || 0;
  currntIndex = parseInt(currntIndex);
  loadSong(currntIndex);

  const savedTime = localStorage.getItem("currentTime") || 0;
  playSong.currentTime = parseFloat(savedTime);
};

// Load a song by index
function loadSong(index) {
  currntIndex = index;
  const currentSong = songs[currntIndex];
  musicPic.src = currentSong.pic;
  musicName.textContent = currentSong.name;
  playSong.src = currentSong.song;

  localStorage.setItem("currentSongIndex", currntIndex);
  playSong.play();
}

// Next song
function next() {
  const newIndex = (currntIndex + 1) % songs.length;
  loadSong(newIndex);
}

// Previous song
function pre() {
  const newIndex = (currntIndex - 1 + songs.length) % songs.length;
  loadSong(newIndex);
}

// Save current playback time
playSong.addEventListener("timeupdate", () => {
  localStorage.setItem("currentTime", playSong.currentTime);
});
