console.log("Welcome");

//Initialize Variables
let songIndex = -1; //get the index of each song
let audioElement = new Audio("assets/js/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay"); // Play button access
let miniplay = document.getElementById("miniplay");
let myProgressBar = document.getElementById("myProgressBar"); // ProgressBar
let songItems = Array.from(document.getElementsByClassName("songItem"));
let banner = document.getElementById('banImg');
let timer = document.getElementById('timer');
let songs = [
    {
        songName: "Levitating",
        filepath: "assets/js/songs/1.mp3",
        artist:"Dua Lipa",
        coverPath: "assets/css/covers/1.jpg",
    },
    {
        songName: "Boro-Eka-Lage",
        filepath: "assets/js/songs/2.mp3",
        artist:"Manna Dey",
        coverPath: "assets/css/covers/2.jpg",
    },
    {
        songName: "O Amar Mon Jamunar",
        filepath: "assets/js/songs/3.mp3",
        artist:"Manna Dey",
        coverPath: "assets/css/covers/3.jpeg",
    },
    {
        songName: "Kotobaro Bhebechhinu",
        filepath: "assets/js/songs/4.mp3",
        artist:"Babul Supriyo",
        coverPath: "assets/css/covers/4.jpeg",
    },
    {
        songName: "Lalita",
        filepath: "assets/js/songs/5.mp3",
        artist: "Manna Dey",
        coverPath: "assets/css/covers/3.jpeg",
    },
    {
        songName: "Pal Pal Dil Ke Pas",
        filepath: "assets/js/songs/6.mp3",
        artist:"Kishore Kumar",
        coverPath: "assets/css/covers/5.jpg",
    },
    {
        songName: "Rangini Koto Mor",
        filepath: "assets/js/songs/7.mp3",
        artist:"Manna Dey",
        coverPath: "assets/css/covers/3.jpeg",
    },
    {
        songName: "Agar tum saath ho",
        filepath: "assets/js/songs/8.mp3",
        artist:"Arijit Singh",
        coverPath: "assets/css/covers/6.jpg",
    },
    {
        songName: "Aye Dil Hai Mushkil-(Title Track)",
        filepath: "assets/js/songs/9.mp3",
        artist:"Arijit Singh",
        coverPath: "assets/css/covers/7.jpg",
    },
];

var len = new Array();
for (let i = 0; i < songs.length; i++) {
    len.push(songs[i].songName.length);
    // console.log(len[i]);
}
len.sort(function (a, b) {
    return a - b;
});
let maxSpeed = len[len.length - 1];
let minSpeed;
for (let i = 0; i < len.length - 1; i++) {
    console.log(len[i]);
}
for (let i = 0; i < len.length - 1; i++) {
    if (len[i] > 19) {
        minSpeed = len[i];
        break;
    }
}
//Not Required(Stored for later use)
let avgSpeed = maxSpeed + minSpeed;
avgSpeed >>= 1;
let getSpeed = 2;

for(let i=0;i<songs.length;i++)
{
    // console.log(songs[i].coverPath);
    newUrl = `${songs[i].coverPath}`;
    newName = `${songs[i].songName}`;
    document.getElementById(`song${i+1}`).setAttribute("style",`background-image:url(${newUrl})`);
    document.getElementById(`n${i}`).innerText = newName;
    document.getElementById(`a${i}`).innerText = songs[i].artist;
}

//Handle play/pause click
let songId = 0;
const forward = () => {
    if (songId >= 8) {
        songId = 0;
    } else {
        songId++;
    }
    miniplay = document.getElementById(`${songId}`);
    makeAllPlays();
    audioElement.src = `assets/js/songs/${songId + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
    masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fill="white" d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`;
    miniplay.classList.remove("fa-play");
    miniplay.classList.add("fa-pause");
};

//Function to make the other play buttons play when one is pause
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
        (element) => {
            element.classList.remove("fa-pause");
            element.classList.add("fa-play");
        }
        );
    };

