const watch = document.querySelector(".watch");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const lapButton = document.querySelector(".lap");
const lapsContainer = document.querySelector(".laps");
let [hours , minutes,seconds,milliseconds] = [0,0,0,0];
let lapCounter = 1;
let init = null;

start.addEventListener("click",Start);
stop.addEventListener("click",Stop);
reset.addEventListener("click",Reset);
lapButton.addEventListener("click", Lap);

function Start(){
   if(init !== null){
      clearInterval(init);
   }
    init = setInterval(Time,10);
   
}
function Stop(){
  clearInterval(init);
}
function Reset(){
  clearInterval(init);
  [hours , minutes,seconds,milliseconds] = [0,0,0,0];
  lapCounter = 1;
  watch.innerHTML= "00 : 00 : 00 : 000";
  lapsContainer.innerHTML = "";
  

}
function Lap() {
    const lapTime = watch.innerHTML;
    const lapItem = document.createElement("div");
    lapItem.textContent = ` ${lapCounter} : ${lapTime}`;
    lapsContainer.appendChild(lapItem);
    lapCounter++;
}
function Time(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds==60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h = hours<10 ? "0"+hours : hours;
    let m = minutes<10 ? "0"+minutes : minutes;
    let s = seconds<10 ? "0"+seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100? "0" + milliseconds:milliseconds;
    watch.innerHTML= `${h} : ${m} : ${s} : ${ms}`;
}
