const start=document.querySelector(".startStopBtn")
const reset=document.querySelector(".resetbtn")
// variable for time value
let second=0
let min=0
let hour=0;

let leadiSecond=0
let leadiMin=0
let leadiHours=0

let timeinterval = null;
let timerStatus = "Stoped";

// stop watch function
function stopWatch() {
    second++;

    if (second / 60 ===1) {
        second=0;
        min++;
        
        if (min /60 ===1) {
            min=0;
            hour++
        }
    }


    if (second < 10) {
        leadiSecond = "0" + second.toString();
    }else{
        leadiSecond = second;
    }
    if (min < 10) {
        leadiMin = "0" + min.toString();
    }else{
        leadiMin = min;
    }
    if (hour < 10) {
        leadiHours = "0" + hour.toString();
    }else{
        leadiHours = hour;
    }


    let display=document.getElementById("watch").innerText= leadiHours +":"+ leadiMin +":"+leadiSecond;

}


start.addEventListener("click", function(){
   if (timerStatus === "Stoped") {
    timeinterval = window.setInterval(stopWatch,1000)
    document.getElementById("startStopBtn").innerHTML= `<i class="fa-solid fa-pause" id="paos"></i>`;
    timerStatus = "Started";
   } else{
    window.clearInterval(timeinterval);
    document.getElementById("startStopBtn").innerHTML=`<i class="fa-solid fa-play"  id="play"></i>`;
    timerStatus = "Stoped"
   }
});
reset.addEventListener("click",function () {
    window.clearInterval(timeinterval)
    second =0 ;
    min = 0;
    hour =0;

    document.getElementById("watch").innerHTML="00:00:00"
  
});