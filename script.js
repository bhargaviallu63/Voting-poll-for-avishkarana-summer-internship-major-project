// Smart Online Voting System
// script.js

// Welcome Message
window.onload = function () {
    console.log("Welcome to Smart Online Voting System");

    setTimeout(() => {
        alert("Welcome to Smart Online Voting System 🗳️");
    }, 500);
};

// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hero Button Animation
const voteBtn = document.querySelector(".btn");

if (voteBtn) {

    voteBtn.addEventListener("mouseover", () => {

        voteBtn.style.transform = "scale(1.08)";
    });

    voteBtn.addEventListener("mouseout", () => {

        voteBtn.style.transform = "scale(1)";
    });

}

// Feature Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

// Dark Mode Toggle
const toggle = document.createElement("button");

toggle.innerHTML = "🌙";

toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "12px";
toggle.style.border = "none";
toggle.style.borderRadius = "50%";
toggle.style.cursor = "pointer";
toggle.style.fontSize = "20px";
toggle.style.background = "#FFD700";

document.body.appendChild(toggle);

let dark = true;

toggle.onclick = () => {

    if (dark) {

        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#222";

        document.querySelectorAll(".card").forEach(card => {
            card.style.color = "#222";
        });

        toggle.innerHTML = "☀️";

        dark = false;

    } else {

        document.body.style.background =
        "linear-gradient(135deg,#0f172a,#2563eb)";

        document.body.style.color = "white";

        document.querySelectorAll(".card").forEach(card => {
            card.style.color = "white";
        });

        toggle.innerHTML = "🌙";

        dark = true;

    }

};

// Live Date & Time
setInterval(() => {

    document.title =
    "Smart Voting System | " +
    new Date().toLocaleTimeString();

}, 1000);
