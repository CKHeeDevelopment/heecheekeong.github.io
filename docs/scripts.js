// Portfolio Data
const portfolioData = {
  name: "HEE CHEE KEONG",
  title: "iOS Developer | Software Engineer",
  about: "I’m a Software Engineer with over 8 years of experience in mobile app development for iOS, Android, and backend systems. I specialize in building user-friendly solutions with expertise in audio technologies, BLE, NFC, IoT, and cloud integrations. Passionate about creating high-performance software, I excel in collaborating with teams to deliver innovative and reliable solutions.",
  skills: ["iOS Development", "Java", "Python", "Android Development", "ASP.Net", "Ionic", "OAuth2.0"],
  experience: [
    {
      company: "Creative Labs Pte. Ltd.",
      position: "Software Engineer",
      duration: "2022–2025",
      responsibilities: [
        "Developed  iOS/macOS libraries  for  audio  devices, improving  performance and integration.",
        "Designed and implemented a secure OAuth 2.0 authorization code flow with PKCE, incorporating secret key exchange and backend token validation to retrieve JWT tokens, ensuring robust authentication integrity and protecting against token interception in compliance with mobile security best practices.",
        "Optimized Authentication Flow by integrating biometric login (Face ID & Fingerprint) and Keychain storage, significantly reducing login times and improving user experience by eliminating the need for manual username and password entry."
      ]
    },
    {
      company: "Team One Technologies Pte. Ltd.",
      position: "Software Engineer",
      duration: "2017–2022",
      responsibilities: [
        "Developed Android applications with BLE and NFC integration to support secure configuration and management of military-grade devices, improving setup efficiency and reducing manual configuration errors by over 40%.",
        "Created a cross-platform smart device management app using Ionic, including push notification support and remote alerts, which improved response time to device events and reduced support load by enabling proactive monitoring.",
        "Engineered a backend data pipeline using Python to process encrypted telemetry from military modules and deliver real-time insights to an AngularJS dashboard. Resolved critical parsing bugs and implemented test coverage for ~96% of known telemetry scenarios, enhancing system reliability and reducing manual interpretation errors for analysts."
      ]
    },
    {
      company: "MTech Holdings Sdn. Bhd",
      position: "Mobile Application Developer ( Android )",
      duration: "2016–2017",
      responsibilities: [
        "Developed and enhanced a survey application, increasing completion rates by 80% through the implementation of a progress bar that visually indicated the remaining survey length, motivating users to complete the survey.",
        "Developed and maintained an app used by over 580,000 followers, with weekly viewership exceeding 3 million across Malaysia.",
        "Integrated Google Analytics to track user interactions with coupons and promotions, providing actionable insights to marketing and content teams for improved ad personalization."
      ]
    }
  ],
  projects: [
    {
      title: "UVLight Control IoT Project",
      description: "A native iOS IoT application to remotely control in-house UV LED sanitizing lights via Bluetooth, enabling instant on/off functionality and scheduled sanitization cycles.",
      images: ["images/zgo1.jpg", "images/zgo2.jpg", "images/zgo3.jpg"],
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Smart Magazine ( Android)",
      description: "Smart Magazine is an Android project designed to control, diagnose the status, and modify device values through a BLE connection. Additionally, users can change values using an NFC connection.",
      images: ["images/military1.png", "images/military2.png", "images/military3.png"],
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Herbalife E-Ticket System (iOS)",
      description: "The application is a membership-based e-ticketing system that enables users to browse and purchase event tickets online. Each e-ticket is issued with a unique QR code, which serves as a digital pass for event entry. Users can securely complete transactions via credit card, with all payments processed through a secure backend system.",
      images: ["images/herbal1.png", "images/herbal2.png", "images/herbal3.png"],
      githubLink: "https://github.com/yourusername/project2"
    }
  ],
  contact: {
    email: "cksys.development@gmail.com",
    linkedIn: "https://sg.linkedin.com/in/hee-chee-keong-987209144"
  }
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("headerName").textContent = portfolioData.name;
  document.getElementById("headerTitle").textContent = portfolioData.title;
  document.getElementById("aboutText").textContent = portfolioData.about;
  document.getElementById("contactEmail").textContent = `Email: ${portfolioData.contact.email}`;
  document.getElementById("contactLinkedIn").innerHTML = `LinkedIn: <a href="${portfolioData.contact.linkedIn}" target="_blank">${portfolioData.contact.linkedIn}</a>`;

  // Skills
  const skillsList = document.getElementById("skillsList");
  portfolioData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Experience
  const experienceSection = document.getElementById("experienceSection");
  portfolioData.experience.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job");
    div.innerHTML = `
      <h3>${job.position} @ ${job.company}</h3>
      <p><strong>Duration:</strong> ${job.duration}</p>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
    `;
    experienceSection.appendChild(div);
  });

  // Projects
  const projectsSection = document.getElementById("projectsSection");
  portfolioData.projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-card");

    const gallery = project.images.map(img =>
      `<div class="gallery-item"><img src="${img}" alt="${project.title}" onclick="openModal('${img}', '${project.title}')"></div>`
    ).join('');

    // div.innerHTML = `
    //   <h3>${project.title}</h3>
    //   <p>${project.description}</p>
    //   <div class="project-gallery">${gallery}</div>
    //   <a href="${project.githubLink}" target="_blank">View on GitHub</a>
    // `;

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-gallery">${gallery}</div>
    `;
    projectsSection.appendChild(div);
  });

  // Scroll animation
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
});

// Modal
function openModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = src;
  caption.textContent = alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
