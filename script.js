const navLinks = document.querySelectorAll(".sidebar_menu nav a");
const tracks = document.querySelectorAll(".scroll-track");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });
});

tracks.forEach((track) => {
  const items = [...track.children];
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
});

const text = "Capturing Moments, Crafting Stories";
  const speed = 80; // typing speed in ms
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      document.querySelector(".typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  window.addEventListener("load", typeEffect);


  const scrollBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