const play_pause = ()=>{
    miniplay = document.getElementById(`${songId}`);
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("bi-play-circle");
        masterPlay.classList.add("bi-pause-circle");
        masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill="white" d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`;
        miniplay.classList.remove("fa-play");
        miniplay.classList.add("fa-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("bi-pause-circle");
        masterPlay.classList.add("bi-play-circle");
        masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path fill="white"
            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`;
        miniplay.classList.remove("fa-pause");
        miniplay.classList.add("fa-play");
    }
}
//Setting the banner
const setBanner = ()=>{
    // banner.src = `assets/css/covers/${songId+1}.jpg`;
    banner.src = songs[songId].coverPath;
}
setBanner();

let getMaxTime = document.getElementById("maxTime")

let update = setInterval(function() {
    // To prevent displaying NaN
    if (!isNaN(audioElement.duration)) { 
        //Changing the current time
        let mins = Math.floor(audioElement.currentTime / 60);
        let secs = Math.floor(audioElement.currentTime % 60);
        if (secs < 10) {
        secs = '0' + String(secs);
        }
        timer.innerHTML = mins + ':' + secs;
        //Getting the Max Duration of the song  
        let maxmins = Math.floor(audioElement.duration / 60);
        let maxsecs = Math.floor(audioElement.duration % 60);
        if(maxsecs < 10){
            maxsecs = '0' + String(maxsecs);
        }
        getMaxTime.innerHTML = maxmins + ':' + maxsecs;
    }
  }, 10);

masterPlay.addEventListener("click", () => {
    play_pause();
});

document.body.onkeydown = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      play_pause();
    }
  }

document.getElementById("next").addEventListener("click", () => {
    if (songId >= 8) {
        songId = 0;
    } else {
        songId++;
    }
    setBanner();
    miniplay = document.getElementById(`${songId}`);
    makeAllPlays();
    audioElement.src = `assets/js/songs/${songId + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
    masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fill="white" d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`;
    miniplay.classList.remove("fa-play");
    miniplay.classList.add("fa-pause");
    miniplay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fill="white" d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`;
});
document.getElementById("previous").addEventListener("click", () => {
    if (songId <= 0) {
        songId = 8;
    } else {
        songId -= 1;
    }
    setBanner();
    miniplay = document.getElementById(`${songId}`);
    makeAllPlays();
    audioElement.src = `assets/js/songs/${songId + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
    miniplay.classList.remove("fa-play");
    miniplay.classList.add("fa-pause");
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
    // console.log('timeupdate');
    //Update Seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (myProgressBar.value == 100) {
        forward();
    }
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

myProgressBar.addEventListener("click",function(e){
    let x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
    y = e.pageY - this.offsetTop,  // or e.offsetY
    clickedValue = x * this.max / this.offsetWidth;
        audioElement.currentTime =
            (clickedValue * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click",(e)=>{
        idx = parseInt(e.target.id);
        makeAllPlays();
        console.log(idx);
        if (songId != idx) {
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            audioElement.src = `assets/js/songs/${idx + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove("bi-play-circle");
            masterPlay.classList.add("bi-pause-circle");
            masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`;
            songId = idx;
            setBanner();
        } else {
            if (!audioElement.paused) {
                e.target.classList.remove("fa-pause");
                e.target.classList.add("fa-play");
                audioElement.pause();
                masterPlay.classList.remove("bi-pause-circle");
                masterPlay.classList.add("bi-play-circle");
                masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path fill="white"
                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`;
            } else {
                e.target.classList.remove("fa-play");
                e.target.classList.add("fa-pause");
                audioElement.play();
                masterPlay.classList.remove("bi-play-circle");
                masterPlay.classList.add("bi-pause-circle");
                masterPlay.innerHTML = `<path fill="transparent" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`;
            }
        }
    });
});
