// parte 1
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        return 'error: division por cero'
    }
    return a / b;
}

// parte 2
function calculadora(operacion) {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "por favor ingrese numeros validos";
    }else{
        if (operacion === 'Suma') {
            result = suma(num1, num2);
        }else{
            if (operacion === 'Resta') {
                result = resta(num1, num2);
            }else{
                if (operacion === 'Multiplicacion') {
                    result = multiplicacion(num1, num2);
                }else{
                    if (operacion === 'Division') {
                        result = division(num1, num2);
                    }else{
                        result = "operacion no valida";
                    }
                }
            }
        }
    }
    document.getElementById("result").innerHTML = `<strong>RESULTADO</strong> ${result}`;
}



