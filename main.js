let Fah = document.getElementById("Fah");
let Cel = document.getElementById("Cel");
let Kel = document.getElementById("Kel");
let FKel = document.getElementById("FKel");
let KFah = document.getElementById("KFah");
let KCel = document.getElementById("KCel");

let box = document.getElementById("input");
const Submit = document.getElementById("button");
let h2 = document.getElementById("h2");


Submit.onclick = function(){
    if(Fah.checked){
        let celsius = box.value;
        celsius = Number(celsius);
      let fahrenheit = (celsius * 9/5) + 32;
      h2.textContent = `Your Fahrenheit is ${fahrenheit.toFixed(2)}`
    }
    else if(Cel.checked){
        let fahrenheit = box.value;
        fahrenheit = Number(fahrenheit)
       let celsius = (fahrenheit - 32) * 5/9;
        h2.textContent = `Your Celcius is ${celsius.toFixed(2)}`
    }
    else if(Kel.checked){
        let celsius = box.value;
        celsius = Number(celsius)
       let kelvin = celsius + 273.15;
        h2.textContent = `Your Kelvin is ${kelvin.toFixed(2)}`
    }
    else if(KCel.checked){
        let kelvin = box.value;
       kelvin = Number(kelvin)
       let celsius = kelvin - 273.15;
        h2.textContent = `Your Kelvin is ${celsius.toFixed(2)}`
    }

    else if(FKel.checked){
        let fahrenheit = box.value;
       fahrenheit = Number(fahrenheit)
       let kelvin =  (fahrenheit - 32) * 5/9 + 273.15
        h2.textContent = `Your Kelvin is ${kelvin.toFixed(2)}`
    }
    else if(KFah.checked){
        let kelvin = box.value;
       kelvin = Number(kelvin)
       let fahrenheit = (kelvin - 273.15) * 1.8 + 32
        h2.textContent = `Your Kelvin is ${fahrenheit.toFixed(2)}`
    }
    else{
        h2.textContent = "Please select a unit"
        h2.style.color = "red"
    }
}


