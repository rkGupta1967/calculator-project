let displayValue = '';
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}
function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteSingle() {
    var display = document.getElementById('display');
    var currentValue = displayValue;
    displayValue = currentValue.slice(0, -1);
    document.getElementById('display').value = displayValue;

}
