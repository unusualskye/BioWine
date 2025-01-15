document.addEventListener("DOMContentLoaded", () => {
    // Sample data
    const rpcData = {
        avatarLeftUrl: "./assets/avatar.png",
        avatarRightUrl: "https://i.imgur.com/B9Q3zsr.gif",
        username: "Wine ♡",
        status: "In Love with Skye <3",
        details: "",
        images: [
            "/assets/icon1.png", // First image
            "/assets/icon2.png"  // Second image
        ]
    };

    // Update the avatars and details
    document.getElementById("rpc-avatar-left").src = rpcData.avatarLeftUrl;
    document.getElementById("rpc-avatar-right").src = rpcData.avatarRightUrl;
    document.getElementById("rpc-username").textContent = rpcData.username;
    document.getElementById("rpc-status").textContent = rpcData.status;
    document.getElementById("rpc-details").textContent = rpcData.details;

    // Get the container and clear it to avoid duplication
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear existing items

    document.getElementById("rpc-username").style.textAlign = "left";

    // Add exactly 2 images
    rpcData.images.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Icon";
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.margin = "0 5px";
        img.style.borderRadius = "5px";
        img.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.7)";
        imageContainer.appendChild(img);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const muteButton = document.getElementById("mute-button");
    const audio = document.getElementById("background-audio");

    // Start with the audio muted
    audio.muted = true;

    muteButton.addEventListener("click", () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play();
            muteButton.textContent = "🔊"; // Change icon to unmute
        } else {
            audio.muted = true;
            audio.pause();
            muteButton.textContent = "🔇"; // Change icon to mute
        }
    });
});

const songs = [
    {
        title: "Song Title 1",
        artist: "Artist 1",
        cover: "./assets/song1-cover.jpg",
        audio: "./assets/song1.mp3"
    },
    {
        title: "Song Title 2",
        artist: "Artist 2",
        cover: "./assets/song2-cover.jpg",
        audio: "./assets/song2.mp3"
    },
    {
        title: "Song Title 3",
        artist: "Artist 3",
        cover: "./assets/song3-cover.jpg",
        audio: "./assets/song3.mp3"
    },
    {
        title: "Song Title 4",
        artist: "Artist 4",
        cover: "./assets/song4-cover.jpg",
        audio: "./assets/song4.mp3"
    }
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].audio);
const coverArt = document.getElementById("cover-art");
const playPauseBtn = document.getElementById("play-pause");
const nextSongBtn = document.getElementById("next-song");

document.querySelectorAll(".play-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
        currentSongIndex = index;
        updateSong();
        playMusic();
    });
});

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
});

nextSongBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
    playMusic();
});

function updateSong() {
    audio.src = songs[currentSongIndex].audio;
    coverArt.src = songs[currentSongIndex].cover;
}

function playMusic() {
    audio.play();
    playPauseBtn.textContent = "⏸️";
}

function pauseMusic() {
    audio.pause();
    playPauseBtn.textContent = "▶️";
}

