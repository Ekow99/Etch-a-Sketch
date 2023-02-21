const container = document.querySelector('main');

const canvas = document.createElement('div');

canvas.classList.add('grid');






container.appendChild(canvas);




const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

slider.addEventListener('input', (event) => {
    const value = event.target.value;
    const displayValue = `${value}x${value}`; // format the value
    sliderValue.textContent = displayValue; // update the value display
    canvas.style.setProperty('--grid-rows', `${value}`);
    canvas.style.setProperty('--grid-cols', `${value}`);
  for (c = 0; c < (value * value); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    canvas.appendChild(cell).className = "grid-item";
  };
  });







// const container = document.querySelector('main');
// const canvas = document.createElement('div');
// canvas.classList.add('grid');
// canvas.setAttribute('style', 'grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);')

// container.appendChild(canvas);






