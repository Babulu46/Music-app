console.log("Welcome to Hymns Music");

//Initialize the Variables
let songIndex= 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName: "Deevinchave Samruddiga", filepath:"song/1.mp3", coverpath:"covers/1.jpg" },
    {songName: "Deevinchave Samruddiga", filepath:"song/1.mp3", coverpath:"covers/1.jpg" }
]

//Handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(fa-play);
        masterPlay.classList.add(fa-pause);
        gif.style.opacity= 1;
    }
    else 
    {
        audioElement.play();
        masterPlay.classList.remove(fa-pause);
        masterPlay.classList.add(fa-play);
        gif.style.opacity= 0;
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')

})
