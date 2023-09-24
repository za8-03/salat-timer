// get times
let day = new Date().getDate();
let nextday = day+1;
let timer = new Date().getTime();
;
// get times of prays

let fajr;
let dohr = new Date(`sep ${day},2023 13:30:00`).getTime();
let asr = new Date(`sep ${day},2023 16:53:00`).getTime();
let maghrib = new Date(`sep ${day},2023 19:35:00`).getTime();
let aicha = new Date(`sep ${day},2023 20:46:00`).getTime();
if(timer>aicha){
    fajr = new Date(`sep ${nextday},2023 5:53:00`).getTime();
}else{
    fajr = new Date(`sep ${day},2023 5:53:00`).getTime();
}
// counters of prays

function first(){
    let counter = setInterval(()=>{
        let dateNow = new Date().getTime();
        let time = fajr - dateNow;

            let hour  = Math.floor(time%(1000*60*60*24)/1000/60/60);
            let min  = Math.floor(time%(1000*60*60)/1000/60);
            let second  = Math.floor(time%(1000*60)/1000);
            
            document.querySelector(".hour").innerHTML = hour;
            document.querySelector(".min").innerHTML = min;
            document.querySelector(".sec").innerHTML = second;
            document.querySelector(".overlay").classList.add("active");
            if(time<0){
                clearInterval(counter)
                document.querySelector(".fajr .overlay").classList.remove("active");
             }
        
    
    },1000);
}
function secon(){
    let counter = setInterval(()=>{
        let dateNow = new Date().getTime();
        let time = dohr - dateNow;
         let hour  = Math.floor(time%(1000*60*60*24)/1000/60/60);
            let min  = Math.floor(time%(1000*60*60)/1000/60);
            let second  = Math.floor(time%(1000*60)/1000);
        
            document.querySelector(".hour").innerHTML = hour;
            document.querySelector(".min").innerHTML = min;
            document.querySelector(".sec").innerHTML = second;
            document.querySelector(".dohr .overlay").classList.add("active");
        
            if(time<0){
                clearInterval(counter);
                document.querySelector(".dohr .overlay").classList.remove("active");
            }
              
        
    },1000)
}
function therd(){
    let counter = setInterval(()=>{
        let dateNow = new Date().getTime();
        let time = asr - dateNow;
        
            let hour  = Math.floor(time%(1000*60*60*24)/1000/60/60);
            let min  = Math.floor(time%(1000*60*60)/1000/60);
            let second  = Math.floor(time%(1000*60)/1000);
        
            document.querySelector(".hour").innerHTML = hour;
            document.querySelector(".min").innerHTML = min;
            document.querySelector(".sec").innerHTML = second;
            document.querySelector(".asr .overlay").classList.add("active");

        
            if(time<0){
                clearInterval(counter);
                document.querySelector(".asr .overlay").classList.remove("active");
        }
       
    },1000)
}
function fourd(){
    let counter = setInterval(()=>{
        let dateNow = new Date().getTime();
        let time = maghrib - dateNow;
      
            let hour  = Math.floor(time%(1000*60*60*24)/1000/60/60);
            let min  = Math.floor(time%(1000*60*60)/1000/60);
            let second  = Math.floor(time%(1000*60)/1000);
        
            document.querySelector(".hour").innerHTML = hour;
            document.querySelector(".min").innerHTML = min;
            document.querySelector(".sec").innerHTML = second;
            document.querySelector(".maghreb .overlay").classList.add("active");
            if(time<0){
                clearInterval(counter);
                document.querySelector(".maghreb .overlay").classList.remove("active");
            }
        
    },1000)
}
function five(){
    let counter = setInterval(()=>{
        let dateNow = new Date().getTime();
        let time = aicha - dateNow;
         let hour  = Math.floor(time%(1000*60*60*24)/1000/60/60);
            let min  = Math.floor(time%(1000*60*60)/1000/60);
            let second  = Math.floor(time%(1000*60)/1000);
        
            document.querySelector(".hour").innerHTML = hour;
            document.querySelector(".min").innerHTML = min;
            document.querySelector(".sec").innerHTML = second;
            document.querySelector(".overlay").classList.add("active");
        
            if(time<0){
                clearInterval(counter);
                document.querySelector(".aicha .overlay").classList.remove("active");
            }
          
       
    },1000)
}


if(fajr>timer){
    first();
}else if(dohr>timer){
    secon();
}else if(asr>timer){
    therd();
}else if(maghrib>timer){
    fourd();
}else{
    five();
};

for(let i=1;i<=5;i++){
    let slash = document.querySelector(`.i-slash-${i}`);
    let nonslash = document.querySelector(`.i-none-${i}`);

    nonslash.onclick= ()=>{
        nonslash.style.display = "none";
        slash.style.display = "block";
        let a=false;
        t(a);
    }
    slash.onclick= ()=>{
        slash.style.display = "none";
        nonslash.style.display = "block";
        let a =true;
         console.log(a);
         t(a);
    }
}


let bar = document.querySelector(".bar1");
let cancel = document.querySelector(".bar2");
let home = document.querySelector(".home");
let minu = document.querySelector(".mn");

bar.onclick= ()=>{
    home.style.display = "none";
    minu.style.display ="block";
}
cancel.onclick= ()=>{
    minu.style.display ="none";
    home.style.display = "block";
}

