
let currentColor = 'black';

document.querySelectorAll('.colorBox .color').forEach( item =>{
  item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e){
  let color = e.target.getAttribute('data-color');
  console.log('cor clicada', color);
}