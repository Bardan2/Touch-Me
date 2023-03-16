const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['#ff0000', '#ffa500', '#00ff00', '#0000ff', '#080808'];


body.style.backgroundColor = 'violet';

button.addEventListener('click', changeA)
 

function changeA() {
  const colorIndex = parseInt(Math.random()*color.length)
  body.style.backgroundColor = color[colorIndex]

}