const dayElem = document.getElementById('day');
const hourElem = document.getElementById('hour');
const minutElem = document.getElementById('minut');
const secElem = document.getElementById('second');
const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

const newYearCountdown = () =>{
  const nowDate = new Date().getTime();
  // console.log(nowDate , newYearTime);
  const distanceTime =  newYearTime - nowDate;
  // console.log(distanceTime);
  const seconds = 1000;
  const minutes = seconds * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const d = Math.floor(distanceTime/day);
  const h = Math.floor((distanceTime % day) / hour);
  const m = Math.floor((distanceTime % hour) /minutes);
  const s = Math.floor((distanceTime % minutes) / seconds);

  dayElem.innerText = d;
  hourElem.innerText = h;
  minutElem.innerText = m;
  secElem.innerText = s
  
  setTimeout( newYearCountdown , 1000)
    
}
newYearCountdown();