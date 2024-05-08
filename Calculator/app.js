
const textBox = document.getElementById("textBox"); // input field

function toDisplay(operator) {
    textBox.value += operator;
}

function calc() {
    try {
        textBox.value = eval(textBox.value); // to get whatever the value we have in text and eval it!
    } catch(err) {
        textBox.value = "Error!!";
    }
}

function clearInput() {
    textBox.value = null;
}