let audioSong = document.getElementById("audioSong");

let inputDay = document.getElementById("inputDay").addEventListener("keypress", function(event){
    if (event.key === 'Enter') {
        inputDay = document.getElementById("inputDay").value;
        switch(inputDay){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                document.getElementById("outputDay").textContent = `${inputDay} is a Weekday. :(`;
                break;
            case "Saturday":
            case "Sunday":
                document.getElementById("outputDay").textContent = `${inputDay} is a Weekend. :)`;
                break;
            case "":
                document.getElementById("outputDay").textContent = `That's just a blank! >:(`;
                break;
            case "Caturday":
                document.getElementById("outputDay").textContent = `(=^·.·^=) Meow!`;
                break;
            default:
                document.getElementById("outputDay").textContent = `${inputDay} isn't a day! >:(`;
                break;
        }
    }
})

let submitDay = document.getElementById("submitDay").onclick = function(){
    inputDay = document.getElementById("inputDay").value;
    switch(inputDay){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            document.getElementById("outputDay").textContent = `${inputDay} is a Weekday. :(`;
            break;
        case "Saturday":
        case "Sunday":
            document.getElementById("outputDay").textContent = `${inputDay} is a Weekend. :)`;
            break;
        case "":
            document.getElementById("outputDay").textContent = `That's just a blank! >:(`;
            break;
        case "Caturday":
            document.getElementById("outputDay").textContent = `(=^·.·^=) Meow!`;
            break;
        default:
            document.getElementById("outputDay").textContent = `${inputDay} isn't a day! >:(`;
            break;
    }
}

let songVolumneOn = document.getElementById("songVolumeOn").onclick = function(){
    audioSong.pause();
    if(volumeOn.style.display === "none"){
        volumeOn.style.display = "inline";
        volumeOff.style.display = "none";
    }else{
        volumeOn.style.display = "none";
        volumeOff.style.display = "inline";
    }
}

let songVolumneOff = document.getElementById("songVolumeOff").onclick = function(){
    audioSong.play();
    if(volumeOff.style.display === "none"){
        volumeOn.style.display = "none";
        volumeOff.style.display = "inline";
    }else{
        volumeOn.style.display = "inline";
        volumeOff.style.display = "none";
    }
}