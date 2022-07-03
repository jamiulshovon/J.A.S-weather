let icon=document.querySelector('.fa-solid');
let inputValue=document.querySelector('.geosearch');
let city=document.querySelector('.cityname');
let  des=document.querySelector('.description');
let  high=document.querySelector('.hi');
let  low=document.querySelector('.low');
let  temp=document.querySelector('.temperature');


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

}

  });
   
 });

 