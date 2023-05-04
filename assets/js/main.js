console.log("Welcome");

//Initialize Variables
let songIndex = -1; //get the index of each song
let audioElement = new Audio("assets/js/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay"); // Play button access
let miniplay = document.getElementById("miniplay");
let myProgressBar = document.getElementById("myProgressBar"); // ProgressBar
let songItems = Array.from(document.getElementsByClassName("songItem"));
let newBanner = document.getElementById('songBanner');
let fndName = document.getElementById('bName');
let newArtist = document.getElementById('bArtist');
let timer = document.getElementById('timer');
let volume_slider = document.getElementById("volume");
let songs = [
    {
        songName: "Levitating",
        filepath: "assets/js/songs/1.mp3",
        artist:"Dua Lipa",
        coverPath: "assets/css/covers/1.jpg",
        lyrics: "assets/js/lyrics/1.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Boro-Eka-Lage",
        filepath: "assets/js/songs/2.mp3",
        artist:"Manna Dey",
        coverPath: "assets/css/covers/2.jpg",
        lyrics: "assets/js/lyrics/2.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "O Amar Mon Jamunar",
        filepath: "assets/js/songs/3.mp3",
        artist:"Manna Dey",
        coverPath: "assets/css/covers/3.jpeg",
        lyrics: "assets/js/lyrics/3.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Kotobaro Bhebechhinu",
        filepath: "assets/js/songs/4.mp3",
        artist:"Babul Supriyo",
        coverPath: "assets/css/covers/4.jpeg",
        lyrics: "assets/js/lyrics/4.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Lalita",
        filepath: "assets/js/songs/5.mp3",
        artist: "Manna Dey",
        coverPath: "assets/css/covers/3.jpeg",
        lyrics: "assets/js/lyrics/5.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Pal Pal Dil Ke Pas",
        filepath: "assets/js/songs/6.mp3",
        artist:"Kishore Kumar",
        coverPath: "assets/css/covers/5.jpg",
        lyrics: "assets/js/lyrics/6.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Rangini Koto Mor",
        filepath: "assets/js/songs/7.mp3",
        artist:"Manna Dey",
        coverPath: "assets/css/covers/3.jpeg",
        lyrics: "assets/js/lyrics/7.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Agar tum saath ho",
        filepath: "assets/js/songs/8.mp3",
        artist:"Arijit Singh",
        coverPath: "assets/css/covers/6.jpg",
        lyrics: "assets/js/lyrics/8.txt",
        liked : false,
        disliked : false
    },
    {
        songName: "Ae Dil Hai Mushkil",
        filepath: "assets/js/songs/9.mp3",
        artist:"Arijit Singh",
        coverPath: "assets/css/covers/7.jpg",
        lyrics: "assets/js/lyrics/9.txt",
        liked : false,
        disliked : false
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

/* Important Topic Of Promise
    Link : https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck */
function fetchDuration(path) {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.src = path;
      audio.addEventListener(
        'loadedmetadata',
        () => {
          // To keep a promise maintainable, only do 1
          // asynchronous activity for each promise you make
          resolve(audio.duration)
        },
        );
    })
}


for(let i=0;i<songs.length;i++)
{
    // console.log(songs[i].coverPath);
    newUrl = `${songs[i].coverPath}`;
    newName = `${songs[i].songName}`;
    document.getElementById(`song${i+1}`).setAttribute("style",`background-image:url(${newUrl})`);
    document.getElementById(`n${i}`).innerText = newName;
    document.getElementById(`tN${i}`).innerText = newName;
    document.getElementById(`a${i}`).innerText = songs[i].artist;
    document.getElementById(`tA${i}`).innerText = songs[i].artist;
    document.getElementById(`p${i}`).setAttribute("style",`background-image:url(${newUrl})`);
    let trackDur = document.getElementById(`td${i}`);

    //Fetching the PromiseResult Value using await
    const getDur = async()=>
    {
        const a = await fetchDuration(songs[i].filepath);
        let maxmins = Math.floor(a / 60);
        let maxsecs = Math.floor(a % 60);
        if(maxsecs < 10){
            maxsecs = '0' + String(maxsecs);
        }
        trackDur.innerText = maxmins + ':' + maxsecs;
    }
    getDur();
}

//Function to make the other play buttons play when one is pause
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
        (element) => {
            element.classList.remove("fa-pause");
            element.classList.add("fa-play");
        }
    );
};

