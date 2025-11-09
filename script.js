// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// GitHub repos
fetch("https://api.github.com/users/atharvashirodkar/repos?sort=updated&per_page=5")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("repos");
    container.innerHTML = '';

    data.forEach(repo => {
      container.innerHTML += `
                <div class="repo">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" target="_blank" class="github-btn">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            `;
    });

    container.innerHTML += `
            <div class="show-more-card" onclick="window.open('https://github.com/atharvashirodkar?tab=repositories', '_blank')">
                <i class="fas fa-arrow-down"></i>
                <span>Show More Projects</span>
            </div>
        `;
  })
  .catch(err => {
    document.getElementById("repos").innerHTML = `
            <div class="repo" style="text-align:center;grid-column:1/-1">
                <h3>Unable to Load Repositories</h3>
                <p>Please visit my GitHub profile directly.</p>
            </div>
        `;
  });