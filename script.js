let outputDay = document.getElementById("outputDay");
let audioSong = document.getElementById("audioSong");
let volumeOn = document.getElementById("songVolumeOn");
let volumeOff = document.getElementById("songVolumeOff");

let inputDay = document.getElementById("inputDay").addEventListener("keypress", function(event){
    if (event.key === 'Enter') {
        inputDay = document.getElementById("inputDay").value;
        switch(inputDay){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                outputDay.textContent = `${inputDay} is a Weekday. :(`;
                break;
            case "Saturday":
            case "Sunday":
                outputDay.textContent = `${inputDay} is a Weekend. :)`;
                break;
            case "":
                outputDay.textContent = `That's just a blank! >:(`;
                break;
            case "Caturday":
                outputDay.textContent = `(=^·.·^=) Meow!`;
                break;
            case "Meow":
                outputDay.textContent = `Aww ( ,,◕   ̫ ◕,, )`;
                break;
            case "ChatGPT":
                outputDay.textContent = `Beep Boop ┌|∵|┘`;
                break;
            case "Beep Boop":
                outputDay.textContent = `Naturally Stupid ¯\_(ツ)_/¯`;
                break;
            case "Enter":
            case "Entering":
                outputDay.textContent = `You can only find me by pressing enter ( ͡° ͜ʖ ͡°)`;
                break;
            case "Submit":
            case "Submitting":
                outputDay.textContent = `That's actually the fun part, you didn't :/`;
                break;
            case "Weekend":
                outputDay.textContent = `A weekend only consists of 2 days: Sunday & Saturday. Only 2, which is just sad. :<`;
                break;
            case "Weekday":
                outputDay.textContent = `A weekday consists of 7 days: Monday, Tuesday, Wednesday, Thursday, and Friday. WHY ARE THERE SO MANY!? >:|`;
                break;
            default:
                outputDay.textContent = `${inputDay} isn't a day! >:(`;
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
            outputDay.textContent = `${inputDay} is a Weekday. :(`;
            break;
        case "Saturday":
        case "Sunday":
            outputDay.textContent = `${inputDay} is a Weekend. :)`;
            break;
        case "":
            outputDay.textContent = `That's just a blank! >:(`;
            break;
        case "Caturday":
            outputDay.textContent = `(=^·.·^=) Meow!`;
            break;
        case "Meow":
            outputDay.textContent = `Aww ( ,,◕   ̫ ◕,, )`;
            break;
        case "ChatGPT":
            outputDay.textContent = `Beep Boop ┌|∵|┘`;
            break;
        case "Beep Boop":
            outputDay.textContent = `Naturally Stupid ¯\_(ツ)_/¯`;
            break;
        case "Submit":
        case "Submitting":
            outputDay.textContent = `You can only find me by clicking submit ( ͡° ͜ʖ ͡°)`;
            break;
        case "Enter":
        case "Entering":
            outputDay.textContent = `That's actually the fun part, you didn't :/`;
            break;
        case "Weekend":
            outputDay.textContent = `A weekend only consists of 2 days: Sunday & Saturday. Only 2, which is just sad. :<`;
            break;
        case "Weekday":
            outputDay.textContent = `A weekday consists of 7 days: Monday, Tuesday, Wednesday, Thursday, and Friday. WHY ARE THERE SO MANY!? >:|`;
            break;
        default:
            outputDay.textContent = `${inputDay} isn't a day! >:(`;
            break;
    }
}

let songVolumneOn = document.getElementById("songVolumeOn").onclick = function(){
    audioSong.pause();
    if(volumeOn.style.display === "none"){
        volumeOn.style.display = "inline"
        volumeOff.style.display = "none"
    }else{
        volumeOn.style.display = "none"
        volumeOff.style.display = "inline"
    }
}

let songVolumneOff = document.getElementById("songVolumeOff").onclick = function(){
    audioSong.play();
    if(volumeOff.style.display === "none"){
        volumeOn.style.display = "none"
        volumeOff.style.display = "inline"
    }else{
        volumeOn.style.display = "inline"
        volumeOff.style.display = "none"
    }
}