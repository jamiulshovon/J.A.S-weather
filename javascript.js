let icon=document.querySelector('.fa-solid');
let inputValue=document.querySelector('.geosearch');
let city=document.querySelector('.cityname');
let  des=document.querySelector('.description');
let  high=document.querySelector('.hi');
let  low=document.querySelector('.low');
let  temp=document.querySelector('.temperature');


let defaultpicarray=["images/3 (1).jpg","images/3 (1).png","images/3 (10).jpg","images/3 (11).jpg","images/3 (3).jpg","images/3 (4).jpg","images/3 (5).jpg","images/3 (6).jpg","images/3 (7).jpg","images/3 (8).jpg","images/3 (9).jpg"];

let randombackground= Math.floor(Math.random() * defaultpicarray.length);

let randSelect = "\'" +defaultpicarray[randombackground] + "\'";
console.log(randSelect);
document.getElementById("bg").style.backgroundColor="rgba(4,5,5,0.5)";
document.body.style.background='url('+randSelect+') no-repeat center center / cover';

icon.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5d4dd67e7d986febe8da4dd4ff23c270')

  .then(response => response.json())
  .then(data =>{
    
    
    let countryNAme=data['name'];
    city.innerHTML=countryNAme;

    let tem=data['main'] ['temp'];
    let celcius=parseInt(tem)-273.15;
    temp.innerHTML=Math.round(celcius);


    let desc=data['weather'] ['0'] ['main'];
    des.innerHTML=desc;
    console.log(data);
    
    let great=data ['main'] ['temp_max'];
    let celciusGreat=parseInt(great)-273.15;
    high.innerHTML=Math.round(celciusGreat);

    let min=data ['main'] ['temp_min'];
    let celciusMin=parseInt(min)-273.15;
    low.innerHTML=Math.round(celciusMin);

if(desc=="Clouds"){
document.body.style.background="Url('images/a.jpg') no-repeat center center / cover";
let h1= document.getElementsByTagName("h1");
for(let i=0 ; i < h1.length;i++){
  h1[i].style.color="#000000";

  let descrip= document.querySelectorAll(".description");
for(let i=0; i<descrip.length;i++){
  descrip[i].style.color="#000000";
}
}

}
else if(desc=="Haze"){
  document.body.style.background="Url('images/c.png') no-repeat center center / cover";
  let h1=document.getElementsByTagName("h1");
for(let i=0 ; i < h1.length;i++){
  h1[i].style.color="#000000";
}
let descrip= document.querySelectorAll(".description");
for(let i=0; i<descrip.length;i++){
  descrip[i].style.color="#000000";
}
 }
  });
   
 });

 