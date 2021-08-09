const button = document.querySelector(".btn");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");
const kelvin = document.querySelector(".kelvin");

let lastEdit = `celsius`;

const showLastEdited = () =>{
   celsius.addEventListener('keyup', () => {
      lastEdit = 'celsius';
   });

   fahrenheit.addEventListener('keyup', () => {
    lastEdit = 'fahrenheit';
 })

 kelvin.addEventListener('keyup', () => {
    lastEdit= 'kelvin';
 });
}
showLastEdited();



const convertKoro = (lastEdited)=>{
   if(lastEdited==='celsius'){
    const farnValue = (parseFloat(celsius.value)* 9/5) + 32;
    const kalbnValue = (parseFloat(celsius.value))+ 273.15;
    fahrenheit.value = Math.floor(farnValue);
    kelvin.value = Math.floor(kalbnValue);
    
   }
   else if(lastEdited==='fahrenheit'){ 

      const celValue = (parseFloat(fahrenheit.value)- 32)* 5/9;
      const kalbnValue = (parseFloat(fahrenheit.value)- 32) * 5/9 + 273.15 ; 
      celsius.value = Math.floor(celValue);
      kelvin.value = Math.floor(kalbnValue);
   }
   else if (lastEdited==='kelvin'){
      const celValue = (parseFloat(kelvin.value)- 273.15);
      const farnValue = (parseFloat(kelvin.value)- 273.15) * 9/5 + 32 ;
      celsius.value = Math.floor(celValue);
      fahrenheit.value = Math.floor(farnValue);
   }
   else{

   }
}
button.addEventListener('click',() => {
   convertKoro(lastEdit);
})