var video = document.querySelector('#mivideo');
var boton_rep = document.querySelector('#repro')
var volume = video.volume;

function reproducir(){
    if(video.paused){
        video.play()
        boton_rep.innerHTML='<span class="icon-pause2"></span>'
    }else {
        video.pause()
        boton_rep.innerHTML='<span class="icon-play3"></span>'
    }
}

function detener() {
    video.pause()
    video.currentTime=0
    boton_rep.innerHTML='<span class="icon-play3"></span>'
}

function saltar(fotogramas) {
    video.currentTime += fotogramas
}

function volumen(){ 
var obj = document.createElement('audio');
console.log(obj.volume); // 1
obj.volume = 0.75;
}