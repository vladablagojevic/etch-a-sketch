let container = document.getElementById('container');
const blackBtn = document.getElementById('blackBtn');
const rgbBtn = document.getElementById('rgbBtn');
const eraseAllBtn = document.getElementById('eraseAllBtn');
const newGridBtn =  document.getElementById('newGridBtn');
const eraseOneByOneBtn = document.getElementById('eraseOneByOne');
let div = null;

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.maxWidth = '600px';
container.style.maxHeight = '600px';
container.style.width = '100%';
container.style.height = '100%';
container.style.boxShadow = '10px 10px 10px 10px';

const gridInit = () => {
  for (let i = 1; i < 17; i++) {
    div = document.createElement('div');
    div.id = `div${i}`;
    div.className = 'divs';
    div.style.width = '25%';
    div.style.height = '25%';
    div.style.border = '1px solid rgba(0,0,0,0.25)';
    container.appendChild(div);
  }
}

gridInit();

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

newGridBtn.addEventListener('click', () => {
  const gridNr = prompt('Enter number between 1 and 100 for grid cells on each side');
  container.replaceChildren();
  if (gridNr > 0 && gridNr < 100) {
    let widthOfDiv = 600 / gridNr;
    for (let i = 0; i < gridNr * gridNr; i++) {
      div = document.createElement('div');
      div.style.width = `${widthOfDiv}px`;
      div.style.height = `${widthOfDiv}px`;
      div.id = `div${i}`;
      div.className = 'divs';
      div.style.border = '1px solid rgba(0,0,0,0.25)';
      container.appendChild(div);
    } 
  } else {
    alert('Please enter number between 1 and 100');
    
    gridInit();
  }
});