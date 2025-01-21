// Smooth Scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // منع السلوك الافتراضي
        const targetId = link.getAttribute('href'); // الحصول على الهدف
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // انتقال سلس
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation when scrolling
const elements = document.querySelectorAll('.card, .intro, header, footer');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

elements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(element);
});

// Add active class to current navigation link
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 100;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});