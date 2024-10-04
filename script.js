function appendToDisplay(value) {
    document.calculatorForm.display.value += value;
}

function clearDisplay() {
    document.calculatorForm.display.value = '';
}

function deleteLast() {
    document.calculatorForm.display.value = document.calculatorForm.display.value.slice(0, -1);
}

function calculate() {
    try {
        document.calculatorForm.display.value = eval(document.calculatorForm.display.value);
    } catch (e) {
        document.calculatorForm.display.value = 'Error';
    }
}
