let counter = 0

const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const counterValue = document.getElementById('counter-value');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerText = counter;
})

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerText = counter;
})

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.innerText = counter;
})

