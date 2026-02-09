// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Mobile menu toggle
let menuOpen = false;
function toggleMenu() {
    menuOpen = !menuOpen;
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    if (menuOpen) {
        navMenu.classList.add('active');
        menuIcon.className = 'pi pi-times';
    } else {
        navMenu.classList.remove('active');
        menuIcon.className = 'pi pi-bars';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (menuOpen) {
            toggleMenu();
        }
    }
}

// Testimonials functionality
let currentTestimonial = 0;
const totalTestimonials = 6;

function updateTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === currentTestimonial ? ' active' : '');
        dot.onclick = () => goToTestimonial(i);
        dotsContainer.appendChild(dot);
    }
    
    document.getElementById('prevBtn').disabled = currentTestimonial === 0;
    document.getElementById('nextBtn').disabled = currentTestimonial === totalTestimonials - 1;
}

function nextTestimonial() {
    if (currentTestimonial < totalTestimonials - 1) {
        currentTestimonial++;
        updateTestimonials();
    }
}

function prevTestimonial() {
    if (currentTestimonial > 0) {
        currentTestimonial--;
        updateTestimonials();
    }
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonials();
}

// Auto-advance testimonials
setInterval(() => {
    if (currentTestimonial === totalTestimonials - 1) {
        currentTestimonial = 0;
    } else {
        currentTestimonial++;
    }
    updateTestimonials();
}, 5000);

// Initialize testimonials
updateTestimonials();

// Contact form WhatsApp integration
function sendToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Hello PrimeVue Glass! I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message || 'N/A'}`;
    
    const whatsappUrl = `https://wa.me/919512112123?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    event.target.reset();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
});
