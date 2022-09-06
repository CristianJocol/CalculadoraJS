//Esta clase nos servira como memoria para guardar todos los numeros que agreguemos. 
class Calculadora{
    //El constructor nos ayudara a saber si el texto ingresado es operando actual o anterior, para saber su posicionamiento en la pantalla.
    constructor(operandoAnteriorElemento, operandoActualElemento) {
        this.operandoActualElemento = operandoActualElemento
        this.operandoAnteriorElemento = operandoAnteriorElemento
    }

    //OPERACIONES GENERALES DE LA CALCULADORA (FUNCIONES)
    limpiar(){
        this.operandoActualElemento = ''
        this.operandoAnteriorElemento = ''
        this.operacion = undefined
    }

    eliminar(){

    }

    appendNumber(number) {
        this.operandoActual = number
    }

    elegirOperacion(operacion) {

    }

    compute() {

    }

    updateDisplay() { 
        this.operandoActualElemento.innerText = this.operandoActual
    }
}

const botonesNumeros = document.querySelectorAll('[data-number]')
const botonesOperaciones = document.querySelectorAll('[data-operation]')
const botoneIgual = document.querySelector('[data-equals]')
const botoneEliminar = document.querySelector('[data-delete]')
const botoneLimpiar = document.querySelector('[data-clear]')
const operandoAnteriorElemento = document.querySelector('[data-operando-anterior]')
const operandoActualElemento = document.querySelector('[data-operando-actual]')

const calculadora = new Calculadora(operandoAnteriorElemento, operandoActualElemento) 

botonesNumeros.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.appendNumber(button.innerText)
        calculadora.updateDisplay()
    })
})