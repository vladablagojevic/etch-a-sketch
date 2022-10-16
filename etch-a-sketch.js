const container = document.getElementById('container');
const divs = document.getElementsByClassName('divs');
const blackBtn = document.getElementById('blackBtn');
const rgbBtn = document.getElementById('rgbBtn');
const eraseAllBtn = document.getElementById('eraseAllBtn');
const eraseOneByOneBtn = document.getElementById('eraseOneByOne');
const colorPicker = document.getElementById('colorPicker');
const slider = document.getElementById('gridRange');
const sliderCounter = document.getElementById('sliderCounter');

const gridInit = (initGrid) => {
  const divWidthHeight = 600 / initGrid;
  sliderCounter.textContent = `Grid size: ${initGrid} X ${initGrid}`;
  for (let i = 0; i < initGrid * initGrid; i++) {
    let div = document.createElement('div');
    div.className = 'divs';
    // div.addEventListener('mouseover', colorDiv);
    div.style.width = `${divWidthHeight}px`;
    div.style.height = `${divWidthHeight}px`;
    // div.style.border = '1px solid rgba(0,0,0,0.1';
    container.appendChild(div);
  }
}

gridInit(16);

blackBtn.addEventListener('click', () => {
  Array.from(divs).forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('divsBlack');
    });
  });
});

rgbBtn.addEventListener('click', () => {
  Array.from(divs).forEach(element => {
    const randomRgb1 = Math.floor(Math.random() * 256);
    const randomRgb2 = Math.floor(Math.random() * 256);
    const randomRgb3 = Math.floor(Math.random() * 256);
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = `rgba(${randomRgb1}, ${randomRgb2}, ${randomRgb3})`;
    });
  });
});

eraseAllBtn.addEventListener('click', () => {
  Array.from(divs).forEach(element => {
    element.style.backgroundColor = 'white';
  });
});

eraseOneByOneBtn.addEventListener('click', () => {
  Array.from(divs).forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = 'white';
    });
  });
});

colorPicker.addEventListener('change', (e) => {
  const color = e.target.value;
  Array.from(divs).forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = color;
    });
  });
});

slider.addEventListener('input', (e) => {
  container.replaceChildren();
  gridInit(e.target.value);
}); 