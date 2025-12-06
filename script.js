const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        menuIcon.classList.toggle('bx-menu');
    });
}

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar) {
            navbar.classList.remove('active');
        }
        if (menuIcon) {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
});

const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const readMoreBtn = document.getElementById('read-more-button');
const additionalContent = document.getElementById('additional-content');

if (readMoreBtn && additionalContent) {
    readMoreBtn.addEventListener('click', () => {
        if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
            additionalContent.style.display = 'block';
            readMoreBtn.textContent = 'Show Less';
        } else {
            additionalContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
}


const progressCircles = document.querySelectorAll('.progress-circle');

const setProgress = (element, value) => {
    element.style.setProperty('--value', value);
};

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.getAttribute('data-value');
            setProgress(entry.target, value);
        }
    });
}, observerOptions);

progressCircles.forEach(circle => {
    progressObserver.observe(circle);
});


const submitBtn = document.getElementById('submit-btn');

if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('emailAddress');
        const mobile = document.getElementById('mobileNumber');
        const subject = document.getElementById('emailSubject');
        const message = document.getElementById('message');
        
        if (!fullName || !email || !mobile || !subject || !message) {
            alert('Form elements not found!');
            return;
        }
        
        if (!fullName.value || !email.value || !mobile.value || !subject.value || !message.value) {
            alert('Please fill in all fields!');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(mobile.value)) {
            alert('Please enter a valid phone number (at least 10 digits)!');
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            
            fullName.value = '';
            email.value = '';
            mobile.value = '';
            subject.value = '';
            message.value = '';
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
        }, 1000);
    });
}

const revealElements = document.querySelectorAll('.project-item, .experience-content, .soft-skill, .skill-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

document.addEventListener('click', (e) => {
    if (navbar && menuIcon) {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    }
});

window.addEventListener('load', () => {
    const firstNavLink = document.querySelector('.navbar a[href="#home"]');
    if (firstNavLink && window.scrollY < 100) {
        firstNavLink.classList.add('active');
    }
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const optimizedScroll = debounce(() => {
}, 10);

window.addEventListener('scroll', optimizedScroll);

console.log('%c👋 Welcome to my Portfolio!', 'color: #00abf0; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,171,240,0.3);');
console.log('%c💻 Built  by Chenuli Vihansa', 'color: #ededed; font-size: 16px; font-weight: 500;');
console.log('%c🚀 Interested in the code? Check out my GitHub!', 'color: #00abf0; font-size: 14px;');