// Function to open the modal
function openModal(src, alt) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  captionText.innerHTML = alt;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Wait for the DOM to fully load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  // Add click event to each image in the gallery
  document.querySelectorAll('.project-gallery img').forEach(img => {
    img.onclick = function() {
      openModal(this.src, this.alt);
    };
  });

  // Scroll Animation for Sections
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
