var valor = document.getElementById("valor");
valor.addEventListener('keyup',convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
unidad1.addEventListener('change',convertir);
unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change',convertir);

var resultado;


function convertir(){
    if(valor.value==''){
        return;
    }

    numero = valor.value;
    numero = parseFloat(numero);

    if(unidad1.value=="kilometros" && unidad2.value=="kilometros"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="kilometros" && unidad2.value=="metros"){
        resultado = numero * 1000;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="kilometros" && unidad2.value=="centimetro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="kilometros" && unidad2.value=="milimetro"){
        resultado = numero * 1e+6;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="kilometros" && unidad2.value=="pulgada"){
        resultado = numero * 39370.1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="kilometros" && unidad2.value=="pies"){
        resultado = numero * 3280.84;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="kilometros" && unidad2.value=="yarda"){
        resultado = numero * 1093.61;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="kilometros" && unidad2.value=="milla"){
        resultado = numero * 0.621371;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="kilometros"){
        resultado = numero * 0.001;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="metros"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="milimetro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="metros" && unidad2.value=="pulgada"){
        resultado = numero * 39.3701;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="pies"){
        resultado = numero * 3.28084;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="yarda"){
        resultado = numero * 1.09361;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="metros" && unidad2.value=="milla"){
        resultado = numero * 0.000621371;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="kilometros"){
        resultado = numero * 1e-5;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="metros"){
        resultado = numero * 0.01;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="centimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="milimetro"){
        resultado = numero * 10;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="centimetro" && unidad2.value=="pulgada"){
        resultado = numero * 0.393701;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="pies"){
        resultado = numero * 0.0328084;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="yarda"){
        resultado = numero * 0.0109361;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="centimetro" && unidad2.value=="milla"){
        resultado = numero * 6.2137e-6;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="kilometros"){
        resultado = numero * 1e-6;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="metros"){
        resultado = numero * 0.001;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="centimetro"){
        resultado = numero * 0.1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="milimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="milimetro" && unidad2.value=="pulgada"){
        resultado = numero * 0.0393701;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="pies"){
        resultado = numero * 0.00328084;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="yarda"){
        resultado = numero * 0.00109361;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milimetro" && unidad2.value=="milla"){
        resultado = numero * 6.2137e-7;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="kilometros"){
        resultado = numero * 2.54e-5;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="metros"){
        resultado = numero * 0.0254;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="centimetro"){
        resultado = numero * 2.54;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="milimetro"){
        resultado = numero * 25.4;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="pulgada" && unidad2.value=="pulgada"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="pies"){
        resultado = numero * 0.083333;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="yarda"){
        resultado = numero * 0.0277778;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pulgada" && unidad2.value=="milla"){
        resultado = numero * 1.5783e-5;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="kilometros"){
        resultado = numero * 0.0003048;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="metros"){
        resultado = numero * 0.3048;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="centimetro"){
        resultado = numero * 30.48;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="milimetro"){
        resultado = numero * 304.8;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="pies" && unidad2.value=="pulgada"){
        resultado = numero * 12;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="pies"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="yarda"){
        resultado = numero * 0.3333;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="pies" && unidad2.value=="milla"){
        resultado = numero * 0.000189394;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="kilometros"){
        resultado = numero * 0.0009144;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="metros"){
        resultado = numero * 0.9144;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="centimetro"){
        resultado = numero * 91.44;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="milimetro"){
        resultado = numero * 914.4;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="yarda" && unidad2.value=="pulgada"){
        resultado = numero * 36;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="pies"){
        resultado = numero * 3;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="yarda"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="yarda" && unidad2.value=="milla"){
        resultado = numero * 0.000568182;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="kilometros"){
        resultado = numero * 1.60934;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="metros"){
        resultado = numero * 1609.34;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="centimetro"){
        resultado = numero * 160934;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="milimetro"){
        resultado = numero * 1.609e+6;
        txtResultado.innerHTML = resultado 
    }

    if(unidad1.value=="milla" && unidad2.value=="pulgada"){
        resultado = numero * 63360;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="pies"){
        resultado = numero * 5280;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="yarda"){
        resultado = numero * 1760;
        txtResultado.innerHTML = resultado
    }

    if(unidad1.value=="milla" && unidad2.value=="milla"){
        resultado = numero * 1;
        txtResultado.innerHTML = resultado
    }

    
}

