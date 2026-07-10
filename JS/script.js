
/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ==========================
   SMOOTH SCROLL (NAV LINKS)
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.innerText.replace(/[^0-9]/g, "");
    let count = 0;

    const increment = target / speed;

    const update = () => {
        count += increment;

        if (count < target) {
            counter.innerText = Math.ceil(count) + "+";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
};


/* ==========================
   SCROLL TRIGGER FOR COUNTERS
========================== */

let counterStarted = false;

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".statistics");

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop;

    if (!counterStarted && window.scrollY > sectionTop - 400) {
        counters.forEach(counter => animateCounter(counter));
        counterStarted = true;
    }
});


/* ==========================
   SCROLL REVEAL EFFECT
========================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .step, .doctor-card, .testimonial-card, .resource-card, .stat-box"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);


/* ==========================
   INITIAL STATE FOR ANIMATION
========================== */

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
});


/* ==========================
   BUTTON MICRO INTERACTIONS
========================== */

document.querySelectorAll("button, .primary-btn, .secondary-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.2s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});

/* ==========================
   MOBILE MENU (HAMBURGER)
========================== */

const navbar = document.querySelector(".navbar");

const createMobileMenu = () => {
    const nav = document.querySelector(".nav-links");

    if (!document.querySelector(".hamburger")) {
        const hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        hamburger.innerHTML = "☰";

        navbar.appendChild(hamburger);

        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
};

createMobileMenu();


/* ==========================
   DARK MODE TOGGLE
========================== */

const darkToggle = document.createElement("button");
darkToggle.classList.add("dark-toggle");
darkToggle.innerHTML = "🌙";

navbar.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


/* ==========================
   SIMPLE THERAPIST FILTER (UI DEMO)
========================== */

const searchBox = document.createElement("div");
searchBox.classList.add("search-box");

searchBox.innerHTML = `
    <input type="text" placeholder="Search psychologist (e.g. anxiety, CBT)" />
`;

document.querySelector(".hero").appendChild(searchBox);

const input = searchBox.querySelector("input");

input.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    document.querySelectorAll(".doctor-card").forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


/* ==========================
   PAGE LOADER ANIMATION
========================== */

const loader = document.createElement("div");
loader.classList.add("loader");

loader.innerHTML = `
    <div class="spinner"></div>
`;

document.body.appendChild(loader);

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 800);
});


/* ==========================
   STICKY CTA BUTTON
========================== */

const ctaBtn = document.createElement("a");
ctaBtn.classList.add("sticky-cta");
ctaBtn.innerText = "Book a Session";
ctaBtn.href = "#";

document.body.appendChild(ctaBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        ctaBtn.classList.add("show");
    } else {
        ctaBtn.classList.remove("show");
    }
});