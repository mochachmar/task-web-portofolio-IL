document.getElementById('year').innerHTML = new Date().getFullYear();

const showMenu = (toggleId, navbarId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId);

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('show');
    });
  }
};
showMenu('navbar_toggle', 'navbar_menu');

const navbarLink = document.querySelectorAll('.navbar_link');

function linkAction() {
  const navbarMenu = document.getElementById('navbar_menu');
  navbarMenu.classList.remove('show');
}
navbarLink.forEach((n) => n.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.navbar_menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.navbar_menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});

sr.reveal('.home_data, .about_img, .skill_subtitle, .skill_text', {});
sr.reveal('.home_image, .about_subtitel, .about_text, .skill_img', { delay: 400 });
sr.reveal('.home_medsos_icon', { interval: 200 });
sr.reveal('.skill_data, .work__img, .contact_input', { interval: 200 });
