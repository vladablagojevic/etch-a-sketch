const container = document.getElementById('container');
console.log(container.offsetWidth);
const blackBtn = document.getElementById('blackBtn');
const rgbBtn = document.getElementById('rgbBtn');
const eraseAllBtn = document.getElementById('eraseAllBtn');
const newGridBtn =  document.getElementById('newGridBtn');
const eraseOneByOneBtn = document.getElementById('eraseOneByOne');
const colorPicker = document.getElementById('colorPicker');
const slider = document.getElementById('gridRange');
let div = null;

const gridInit = (initGrid) => {
  const divWidthHeight = 600 / initGrid;
  for (let i = 0; i < initGrid * initGrid; i++) {
    div = document.createElement('div');
    div.id = `div${i}`;
    div.className = 'divs';
    div.style.width = `${divWidthHeight}px`;
    div.style.height = `${divWidthHeight}px`;
    div.style.border = '1px solid plum';
    container.appendChild(div);
  }
}

gridInit(16);

let divs = document.getElementsByClassName('divs');

blackBtn.addEventListener('click', () => {
  Array.from(divs).forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = 'rgba(0,0,0,0.85)';
      // element.classList.add('divsBlack');
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

// newGridBtn.addEventListener('click', () => {
//   const gridNr = prompt('Enter number between 1 and 100 for grid cells on each side');
//   container.replaceChildren();
//   if (gridNr > 0 && gridNr < 100) {
//     let widthOfDiv = 600 / gridNr;
//     for (let i = 0; i < gridNr * gridNr; i++) {
//       div = document.createElement('div');
//       div.style.width = `${widthOfDiv}px`;
//       div.style.height = `${widthOfDiv}px`;
//       div.id = `div${i}`;
//       div.className = 'divs';
//       div.style.border = '1px solid plum';
//       container.appendChild(div);
//     } 
//   } else {
//     alert('Please enter number between 1 and 100');
    
//     gridInit(16);
//   }
// });

slider.addEventListener('input', (e) => {
  container.replaceChildren();
  gridInit(e.target.value);
});