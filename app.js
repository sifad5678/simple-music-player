let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let ctrIcon = document.querySelector('#control-icon');

song.onloademetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if(ctrIcon.classList.contains('fa-pause')){
        song.pause();
        ctrIcon.classList.remove('fa-pause');
        ctrIcon.classList.add('fa-play');
    }else{
        song.play()
        
        ctrIcon.classList.add('fa-pause');
        ctrIcon.classList.remove('fa-play');
    }
}

 
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.add('fa-pause');
    ctrIcon.classList.remove('fa-play');
}
