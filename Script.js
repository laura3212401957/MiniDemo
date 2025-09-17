// --- Abstracción: El "Contrato" de los Controles (Volante y Pedales) ---
class IControles {
    acelerar() {
        throw new Error("El método 'acelerar' debe ser implementado.");
    }
    frenar() {
        throw new Error("El método 'frenar' debe ser implementado.");
    }
    girarVolante() {
        throw new Error("El método 'girarVolante' debe ser implementado.");
    }
}


// --- Implementaciones Concretas (Los Motores que cumplen el Contrato) ---
class MotorGasolina extends IControles {
    acelerar() {
        console.log("Motor de Gasolina: Acelerando, el motor ruge y consume combustible.");
    }
    frenar() {
        console.log("Motor de Gasolina: Frenando, las balatas se calientan.");
    }
    girarVolante() {
        console.log("Motor de Gasolina: Girando la dirección asistida.");
    }
}

class MotorElectrico extends IControles {
    acelerar() {
        console.log("Motor Eléctrico: Acelerando, respuesta instantánea y silenciosa.");
    }
    frenar() {
        console.log("Motor Eléctrico: Frenando, se activa el freno regenerativo.");
    }
    girarVolante() {
        console.log("Motor Eléctrico: Girando la dirección electrónica.");
    }
}

class MotorHidrogeno extends IControles {
    acelerar() {
        console.log("Motor de Hidrógeno: Acelerando, se convierte hidrógeno en electricidad.");
    }
    frenar() {
        console.log("Motor de Hidrógeno: Frenando, se reduce la velocidad de la celda.");
    }
    girarVolante() {
        console.log("Motor de Hidrógeno: Girando el volante de la dirección.");
    }
}


// --- Módulo Principal de Alto Nivel: El Conductor ---
class Conductor {
    // El Conductor depende de la abstracción IControles, no de un motor específico
    constructor(controles) {
        this.controles = controles;
    }

    acelerar() {
        this.controles.acelerar();
    }
    frenar() {
        this.controles.frenar();
    }
    girarVolante() {
        this.controles.girarVolante();
    }
}

// --- Lógica para el Demo ---
let conductorActual = null;

function setEngine(motor) {
    // Instanciamos el conductor con la implementación de motor elegida
    conductorActual = new Conductor(motor);
    console.log("--- El Conductor está usando un motor " + motor.constructor.name + " ---");
    document.getElementById('acelerarBtn').disabled = false;
    document.getElementById('frenarBtn').disabled = false;
    document.getElementById('girarVolanteBtn').disabled = false;
}

document.getElementById('btnGasolina').addEventListener('click', () => setEngine(new MotorGasolina()));
document.getElementById('btnElectrico').addEventListener('click', () => setEngine(new MotorElectrico()));
document.getElementById('btnHidrogeno').addEventListener('click', () => setEngine(new MotorHidrogeno()));

document.getElementById('acelerarBtn').addEventListener('click', () => {
    if (conductorActual) conductorActual.acelerar();
});
document.getElementById('frenarBtn').addEventListener('click', () => {
    if (conductorActual) conductorActual.frenar();
});
document.getElementById('girarVolanteBtn').addEventListener('click', () => {
    if (conductorActual) conductorActual.girarVolante();
});

// Desactivar botones de control al inicio
document.getElementById('acelerarBtn').disabled = true;
document.getElementById('frenarBtn').disabled = true;
document.getElementById('girarVolanteBtn').disabled = true;

console.log("Abre la consola (F12) y haz clic en los botones para ver el resultado.");