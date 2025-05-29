let mi = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
    }
  });
};

mi.onclick = () => {
  mi.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

var c = document.querySelector('.cursor')

document.addEventListener('mousemove',function(dets){
   c.style.left = dets.x + "px"
   c.style.top = dets.y + "px"
})

document.addEventListener('mouseleave', function() {
   cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', function() {
   cursor.style.opacity = '1';
});

// Interactive background that follows mouse
document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX / window.innerWidth) * 100;
  const mouseY = (e.clientY / window.innerHeight) * 100;
  
  document.documentElement.style.setProperty('--mouse-x', mouseX + '%');
  document.documentElement.style.setProperty('--mouse-y', mouseY + '%');
});

// Add parallax effect to background elements
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  
  document.querySelector('.bg-particles').style.transform = `translateY(${rate}px)`;
});

// Optional: Add more dynamic particles
function createDynamicParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  
  document.querySelector('.bg-particles').appendChild(particle);
  
  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 22000);
}

// Create new particles periodically
setInterval(createDynamicParticle, 3000);