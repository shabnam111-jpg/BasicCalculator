let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function calculateSquare() {
    display.value = Math.pow(eval(display.value), 2);
}

function calculateInt() {
    display.value = parseInt(eval(display.value));
}

function calculatePercentage() {
    display.value = eval(display.value) / 100;
}

function memoryAdd() {
    memory += eval(display.value) || 0;
}

function memorySubtract() {
    memory -= eval(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}

// Keyboard input handling
// Keyboard input handling
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') { // 0-9 and dot
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Backspace' || key === 'Delete') {
        deleteLast(); // Now Delete & Backspace both remove only last character
    } else if (key === '%') {
        calculatePercentage();
    }
});

