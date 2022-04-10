let navbar = document.querySelector('.navbar');
window.onscroll = () => { 
  if(window.scrollY >= 30) {
    navbar.classList.add('dark');
  } else {
    navbar.classList.remove('dark');
  }
}




let test1 = document.querySelector('.test-1');
let opinion1 = document.querySelector('.opinion-1');

test1.onclick = function() {
  opinion1.classList.toggle('block');
}

let test2 = document.querySelector('.test-2');
let opinion2 = document.querySelector('.opinion-2');

test2.onclick = function() {
  opinion2.classList.toggle('block');
}

let test3 = document.querySelector('.test-3');
let opinion3 = document.querySelector('.opinion-3');

test3.onclick = function() {
  opinion3.classList.toggle('block');
}

let test4 = document.querySelector('.test-4');
let opinion4 = document.querySelector('.opinion-4');

test4.onclick = function() {
  opinion4.classList.toggle('block');
}

let test5 = document.querySelector('.test-5');
let opinion5 = document.querySelector('.opinion-5');

test5.onclick = function() {
  opinion5.classList.toggle('block');
}


let test6 = document.querySelector('.test-6');
let opinion6 = document.querySelector('.opinion-6');

test6.onclick = function() {
  opinion6.classList.toggle('block');
}



