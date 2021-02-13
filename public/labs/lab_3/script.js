/* Put your javascript in here */

const pngArray = [];
for (let i = 0; i < carousel.querySelectorAll(".carousel div").length; i++) 
{
  pngArray.push(carousel.querySelectorAll('.carousel div')[i].dataset.background)
};

/* configuration */
let width = 130;
let count = 3;
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
  position += width * count,
  position = Math.min(position, 0),
  list.style.marginLeft = position + 'px'
};

carousel.querySelector('.next').onclick = function() {
  position -= width * count,
  position = Math.max(position, -width * (listElems.length - count)),
  list.style.marginLeft = position + 'px'
};
