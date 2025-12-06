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
        if (navbar && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            if (menuIcon) {
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
            }
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

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
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

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.getAttribute('data-value');
            setProgress(entry.target, value);
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

progressCircles.forEach(circle => {
    progressObserver.observe(circle);
});

function showNotification(message, type = 'success') {
    const existing = document.querySelector('.contact-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `contact-notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 2rem 3rem;
        background: ${type === 'success' ? 'rgba(0, 171, 240, 0.95)' : 'rgba(255, 68, 68, 0.95)'};
        color: white;
        border-radius: 1rem;
        font-size: 1.6rem;
        font-weight: 500;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.4s ease;
        max-width: 400px;
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    const icon = type === 'success' ? 'bx-check-circle' : 'bx-error-circle';
    notification.innerHTML = `<i class='bx ${icon}' style="font-size: 2.4rem;"></i><span>${message}</span>`;
    document.body.appendChild(notification);


    if (!document.querySelector('#notification-animation')) {
        const style = document.createElement('style');
        style.id = 'notification-animation';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.4s ease reverse';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}

function validateInput(input, regex, errorMsg) {
    const value = input.value.trim();
    
    if (!value) {
        input.style.borderColor = '#ff4444';
        return { valid: false, message: 'Please fill in all fields' };
    }
    
    if (regex && !regex.test(value)) {
        input.style.borderColor = '#ff4444';
        return { valid: false, message: errorMsg };
    }
    
    input.style.borderColor = 'var(--accent-color)';
    return { valid: true };
}

function clearForm() {
    const inputs = [
        document.getElementById('fullName'),
        document.getElementById('emailAddress'),
        document.getElementById('mobileNumber'),
        document.getElementById('emailSubject'),
        document.getElementById('message')
    ];
    
    inputs.forEach(input => {
        if (input) {
            input.value = '';
            input.style.borderColor = 'var(--accent-color)';
        }
    });
}

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('emailAddress');
        const mobileInput = document.getElementById('mobileNumber');
        const subjectInput = document.getElementById('emailSubject');
        const messageInput = document.getElementById('message');

        const nameValidation = validateInput(fullNameInput, /^[a-zA-Z\s]{2,}$/, 'Please enter a valid name (at least 2 characters)');
        const emailValidation = validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address');
        const mobileValidation = validateInput(mobileInput, /^[\d\s\-\+\(\)]{10,}$/, 'Please enter a valid mobile number');
        const subjectValidation = validateInput(subjectInput, /.{3,}/, 'Subject must be at least 3 characters');
        const messageValidation = validateInput(messageInput, /.{10,}/, 'Message must be at least 10 characters');

        if (!nameValidation.valid || !emailValidation.valid || !mobileValidation.valid || 
            !subjectValidation.valid || !messageValidation.valid) {
            const errorMessage = !nameValidation.valid ? nameValidation.message :
                                 !emailValidation.valid ? emailValidation.message :
                                 !mobileValidation.valid ? mobileValidation.message :
                                 !subjectValidation.valid ? subjectValidation.message :
                                 messageValidation.message;
            showNotification(errorMessage, 'error');
            return;
        }

        const formData = {
            name: fullNameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: mobileInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim(),
            _subject: `Portfolio Contact: ${subjectInput.value.trim()}`,
            _template: 'table',
            _captcha: 'false'
        };

        submitBtn.disabled = true;
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
        submitBtn.style.opacity = '0.7';

        if (!document.querySelector('#spinner-animation')) {
            const spinnerStyle = document.createElement('style');
            spinnerStyle.id = 'spinner-animation';
            spinnerStyle.textContent = `
                .bx-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(spinnerStyle);
        }

        try {
            const response = await fetch('https://formsubmit.co/ajax/chenuliv@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                showNotification('✨ Thank you! Your message has been sent successfully. I will get back to you soon!', 'success');
                clearForm();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            showNotification('❌ Oops! Something went wrong. Please try again or email me directly at chenuliv@gmail.com', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.opacity = '1';
        }
    });
}

const formInputs = [
    document.getElementById('fullName'),
    document.getElementById('emailAddress'),
    document.getElementById('mobileNumber'),
    document.getElementById('emailSubject'),
    document.getElementById('message')
];

formInputs.forEach(input => {
    if (input) {
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.style.borderColor = 'var(--accent-color)';
            }
        });

        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff4444';
            }
        });
    }
});

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
    
    const firstNavLink = document.querySelector('.navbar a[href="#home"]');
    if (firstNavLink && window.scrollY < 100) {
        firstNavLink.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (navbar && menuIcon) {
        const clickedInsideNavbar = navbar.contains(e.target);
        const clickedMenuIcon = menuIcon.contains(e.target) || e.target === menuIcon;
        
        if (!clickedInsideNavbar && !clickedMenuIcon && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
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

console.log('%c👋 Welcome to my Portfolio!', 'color: #00abf0; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,171,240,0.3);');
console.log('%c💻 Built  by Chenuli Vihansa', 'color: #ededed; font-size: 16px; font-weight: 500;');
console.log('%c🚀 Interested in the code? Check out my GitHub!', 'color: #00abf0; font-size: 14px;');
console.log('%c📧 Contact form ready! Emails will be sent to chenuliv@gmail.com', 'color: #00abf0; font-size: 14px;');