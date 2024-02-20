console.log('Welcome to Spotify');

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:'Let  Me Love You - ft Justin Bieber', filePath:'songs/1.mp3', coverPath:'covers/A.jpg'},
    {songName:'Admirin You - Karan Aujla', filePath:'songs/2.mp3', coverPath:'covers/B.jpg'},
    {songName:'Chithiyaan - Karan Aujla', filePath:'songs/3.mp3', coverPath:'covers/C.jpg'},
    {songName:'King Shit - Shubh', filePath:'songs/4.mp3', coverPath:'covers/D.jpg'},
    {songName:'Ram Siya Ram - Sachet Tandon', filePath:'songs/5.mp3', coverPath:'covers/E.jpg'},
    {songName:'Bhula Dena - Mustafa Zahid', filePath:'songs/6.mp3', coverPath:'covers/F.jpg'},
    {songName:'Tum hi ho - Arijit Singh', filePath:'songs/7.mp3', coverPath:'covers/F.jpg'},
    {songName:'YKWIM - karan Aujla, KR$NA', filePath:'songs/8.mp3', coverPath:'covers/H.jpeg'},
    {songName:'Dandelions - Ruth B.', filePath:'songs/9.mp3', coverPath:'covers/I.jpeg'},
    {songName:'On My Way - Alan Walker', filePath:'songs/10.mp3', coverPath:'covers/J.jpg'},
]

songItems.forEach((element,i)=> {
    element.getElementsByTagName('img')[0].src= songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause(); 
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
     audioElement.src = `songs/${songIndex}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10)
    {
        songIndex=0;
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
}) 