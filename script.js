// --------------------------
// Dark Mode Toggle
// --------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// --------------------------
// Counter Feature
// --------------------------
let count = 0;
const counterBtn = document.getElementById('counter-btn');
const counterDisplay = document.getElementById('counter-display');

counterBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// --------------------------
// Collapsible FAQ Section
// --------------------------
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// --------------------------
// Form Validation
// --------------------------
const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission

  // Clear previous messages
  document.getElementById('form-success').textContent = '';
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';

  // Grab inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let valid = true;

  // Name validation
  if (name.length < 2) {
    document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
    valid = false;
  }

  // Email validation with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Password validation (min 6 chars, at least one number)
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById('password-error').textContent =
      'Password must be at least 6 characters and include a number.';
    valid = false;
  }

  // Success message if valid
  if (valid) {
    document.getElementById('form-success').textContent = 'Form submitted successfully 🎉';
    form.reset();
  }
});
