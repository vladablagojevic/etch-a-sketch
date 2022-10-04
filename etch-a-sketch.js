let container = document.getElementById('container');
const blackBtn = document.getElementById('blackBtn');
const newGridBtn =  document.getElementById('newGridBtn');
let div = null;

for (let i = 1; i < 17; i++) {
  div = document.createElement('div');
  div.id = `div${i}`;
  div.className = 'divs';
  div.style.width = '25%';
  div.style.height = '25%';
  div.style.border = '1px solid rgba(0,0,0,0.25)';
  container.appendChild(div);
}

let divs = document.getElementsByClassName('divs');

blackBtn.addEventListener('click', () => {
  Array.from(divs).forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = 'rgba(0,0,0,0.25)';
    });
  });
});