// ===== Dark Mode Toggle =====
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {
localStorage.setItem("theme", "dark");
toggle.textContent = "☀️";
} else {
localStorage.setItem("theme", "light");
toggle.textContent = "🌙";
}
});

if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
toggle.textContent = "☀️";
}


// ===== Typing Animation =====
const text = "Hi, I'm Benedict — Computer Science Student";
let index = 0;

function typeEffect() {
if (index < text.length) {
document.getElementById("typing").textContent += text.charAt(index);
index++;
setTimeout(typeEffect, 60);
}
}

window.addEventListener("load", typeEffect);


// ===== Smooth Scroll =====
document.querySelectorAll("nav a").forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});


// ===== Reveal Animation on Scroll =====
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
});

document.querySelectorAll("section, .project-card").forEach(el => {
el.style.opacity = 0;
el.style.transform = "translateY(30px)";
el.style.transition = "0.6s ease";
observer.observe(el);
});


// ===== GitHub Projects Loader =====
const username = "zolatola";

fetch(`https://api.github.com/users/${username}/repos`)
.then(res => res.json())
.then(data => {
const container = document.getElementById("project-list");

data
.filter(repo => !repo.fork)
.slice(0, 6)
.forEach(repo => {
const card = document.createElement("div");
card.className = "project-card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Repo →</a>
`;

container.appendChild(card);
});
});


// ===== CV Download Tracking =====
function trackCV() {
if (typeof gtag === "function") {
gtag("event", "cv_download", {
event_category: "engagement",
event_label: "Resume Download"
});
}
}