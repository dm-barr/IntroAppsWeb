let cantidadNumeros = 0;
let numeros = [];

function iniciarIngreso() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    if (!cantidad || cantidad < 1) {
        mostrarError('Por favor, ingresa un número válido mayor a 0');
        return;
    }
    
    cantidadNumeros = cantidad;
    
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
    
    generarInputs();
}

function generarInputs() {
    const container = document.getElementById('inputs-container');
    container.innerHTML = '';
    
    for (let i = 0; i < cantidadNumeros; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = `Número ${i + 1}:`;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `numero-${i}`;
        input.min = '0';
        input.placeholder = 'Ingresa un número no negativo';
        input.required = true;
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        container.appendChild(inputGroup);
    }

    document.getElementById('numero-0').focus();
}

function encontrarMenor() {
    numeros = [];
    let valido = true;

    for (let i = 0; i < cantidadNumeros; i++) {
        const input = document.getElementById(`numero-${i}`);
        const valor = parseInt(input.value);
        
        if (input.value === '' || isNaN(valor) || valor < 0) {
            input.style.borderColor = '#ff6b6b';
            valido = false;
        } else {
            input.style.borderColor = '#e0e0e0';
            numeros.push(valor);
        }
    }
    
    if (!valido || numeros.length !== cantidadNumeros) {
        mostrarError('Por favor, completa todos los campos con números no negativos');
        return;
    }

    const menor = Math.min(...numeros);
    mostrarResultado(menor);
}

function mostrarResultado(menor) {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');
    
    document.getElementById('menor-valor').textContent = menor;
    document.getElementById('info-numeros').textContent = 
        `Números ingresados: ${numeros.join(', ')}`;
}

function reiniciar() {
    cantidadNumeros = 0;
    numeros = [];
    document.getElementById('cantidad').value = '';
    document.getElementById('step1').classList.remove('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('resultado').classList.add('hidden');
    const errorMsg = document.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
    document.getElementById('cantidad').focus();
}

function mostrarError(mensaje) {
    const errorAnterior = document.querySelector('.error-message');
    if (errorAnterior) {
        errorAnterior.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = mensaje;
    
    const stepActivo = document.querySelector('.step:not(.hidden)');
    stepActivo.insertBefore(errorDiv, stepActivo.firstChild);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cantidad').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            iniciarIngreso();
        }
    });
});
