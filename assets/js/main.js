console.log("Welcome")

//Initialize Variables
let songIndex = 0;
let audioElement = new Audio('assets/js/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let miniplay = document.getElementById('miniplay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem')); 
let songs = [
    {songName: "Levitating Dua Lipa", filepath: 'assets/js/songs/1.mp3', coverPath: 'assets/css/covers/1.jpg'},
    {songName: "Boro-Eka-Lage Manna Dey", filepath: 'assets/js/songs/2.mp3', coverPath: 'assets/css/covers/2.jpg'},
    {songName: "O Amar Mon Jamunar Onge Onge", filepath: 'assets/js/songs/3.mp3', coverPath: 'assets/css/covers/3.jpeg'},
    {songName: "Kotobaro Bhebechhinu", filepath: 'assets/js/songs/4.mp3', coverPath: 'assets/css/covers/4.jpeg'},
    {songName: "Lalita Go", filepath: 'assets/js/songs/5.mp3', coverPath: 'assets/css/covers/3.jpeg'},
    {songName: "Pal Pal Dil Ke Pas Blackmail", filepath: 'assets/js/songs/6.mp3', coverPath: 'assets/css/covers/5.jpeg'},
    {songName: "Rangini Koto Mor", filepath: 'assets/js/songs/7.mp3', coverPath: 'assets/css/covers/3.jpeg'},
    {songName: "Agar tum saath ho", filepath: 'assets/js/songs/8.mp3', coverPath: 'assets/css/covers/6.jpg'},
    {songName: "Aye Dil Hai Mushkil Arijit Singh", filepath: 'assets/js/songs/9.mp3', coverPath: 'assets/css/covers/7.jpg'},
]

var len = new Array();
for(let i = 0;i<songs.length;i++)
{
    len.push(songs[i].songName.length);
    // console.log(len[i]);
}
len.sort(function(a,b){return a-b});
let maxSpeed = len[len.length - 1];
let minSpeed;
for(let i=0;i<len.length-1;i++)
{
    console.log(len[i]);
}
for(let i=0;i<len.length-1;i++)
{
    if(len[i]>19)
    {
        minSpeed = len[i];
        break;
    }
}
let avgSpeed = maxSpeed + minSpeed;
avgSpeed >>= 1;
let getSpeed = 2;
// console.log(avgSpeed);
songItems.forEach((element, i) => {
    console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    let l = songs[i].songName.length;
    if(l>19){
        
        element.getElementsByClassName("getName")[0].innerHTML = `<marquee scrollamount = `+getSpeed+`behavior = "scroll">`+songs[i].songName+`</marquee>`;
    }
    else{
        element.getElementsByClassName("getName")[0].innerText = songs[i].songName;
    }
});

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        masterPlay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`
        miniplay.classList.remove('bi-play-circle');
        miniplay.classList.add('bi-pause-circle');
        miniplay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        masterPlay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path
            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`
            miniplay.classList.remove('bi-pause-circle');
            miniplay.classList.add('bi-play-circle');
            miniplay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`
    }
})
// miniplay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0)
//     {
//         audioElement.play();
//         miniplay.classList.remove('bi-play-circle');
//         miniplay.classList.add('bi-pause-circle');
//         miniplay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//         <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`
//         masterPlay.classList.remove('bi-play-circle');
//         masterPlay.classList.add('bi-pause-circle');
//         masterPlay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//         <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`
//     }
//     else{
//         audioElement.pause();
//         miniplay.classList.remove('bi-pause-circle');
//         miniplay.classList.add('bi-play-circle');
//         miniplay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//         <path
//             d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`
//         masterPlay.classList.remove('bi-pause-circle');
//         masterPlay.classList.add('bi-play-circle');
//         masterPlay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//         <path
//             d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`
//     }
// })
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //Update Seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('bi-pause-circle');
        element.classList.add('bi-play-circle');
        element.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path
            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />`
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        
        makeAllPlays();
        idx = parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');
        e.target.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`
        audioElement.src = `assets/js/songs/${idx+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        masterPlay.innerHTML = `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>`
    })
})