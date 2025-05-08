// Portfolio Data
const portfolioData = {
  name: "Test Name",
  title: "Software Engineer",
  about: "I’m a passionate software engineer with 5+ years of experience in full stack development, building scalable web applications.",
  skills: ["JavaScript", "React", "Node.js", "Python", "MongoDB", "Docker"],
  experience: [
    {
      company: "XYZ Corp",
      position: "Senior Software Engineer",
      duration: "2022–Present",
      responsibilities: [
        "Led a team of 4 developers to build a SaaS platform using React and Node.",
        "Improved app performance by 30% through code optimization."
      ]
    },
    {
      company: "ABC Ltd.",
      position: "Software Engineer",
      duration: "2020–2022",
      responsibilities: [
        "Developed RESTful APIs in Node.js.",
        "Implemented authentication with JWT and OAuth."
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "An e-commerce platform using React and Node.js.",
      images: ["images/project1_image1.jpg", "images/project1_image2.jpg"],
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Blogging Platform",
      description: "A blogging platform built with Django.",
      images: ["images/project2_image1.jpg"],
      githubLink: "https://github.com/yourusername/project2"
    }
  ],
  contact: {
    email: "you@example.com",
    linkedIn: "https://linkedin.com/in/yourprofile"
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

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-gallery">${gallery}</div>
      <a href="${project.githubLink}" target="_blank">View on GitHub</a>
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
