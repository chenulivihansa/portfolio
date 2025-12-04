const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const readMoreBtn = document.getElementById('read-more-button');
const additionalContent = document.getElementById('additional-content');

readMoreBtn.addEventListener('click', () => {
    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
        additionalContent.style.display = 'block';
        readMoreBtn.textContent = 'Show Less';
    } else {
        additionalContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});

const progressCircles = document.querySelectorAll('.progress-circle');

const setProgress = (element, value) => {
    element.style.setProperty('--value', value);
};

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.getAttribute('data-value');
            setProgress(entry.target, value);
        }
    });
}, observerOptions);

progressCircles.forEach(circle => {
    observer.observe(circle);
});

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('emailAddress').value;
    const mobile = document.getElementById('mobileNumber').value;
    const subject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;
    
    if (!fullName || !email || !mobile || !subject || !message) {
        alert('Please fill in all fields!');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        
        document.getElementById('fullName').value = '';
        document.getElementById('emailAddress').value = '';
        document.getElementById('mobileNumber').value = '';
        document.getElementById('emailSubject').value = '';
        document.getElementById('message').value = '';
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }, 1000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const revealElements = document.querySelectorAll('.project-item, .experience-content, .soft-skill');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
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