console.log("Welcome to spotify");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [

    { songname: "Achyutham keshavam", filepath: 'songs/1.mp3', coverpath: "covers/1.jpg" },
    { songname: "Dandiya", filepath: "songs/2.mp3", coverpath: "covers/1.jpg" },
    { songname: "Manasu Padi", filepath: "songs/3.mp3", coverpath: "covers/1.jpg" },
    { songname: "Oh Mariyaa", filepath: "songs/4.mp3", coverpath: "covers/1.jpg" },
    { songname: "Prema Ane", filepath: "songs/5.mp3", coverpath: "covers/1.jpg" },
    { songname: "Vaalu Kanuladaana", filepath: "songs/6.mp3", coverpath: "covers/1.jpg" },
    { songname: "Roja Roja", filepath: "songs/7.mp3", coverpath: "covers/1.jpg" },
]

songitems.forEach((element,i) => {
    
   
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;    
});

//audioElement.play();

//handle play or pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }

})

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');   
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songname;
       
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=1
    }
    else{
        songIndex -=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songitems].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})