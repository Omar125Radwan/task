let navbar = document.querySelector('.navbar');
window.onscroll = () => { 
  if(window.scrollY >= 30) {
    navbar.classList.add('dark');
  } else {
    navbar.classList.remove('dark');
  }
}

const bengoBtns = document.querySelectorAll('.test');
const opinions = document.querySelectorAll('.opinion');

bengoBtns.forEach((btn) => {
  btn.addEventListener('click', function() {
    const idBtn = this.dataset.id;
    const open = document.querySelectorAll('#con_'+ idBtn);
    open.forEach((o) => {
      o.classList.toggle('block');
    })
  });
});