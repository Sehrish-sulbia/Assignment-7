var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');

var min = document.querySelector('.temp_min');
var max = document.querySelector('.temp_max');

var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');





button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ff507549a3348287e2102ffa15bc732a')
    .then(response => response.json())
    .then(data => {
    console.log(`logging data : ${data}`);
    console.log(data);
      var tempValue = data['main']['temp']-273.15;
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
      var min_temp = data['main']['temp_min']-273.15;
      var max_temp = data['main']['temp_max']-273.15;
    
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - "+descValue;
    
      min.innerHTML = "mintemp-" + min_temp;
      max.innerHTML = "maxtemp-" + max_temp;
      console.log(min);
      console.log(min.innerHTML);
      console.log(desc.innerHTML);
      temp.innerHTML = "Temp - "+tempValue;
    
      input.value ="";
    })
    .catch(error => console.log(error));
    });