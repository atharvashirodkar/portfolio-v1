fetch("https://api.github.com/users/atharvashirodkar/repos?sort=updated")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("repos");
        const topRepos = data.slice(0, 5);
        topRepos.forEach(repo => {
            const div = document.createElement("div");
            div.className = "repo";
            div.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "No description provided."}</p>
            <a href="${repo.html_url}" target="_blank" class="github-btn">
              <i class="fa-brands fa-github"></i> View on GitHub
            </a>
          `;
            container.appendChild(div);
        });
        const showMore = document.createElement("div");
        showMore.className = "show-more";
        showMore.textContent = "Show More →";
        showMore.onclick = () => window.open("https://github.com/atharvashirodkar?tab=repositories", "_blank");
        container.appendChild(showMore);
    })
    .catch(err => console.error("Error loading repos:", err));