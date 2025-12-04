
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>My Portfolio</title>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        
    </head>

    <body>
        <header class="header">
            <a href="#" class="logo">Chenuli.<span class="animate" style="--i:1;"></span></a>
            <div id="menu-icon-container">
                <div id="menu-icon" class='bx bx-menu'><span class="animate" style="--i:2;"></span></div>
            </div>
            
            <nav class="navbar">
                <a href="#home" class="active">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>

                <span class="active-nav"></span>
               
            </nav>
        </header>

        
        <section class="home show-animate" id="home">
            <div class="home-content">
                <div class="home-text">
                    <h1>Hello, I'm <span>Chenuli Vihansa</span></h1>
                    <h3>Computer Science Undergraduate | Aspiring Software Engineer</h3>
                    <p>Passionate about creating clean and effective Web & Mobile applications.</p>

                    <div class="btn-box">
                        <a href="#projects" class="btn">View Projects</a>
                        <a href="#contact" class="btn">Hire Me</a>
                       <a href="cv.pdf" class="btn" download><i class='bx bx-download'></i> My CV</a>

                    </div>                
                </div>

            </div>

            <div class="home-img">
                <div class="img-container">
                    <img src="image1.jpg" alt="Profile Picture">
                    <span class="circle-spin"></span>
                </div>
            </div>

            <div class="home-sci">
                <a href="https://github.com/chenuli-v"><i class='bx bxl-github' ></i></box-icon></a>
                <a href="https://www.instagram.com/chenuliv?igsh=MXZtejEwMGZvdGw3MQ=="><i class='bx bxl-instagram' ></i></box-icon></a>
                <a href="https://www.linkedin.com/in/chenuli-vihansa-2a7967340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class='bx bxl-linkedin' ></i></box-icon></a>
            </div>
            <span class="home-imgHover"></span>
        </section>

        
        <section class="about" id="about">
            <h2 class="heading">About <span>Me</span></h2>
            <div class="about-img">
                <img src="image2.jpg" alt="" >
                <span class="circle-spin"></span>
            </div>
            <div class="about-content">
                
                <p>I’m Chenuli Vihansa, a Computer Science Undergraduate with a strong interest in Web 
                    development, Mobile application development, UI/UX design, and emerging technologies.
                    I enjoy transforming ideas into clean, functional, and user-friendly digital experiences.
 
                   I’m a dedicated learner with strengths in problem-solving, teamwork, creativity, and quick learning. 
                    I love exploring new tools, frameworks, and technologies that help me improve as a developer.
                    My goal is to become a skilled software developer who can build modern, efficient, and impactful applications 
                   that deliver real value and help solve real-world problems.
                </p>
                <div class="btn-box">
                    <button class="btn" id="read-more-button">Read More</button>
                </div>
                <div id="additional-content" style="display: none">
                       <h3>My Goals</h3>
                    <p> I aim to continuously expand my technical expertise while contributing to meaningful projects that make a positive impact. I'm particularly interested in full-stack development and creating seamless user experiences across web and mobile platforms.
                    </p>
                </div>
            </div>
        </section>

        <section class="skills" id="skills">
        <div class="heading">
            <h2>My Technical <span>Skill Palette</span></h2>
        </div>

        <div class="skills-box">
            <div class="skill-item one">
                <i class='bx bxl-python'></i>
                <p>Python</p>
            </div>
            <div class="skill-item six">
                <i class='bx bxl-java'></i>
                <p>Java</p>
            </div>
            <div class="skill-item two">
                <i class='bx bxl-html5'></i>
                <p>HTML5</p>
            </div>
            <div class="skill-item three">
                <i class='bx bxl-css3'></i>
                <p>CSS3</p>
            </div>
            <div class="skill-item four">
                <i class='bx bxl-javascript'></i>
                <p>JavaScript</p>
            </div>
            <div class="skill-item four">
                <i class='bx bxl-php'></i>
                <p>PHP</p>
            </div>
            <div class="skill-item five">
                <i class='bx bxl-react'></i>
                <p>React</p>
            </div>
            <div class="skill-item five">
                <i class='bx bxl-flutter'></i>
                <p>Flutter</p>
            </div>
            <div class="skill-item five">
                <i class='bx bxl-typescript'></i>
                <p>TypeScript</p>
            </div>
            <div class="skill-item seven">
                <i class='bx bxl-git'></i>
                <p>Git</p>
            </div>
            <div class="skill-item seven">
                <i class='bx bxl-figma'></i>
                <p>Figma</p>
            </div>
        </div>
    </section>

    
    <section class="soft-skills-section">
        <h2>Skills That <span>Shine</span></h2>
        <div class="soft-skills-container">
            <div class="soft-skill">
                <i class='bx bx-chat'></i>
                <h3>Communication</h3>
                <div class="progress-circle" data-value="80">
                    <span class="progress-value">80%</span>
                </div>
            </div>
            <div class="soft-skill">
                <i class='bx bx-brain'></i>
                <h3>Critical Thinking</h3>
                <div class="progress-circle" data-value="85">
                    <span class="progress-value">85%</span>
                </div>
            </div>
            <div class="soft-skill">
                <i class='bx bx-target-lock'></i>
                <h3>Leadership</h3>
                <div class="progress-circle" data-value="80">
                    <span class="progress-value">80%</span>
                </div>
            </div>
            <div class="soft-skill">
                <i class='bx bx-group'></i>
                <h3>Teamwork</h3>
                <div class="progress-circle" data-value="95">
                    <span class="progress-value">95%</span>
                </div>
            </div>
            <div class="soft-skill">
                <i class='bx bx-refresh'></i>
                <h3>Adaptability</h3>
                <div class="progress-circle" data-value="90">
                    <span class="progress-value">90%</span>
                </div>
            </div>
        </div>
    </section>
      
        <section class="projects" id="projects">
            <h2 class="heading">My <span>Projects</span></h2>

        <div class="projects-list">

        <div class="project-item">
            <h3>Smart Whiteboard Cleaning Robot (Hardware Project)</h3>
            <p>
                A robot that detects written areas on a whiteboard and cleans only those areas.
                Includes a custom smart lock system with fingerprint sensor and LEDs.
            </p>
        </div>

        <div class="project-item">
            <h3>Tour Booking & Transportation Management System (Under Development)</h3>
            <p>
                A mobile-based system designed for vehicle booking, scheduling, and
                managing tourist rides for local businesses.
            </p>
        </div>

        <div class="project-item">
            <h3>Portfolio Website</h3>
            <p>
                Fully responsive personal portfolio showcasing skills, projects, and experience.
            </p>
        </div>

        </div>
        </section>

        <section class="experience" id="experience">
            <h2 class="heading">My <span>experience</span></h2>
        <div class="experience-row">
        <div class="experience-column">
            <div class="title">Experience</div>
            <div class="experience-box">
                <div class="experience-content">
                    <div class="content">
                        <div class="day"><i class='bx bxs-briefcase'></i> 2024 - Present</div>
                        <h3>Computer Science Undergraduate</h3>
                        <p>Learning programming, OOP, databases, and web development through coursework and practical assignments.</p>
                    </div>
                    <div class="content">
                        <div class="day"><i class='bx bxs-briefcase'></i> 2024</div>
                        <h3>Team Projects & University Work</h3>
                        <p>Worked on software analysis, modeling, documentation, teamwork, and collaborative projects.</p>
                    </div>
                    <div class="content">
                        <div class="day"><i class='bx bxs-briefcase'></i> 2024 - Present</div>
                        <h3>Hardware Project Developer</h3>
                        <p>Building a smart whiteboard cleaning robot and smart lock system integrating sensors and embedded logic.</p>
                    </div>
                    <div class="content">
                        <div class="day"><i class='bx bxs-briefcase'></i> Upcoming</div>
                        <h3>Software Project (Next Year)</h3>
                        <p>Will develop a full software project using SDLC (Waterfall or V-Model) with proper documentation.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>

        <section class="contact" id="contact">
          <h2 class="heading">Contact<span> Me!</span></h2>  
          <form >
            <div class="input-box">
                <div class="input-field">
                    <input type="text" name="fullName" placeholder="Full Name" required>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="email" name="emailAddress" placeholder="Email Address" required>
                    <span class="focus"></span>
                </div>
            </div>
            <div class="input-box">
                <div class="input-field">
                    <input type="number" name="mobileNumber" placeholder="Moble Number" required>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="text" name="emailSubject" placeholder="Email " required>
                    <span class="focus"></span>
                </div>
            </div>
            <div class="textarea-field">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <span class="focus"></span>
            </div>
            <div class="btn-box">              
                <button type="submit" class="btn"> Submit </button>
            </div>
          </form>
        </section>

        
        <footer class="footer">
            <div class="footer-text">
                <p>Copyright &copy; 2025 by Chenuli Vihansa | All Rights Reserved.</p>
            </div>
            <div class="footer-icontop">
                <a href="#"><i class='bx bx-up-arrow-alt' ></i></a>
            </div>
        </footer>


        <script src="js/script.js"></script>
    </body>
</html>