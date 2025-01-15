const trackList = document.getElementById("track-list");
const activeTrack = document.getElementById("active-track");
const mainCoverArt = document.getElementById("main-cover-art");
const activeTrackName = document.getElementById("active-track-name");
const activeArtistName = document.getElementById("active-artist-name");
const playPauseButton = document.getElementById("play-pause-button");
const nextButton = document.getElementById("next-button");

const tracks = [
  { 
    name: "Bad Girls Like You", 
    artist: "Tobii", 
    cover: "../assets/cigs.jpg", 
    src: "../assets/songs/Apocalypse.mp3" 
  },
  { 
    name: "Tainu Khabar Nahi", 
    artist: "Arijit Singh", 
    cover: "../assets/c02.png", 
    src: "../assets/songs/C02.mp3" 
  },
  { 
    name: "SAD GIRLZ LUV MONEY", 
    artist: "Amaarae", 
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a2/Amaarae_-_Sad_Girlz_Luv_Money_%28Remix%29.png", 
    src: "../assets/songs/AUR.mp3" 
  },
  { 
    name: "O Paalanhaare", 
    artist: "Lata Mangeshkar", 
    cover: "https://c.saavncdn.com/072/Lagaan-Hindi-2001-20190603122008-500x500.jpg", 
    src: "../assets/songs/NOOR.mp3" 
  }
];

let currentTrackIndex = null;
let audio = new Audio();
let isPlaying = false;

// GSAP setup
gsap.set(trackList, { opacity: 1, y: 0 });
gsap.set(activeTrack, { opacity: 0, y: 20 });

// Play a track with animations
function playTrack(index) {
  const track = tracks[index];
  mainCoverArt.src = track.cover;
  activeTrackName.textContent = track.name;
  activeArtistName.textContent = track.artist;
  audio.src = track.src;
  audio.play();
  isPlaying = true;
  currentTrackIndex = index;

  // Hide track list and show active track with smooth animations
  gsap.to(trackList, { opacity: 0, y: 20, duration: 0.5, onComplete: () => (trackList.style.display = "none") });
  activeTrack.style.display = "flex";
  gsap.to(activeTrack, { opacity: 1, y: 0, duration: 0.5 });

  playPauseButton.textContent = "Pause";
}

// Toggle play/pause with animations
function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseButton.textContent = "Play";
  } else {
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "Pause";
  }
}

// Play the next track with smooth transitions
function playNextTrack() {
  const nextIndex = (currentTrackIndex + 1) % tracks.length;
  gsap.to(activeTrack, { opacity: 0, y: 20, duration: 0.5, onComplete: () => playTrack(nextIndex) });
}

// GSAP animation for play buttons
document.querySelectorAll(".play-button").forEach(button => {
  gsap.from(button, { opacity: 0, scale: 0.8, duration: 0.8, ease: "elastic.out(1, 0.3)" });
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    playTrack(index);
  });
});

playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextTrack);

// Initial animations for the entire container
gsap.from(".music-player", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });

