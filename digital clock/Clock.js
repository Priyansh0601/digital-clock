window.onload=()=>{
const clock=()=>{
const date=new Date();
let hour=date.getHours();
let minute=date.getMinutes();
let seconds=date.getSeconds();

if(hour<10)
 {
     hour="0"+hour;
 }
 if(minute<10)
 {
     minute="0"+minute;
 }
 if(seconds<10)
 {
     seconds="0"+seconds;
 }
 const time=hour+":"+minute+":"+seconds;
 document.querySelector("div").innerText=time;
 
 setTimeout(clock,1000);
};
clock();
};