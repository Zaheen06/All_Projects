const username = "zaheen06";  // Your GitHub username
const projectContainer = document.getElementById("projects");

async function fetchProjects() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();

    projectContainer.innerHTML = "";
    data.forEach(repo => {
        if (repo.has_pages) {  // Only display projects with GitHub Pages
            const projectDiv = document.createElement("div");
            projectDiv.className = "project";
            projectDiv.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available"}</p>
                <a href="https://${username}.github.io/${repo.name}/" target="_blank">View Project</a>
            `;
            projectContainer.appendChild(projectDiv);
        }
    });
}

fetchProjects();
