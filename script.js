const moneda1 = document.getElementById('moneda-1');
const moneda2 = document.getElementById('moneda-2');
const cantidad1 = document.getElementById('valor-1');
const cantidad2 = document.getElementById('valor-2');
const cambio = document.getElementById('cambiar');
const tazaEl = document.getElementById('taza');


// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_1 = moneda1.value;
    const moneda_2 = moneda2.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_1}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_2];
       
       cambio.innerText = `1 ${moneda_1} = ${taza} ${moneda_2}`;

       cantidad2.value = (cantidad1.value * taza).toFixed(2);

    } );
    
}

//Event listeners
moneda1.addEventListener('change', calculate);
cantidad1.addEventListener('input', calculate);
moneda2.addEventListener('change', calculate);
cantidad2.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = moneda1.value;
    moneda1.value = moneda2.value;
    moneda2.value = temp;
    calculate();
} );


calculate()

