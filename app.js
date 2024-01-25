document.addEventListener("DOMContentLoaded", function() {
    calcularFactorial();
});

function calcularFactorial() {
    let numero;

    do {
        let input = prompt("Ingrese un número para calcular su factorial:");
        numero = parseFloat(input);

        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numero));

    let factorial = calcularFactorialRecursivo(numero);

    
    let resultadosDiv = document.createElement("div");
    resultadosDiv.innerHTML = `<p>El factorial de ${numero} es: ${factorial}</p>`;
    document.body.appendChild(resultadosDiv);
}

function calcularFactorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorialRecursivo(n - 1);
    }
}