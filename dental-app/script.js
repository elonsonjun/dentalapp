// Modal logic
function openModal() {
    document.getElementById("appointmentModal").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("appointmentModal").classList.add("hidden");
  }
  
  // Form submission (example feedback)
  document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("appointmentMsg").textContent = "Appointment request submitted!";
    this.reset();
  });
  
  // FAQ toggle logic
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
  
      // Collapse all other answers
      document.querySelectorAll(".faq-answer").forEach(ans => {
        if (ans !== answer) ans.classList.remove("open");
      });
  
      // Toggle current one
      answer.classList.toggle("open");
    });
  });
  
  // Optional: Auto-scroll testimonials
  const testimonialScroll = () => {
    const container = document.querySelector('.testimonials');
    if (!container) return;
  
    let scrollAmount = 0;
    let direction = 1;
  
    setInterval(() => {
      container.scrollLeft += direction * 2;
      scrollAmount += 2;
  
      if (scrollAmount >= 100 || container.scrollLeft === 0 || container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        direction *= -1;
        scrollAmount = 0;
      }
    }, 30); // Speed of scroll
  };
  
  testimonialScroll();
  