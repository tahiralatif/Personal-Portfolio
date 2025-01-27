const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
});

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.remove("open")
}

// ////////// Pralax  ////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      } else {
        entry.target.classList.remove("show-items");
      }
    });
  });

  const scrollScale = document.querySelectorAll(".scroll-scale");
  scrollScale.forEach((el) => observe(el));

  const scrollBottom = document.querySelectorAll(".scroll-bottom");
  scrollBottom.forEach((el) => observe(el));

  const scrollTop = document.querySelectorAll(".scroll-top");
  scrollScale.forEach((el) => observe(el));
  