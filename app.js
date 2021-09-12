const like = document.querySelector('.like');
const heart = document.querySelector('.heart');
const main = document.querySelector('.main')
const popup = document.querySelector('.popup');
const far = document.querySelector('.far');
const sıfırla = document.querySelector('.sıfırla');
const alert = document.querySelector('.alert');
const pic = document.querySelector('.pic')
const svg = document.querySelector('.svg')
const kalp = document.querySelector('.kalp')
let sayma = document.querySelector('.count');

let count = 0;

like.addEventListener('click', liked)

function liked() {
  if (main.classList.contains('liked')) {
    count--;
    sayma.innerHTML = count;
    main.classList.remove('liked');
    localStorage.removeItem('mode');
  } else {
    count++;
    sayma.innerHTML = count;
    main.classList.toggle('liked');
    localStorage.setItem('mode', main.classList);
  }
  like.classList.toggle('scale');
}

pic.addEventListener('dblclick', () => {
  if (main.classList.contains('liked')) {
    count = 1;
    main.classList.add('liked');
    sayma.innerHTML = count;
    begeni()
  } else {
    count++;
    sayma.innerHTML = count;
    main.classList.add('liked');
    localStorage.setItem('mode', main.classList);
    begeni()
  }
})

if (localStorage.mode) {
  main.classList.add('liked')
  count++;
  sayma.innerHTML = count;
}

function begeni() {
  kalp.classList.add('scale')
  kalp.classList.remove('width')
  let x = 0;
  setInterval(() => {
    x++;
    if (x < 2) {
      kalp.classList.remove('scale')
      kalp.classList.add('width')
    }
  }, 1000);

}