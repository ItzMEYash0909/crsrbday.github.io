// Password for the gift
const PASSWORD = "guess";

// Check if the password is correct and unlock the gift
function checkPassword() {
  const passwordInput = document.getElementById("password-input");
  const messageContainer = document.getElementById("message-container");
  const password = passwordInput.value;

  if (password === PASSWORD) {
    passwordInput.value = "";
    document.body.style.overflow = "auto";
    messageContainer.style.display = "flex";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Create confetti particles
function createConfettiParticle(canvas, particleCount) {
  const ctx = canvas.getContext("2d");
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 5,
      color: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
      velocity: {
        x: (Math.random() - 0.5) * 20,
        y: Math.random() * 20 + 10
      }
    });
  }

  // Draw confetti particles
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;

      if (particle.y > canvas.height) {
        particle.y = 0;
        particle.velocity.y = Math.random() * 20 + 10;
      }
    }

    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}

// Initialize confetti animation
function initConfetti() {
  const canvas = document.getElementById("confetti");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  createConfettiParticle(canvas, 200);
}

// Start confetti animation when the page is loaded
window.onload = function() {
  initConfetti();

  // Hide the confetti container after 5 seconds
  setTimeout(function() {
    const confettiContainer = document.getElementById("confetti-container");
    confettiContainer.style.display = "none";
    document.body.style.overflow = "auto";
  }, 5000);
};
