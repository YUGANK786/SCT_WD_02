const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

function updateDisplay(value) {
  display.value = value;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.textContent;

    if (val === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (e) {
        currentInput = 'Error';
      }
    } else if (val === 'C') {
      currentInput = '';
    } else {
      currentInput += val;
    }

    updateDisplay(currentInput);
  });
});

// Keyboard Input Handling
document.addEventListener('keydown', (event) => {
  const allowed = '0123456789+-*/.=';
  if (allowed.includes(event.key)) {
    if (event.key === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (e) {
        currentInput = 'Error';
      }
    } else {
      currentInput += event.key;
    }
    updateDisplay(currentInput);
  }

  if (event.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch (e) {
      currentInput = 'Error';
    }
    updateDisplay(currentInput);
  }

  if (event.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
  }
});
