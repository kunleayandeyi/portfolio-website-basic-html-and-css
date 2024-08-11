const scrollToTopBtn = document.getElementById('scroll-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.bar div');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos) {
        skillBars.forEach(bar => bar.style.width = bar.parentElement.dataset.percent);
    }
});
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = '<span class="close">&times;</span><img class="modal-content">';
document.body.appendChild(modal);

const img = document.querySelector('.image-column img');
const modalImg = document.querySelector('.modal-content');
const close = document.querySelector('.modal .close');

img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
}

close.onclick = function() {
    modal.style.display = 'none';
}