const makePlays = ()=>{
    Array.from(document.getElementsByClassName("picIconPlay")).forEach(
        (element) => {
            element.classList.remove("fa-volume-up");
            element.classList.add("fa-play");
        }
    );
};
//Handle play/pause click

const startPlaying = (getIndex) =>{
    
};

let songId = 0;
const forward = () => {
    if (songId >= 8) {
        songId = 0;
    } else {
        songId++;
    }
    miniplay = document.getElementById(`${songId}`);
    makeAllPlays();
    makePlays();
    audioElement.src = `assets/js/songs/${songId + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    miniplay.classList.remove("fa-play");
    miniplay.classList.add("fa-pause");
};


// console.log(songs[songId].liked);

like = document.getElementById("like");
dislike = document.getElementById("dislike")

isLike = false;
isDislike = false;

like.addEventListener("click",()=>{
    if(!isLike){
        like.setAttribute("style","color: rgb(47, 127, 248); font-size: 20px");
            isLike = true;
            dislike.setAttribute("style","color: white; font-size: 20px");
            isDislike = false;
            songs[songId].liked = true;
            // console.log(songs[songId].liked);
            songs[songId].disliked = false;
        }
    });
    
dislike.addEventListener("click",()=>{
        if(!isDislike){
            dislike.setAttribute("style","color: rgb(47, 127, 248); font-size: 20px");
            isDislike = true;
            like.setAttribute("style","color: white; font-size: 20px");
            isLike = false;
            songs[songId].disliked = true;
            // console.log(songs[songId].disliked);
            songs[songId].liked = false;
        }
});
    
const makeAllWhites = ()=>{
    like.setAttribute("style","color: white; font-size: 20px");
    dislike.setAttribute("style","color: white; font-size: 20px");
    isLike = false;
    isDislike = false;
};

const turnLikeOn = ()=>{
    like.setAttribute("style","color: rgb(47, 127, 248); font-size: 20px");
};

const turnDisLikeOn = () =>{
    dislike.setAttribute("style","color: rgb(47, 127, 248); font-size: 20px");
};

const play_pause = ()=>{
    miniplay = document.getElementById(`${songId}`);
    picplay = document.getElementById(`spi${songId}`);
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        miniplay.classList.remove("fa-play");
        miniplay.classList.add("fa-pause");
        picplay.classList.remove("fa-play");
        picplay.classList.add("fa-volume-up");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        miniplay.classList.remove("fa-pause");
        miniplay.classList.add("fa-play");
        picplay.classList.remove("fa-volume-up");
        picplay.classList.add("fa-play");
    }
}
//Setting the banner
const setBanner = ()=>{
    // banner.src = `assets/css/covers/${songId+1}.jpg`;
    newUrl = `${songs[songId].coverPath}`;
    newBanner.setAttribute("style",`background-image:url(${newUrl})`);
}
const setName = ()=>{
    storeName = `${songs[songId].songName}`;
    fndName.innerText = storeName;
}
const setArtist = ()=>{
    storeArtist = `${songs[songId].artist}`;
    newArtist.innerHTML = `<a href="#">${storeArtist}</a>`;
}
setBanner();
setName();
setArtist();

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

const mute = ()=>{
    audioElement.volume = 0;
    volume_slider.value = 0;
    volIcon = document.getElementById("volhigh");
    volIcon.classList.remove("bi-volume-up");
        volIcon.classList.add("bi-volume-mute");
        volIcon.innerHTML = `<path fill="rgba(255, 255, 255, 0.5)" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>`
}

const getVolume = () =>{
    volume_slider.value = 20;
    audioElement.volume = volume_slider.value/100;
    volIcon = document.getElementById("volhigh");
    volIcon.innerHTML = `<path fill="rgba(255, 255, 255, 0.5)" d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>`
}

document.body.onkeydown = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      play_pause();
    }
  }

document.body.onkeyup = function(e) {
    if (e.key == "m" || e.keyCode == 77 || e.code == "KeyM")
    {
        if(audioElement.volume != 0){
            mute();
        }
        else
        {
            getVolume();
        }
    }
}

document.getElementById("next").addEventListener("click", () => {
    if (songId >= 8) {
        songId = 0;
    } else {
        songId++;
    }
    setBanner();
    setName();
    setArtist();
    miniplay = document.getElementById(`${songId}`);
    picplay = document.getElementById(`spi${songId}`);
    makeAllPlays();
    makeAllWhites();
    makePlays();
    if(songs[songId].liked)
    {
        turnLikeOn();
    }
    else if(songs[songId].disliked){
        turnDisLikeOn();
    }
    audioElement.src = `assets/js/songs/${songId + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    miniplay.classList.remove("fa-play");
    miniplay.classList.add("fa-pause");
    picplay.classList.remove("fa-play");
    picplay.classList.add("fa-volume-up");
});
document.getElementById("previous").addEventListener("click", () => {
    if (songId <= 0) {
        songId = 8;
    } else {
        songId -= 1;
    }
    setBanner();
    setName();
    setArtist();
    miniplay = document.getElementById(`${songId}`);
    picplay = document.getElementById(`spi${songId}`);
    makeAllPlays();
    makeAllWhites();
    makePlays();
    if(songs[songId].liked)
    {
        turnLikeOn();
    }
    else if(songs[songId].disliked){
        turnDisLikeOn();
    }
    audioElement.src = `assets/js/songs/${songId + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    miniplay.classList.remove("fa-play");
    miniplay.classList.add("fa-pause");
    picplay.classList.remove("fa-play");
    picplay.classList.add("fa-volume-up");
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

ProgressBar = document.getElementById("ProgressBar");
ProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
    (ProgressBar.value * audioElement.duration) / 100;
});

ProgressBar.addEventListener("click",function(e){
    let x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
    y = e.pageY - this.offsetTop,  // or e.offsetY
    clickedValue = x * this.max / this.offsetWidth;
        audioElement.currentTime =
            (clickedValue * audioElement.duration) / 100;
});

ProgressBar.addEventListener("mouseenter",()=>{
    myProgressBar.setAttribute("style","height:3px");
});

ProgressBar.addEventListener("mouseleave",()=>{
    myProgressBar.setAttribute("style","height:1.5px");
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click",(e)=>{
        idx = parseInt(e.target.id);
        makeAllPlays();
        makeAllWhites();
        makePlays();
        if(songs[songId].liked)
        {
            turnLikeOn();
        }
        else if(songs[songId].disliked){
            turnDisLikeOn();
        }
        console.log(idx);
        let picPlay = document.getElementById(`spi${idx}`);
        // console.log(picPlay.id);
        if (songId != idx) {
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            audioElement.src = `assets/js/songs/${idx + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            picPlay.classList.remove("fa-play");
            picPlay.classList.add("fa-volume-up");
            songId = idx;
            setBanner();
            setName();
            setArtist();
        } else {
            if (!audioElement.paused) {
                e.target.classList.remove("fa-pause");
                e.target.classList.add("fa-play");
                audioElement.pause();
                masterPlay.classList.remove("fa-pause");
                masterPlay.classList.add("fa-play");
                picPlay.classList.remove("fa-volume-up");
                picPlay.classList.add("fa-play");
            } else {
                e.target.classList.remove("fa-play");
                e.target.classList.add("fa-pause");
                audioElement.play();
                picPlay.classList.remove("fa-play");
                picPlay.classList.add("fa-volume-up");
            }
        }
    });
});

