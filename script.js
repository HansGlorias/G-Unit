

const audio = document.getElementById("audio");
const gUnitButton = document.getElementById("gUnitButton")




audio.src = "50 Cent - Disco Inferno.mp3";
audio.volume = 0.05;


gUnitButton.onclick = play

console.log(audio)

function mute(){

    audio.muted = true;

}

function play(){

    console.log("G-Unit")
    
    audio.play();
}

