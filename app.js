let obj=document.getElementById("fullimage");
let obj2=document.getElementById("fullimageview");
let obj1=document.querySelectorAll("img");

function fullview(imglink) {
    console.log(imglink);
    obj.src=imglink;
    obj2.style.display = "block";
    console.log("button clicked");
}
function closeview() {
    obj2.style.display="none";
}
function bkichange() {
    window.location.reload();
}
setTimeout(() => {
    alert("Changed image successfully");
}, 3000);

let hrs=document.getElementById("hour");
let minute=document.getElementById("min");
let sec=document.getElementById("seconds");

setInterval(() => {
    let currtime=new Date();

    hrs.innerHTML=currtime.toString().slice(16,24).slice(0,2);
    minute.innerHTML=currtime.toString().slice(16,24).slice(3,5);
    sec.innerHTML=currtime.toString().slice(16,24).slice(6);
}, 1000);