//Checking the user button
signIn = document.getElementById("sign");
signIn.addEventListener("click",(e)=>{
    console.log(e);
});

function setVolume(){
    audioElement.volume = volume_slider.value/100;
    console.log(audioElement.volume);
    volIcon = document.getElementById("volhigh");
    // console.log(volIcon.classList);
    if(audioElement.volume<=0.2 && audioElement.volume!=0)
    {
        volIcon.innerHTML = `<path fill="rgba(255, 255, 255, 0.5)" d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>`
    }
    else if(audioElement.volume<=0.6 && audioElement.volume!=0)
    {
        volIcon.innerHTML = `<path fill="rgba(255, 255, 255, 0.5)" d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path fill="rgba(255, 255, 255, 0.5)" d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>`
    }
    else if(audioElement.volume==0)
    {
        volIcon.classList.remove("bi-volume-up");
        volIcon.classList.add("bi-volume-mute");
        volIcon.innerHTML = `<path fill="rgba(255, 255, 255, 0.5)" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>`
    }
    else{
        volIcon.innerHTML = `<path fill="rgba(255, 255, 255, 0.5)" d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
        <path fill="rgba(255, 255, 255, 0.5)" d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
        <path fill="rgba(255, 255, 255, 0.5)" d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>`
    }
};
volume_slider.addEventListener("change",()=>{
    setVolume()
});

volIcon = document.getElementById("volhigh");
volIcon.addEventListener("mouseenter",()=>{
    volume_slider.setAttribute("style","visibility: visible");
});
let control = document.getElementById("bottom")
control.addEventListener("mouseleave",()=>{
    volume_slider.setAttribute("style","visibility: hidden;");
});

