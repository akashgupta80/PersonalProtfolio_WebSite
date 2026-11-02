
(() => {
"use strict";
 
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
 
/* =========================================================
   EDIT YOUR CONTENT HERE
========================================================= */
 
const SKILLS = [
  { icon: "fa-solid fa-code", group: "Programming",
    desc: "Strong foundation in core programming and object-oriented design.",
    items: [["Java", "fa-brands fa-java"], ["Python", "fa-brands fa-python"], ["OOP", "fa-solid fa-cubes"], ["Collections", "fa-solid fa-layer-group"], ["SQL", "fa-solid fa-database"]] },
  { icon: "fa-solid fa-puzzle-piece", group: "DSA & Problem Solving",
    desc: "Practising data structures and algorithms regularly on LeetCode.",
    items: [["Arrays & Strings", "fa-solid fa-list"], ["Searching & Sorting", "fa-solid fa-arrow-down-1-9"], ["Recursion", "fa-solid fa-rotate"]] },
  { icon: "fa-solid fa-server", group: "Backend",
    desc: "Building application logic, APIs and database connectivity.",
    items: [["Spring Boot", "fa-solid fa-leaf"], ["REST APIs", "fa-solid fa-plug"], ["JDBC", "fa-solid fa-link"]] },
  { icon: "fa-solid fa-database", group: "Database",
    desc: "Designing relational schemas and writing queries.",
    items: [["MySQL", "fa-solid fa-database"], ["Database Design", "fa-solid fa-table-cells"], ["Joins & Queries", "fa-solid fa-diagram-project"]] },
  { icon: "fa-solid fa-globe", group: "Web Development",
    desc: "Responsive, accessible interfaces that talk to REST APIs.",
    items: [["HTML5", "fa-brands fa-html5"], ["CSS3", "fa-brands fa-css3-alt"], ["JavaScript", "fa-brands fa-js"], ["Fetch API", "fa-solid fa-satellite-dish"]] },
  { icon: "fa-solid fa-brain", group: "AI & Tools",
    desc: "Exploring machine learning concepts and everyday dev tools.",
    items: [["Machine Learning", "fa-solid fa-brain"], ["Git & GitHub", "fa-brands fa-git-alt"]] }
];
 
const PROJECTS = [

    { id: "seat", num: "03", icon: "fa-solid fa-chair", type: "WEB APPLICATION", year: "2026",
    title: "Exam Seat Finder",
    intro: "A web portal where students enter an admission number and instantly see their exam room, seat, shift and timing.",
    details: "Students search by admission number to get room, seat, shift and timing, with upcoming and past exams organised separately, a live visitor counter and an in-app feedback form.",
    features: [["fa-solid fa-magnifying-glass", "Instant seat lookup"], ["fa-solid fa-calendar-days", "Upcoming & past exams"], ["fa-solid fa-users", "Live students online"], ["fa-solid fa-comment-dots", "Feedback system"]],
    more: ["Sorts exams by date and shift automatically", "Program badge for regular, back-paper and debarred exams", "Safe DOM rendering, responsive and accessible UI"],
    tech: ["HTML", "CSS", "JavaScript", "Fetch API", "REST API"],
    flow: ["Browser UI", "Fetch API", "REST API /exam-seats", "Database"],
    github: "" },
   { id: "ums", num: "02", icon: "fa-solid fa-building-columns", type: "JAVA APPLICATION", year: "UNIVERSITY PROJECT",
    title: "University Management System",
    intro: "A dashboard-based desktop application that organizes academic and administrative operations in one place.",
    details: "A centralized system to manage students, courses, attendance and reports through a Java Swing interface connected to MySQL via JDBC.",
    features: [["fa-solid fa-user-graduate", "Student management"], ["fa-solid fa-book", "Course management"], ["fa-solid fa-calendar-check", "Attendance"], ["fa-solid fa-chart-column", "Reports"]],
    more: ["Manage student and course records", "Track attendance", "Generate academic reports"],
    tech: ["Java", "Java Swing", "AWT", "JDBC", "MySQL"],
    flow: ["Swing / AWT UI", "Java logic", "JDBC", "MySQL"],
    github: "" },
    { id: "upi", num: "01", icon: "fa-solid fa-shield-halved", type: "BACKEND / FULL-STACK", year: "IN PROGRESS",
    title: "UPI Fraud Detection System",
    intro: "A transaction monitoring application I’m currently building to flag potentially risky UPI transactions and present insights on a dashboard.",
    details: "Currently under development. The goal is to monitor UPI transactions, identify risky patterns and show transaction insights through a dashboard backed by a REST API and MySQL.",
    features: [["fa-solid fa-shield-halved", "Risk detection"], ["fa-solid fa-chart-line", "Analytics dashboard"], ["fa-solid fa-database", "MySQL storage"], ["fa-solid fa-bolt", "REST APIs"]],
    more: ["Status: in development, features are being added", "Aims to flag potentially fraudulent transactions", "Dashboard for safe and risky transaction insights", "REST API layer between interface and database"],
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "HTML", "CSS", "JavaScript"],
    flow: ["Dashboard UI", "REST API (Spring Boot)", "Risk detection logic", "MySQL"],
    github: "" },
  
];
 
const CODING = [
  { logo: "LC", name: "LeetCode", text: "Practising data structures, algorithms and problem solving.", url: "https://leetcode.com/u/AkashGuptaxa/", label: "CODING PLATFORM" },
  { logo: '<i class="fa-brands fa-github"></i>', name: "GitHub", text: "Explore my projects, code and development journey.", url: "https://github.com/akashgupta80", label: "CODE & PROJECTS" }
];
 
/* =========================================================
   RENDER
========================================================= */
 
$("#skillsGrid").innerHTML = SKILLS.map(g => `
  <article class="skill-card reveal">
    <div class="skill-icon"><i class="${g.icon}"></i></div>
    <h3>${g.group}</h3>
    <p>${g.desc}</p>
    <div class="chips">${g.items.map(i => `<span><i class="${i[1]}"></i>${i[0]}</span>`).join("")}</div>
  </article>`).join("");
 
$("#projectsList").innerHTML = PROJECTS.map((p, i) => `
  <article class="project-card reveal${i % 2 ? " reverse" : ""}">
    <div class="project-content">
      <div class="project-meta"><span>${p.type}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <p class="project-intro">${p.intro}</p>
      <div class="project-features">${p.features.map(f => `<div><i class="${f[0]}"></i><span>${f[1]}</span></div>`).join("")}</div>
      <div class="chips">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-actions">
        <button type="button" class="project-btn" data-project="${p.id}">Explore Project <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        ${p.github ? `<a class="project-btn ghost" href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Code</a>` : ""}
      </div>
    </div>
    <div class="project-visual" aria-hidden="true"><i class="${p.icon}"></i><b>${p.num}</b></div>
  </article>`).join("");
 
$("#codingGrid").innerHTML = CODING.map(c => `
  <a class="coding-card reveal" href="${c.url}" target="_blank" rel="noopener noreferrer">
    <div class="coding-logo">${c.logo}</div>
    <span>${c.label}</span><h3>${c.name}</h3><p>${c.text}</p>
    <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
  </a>`).join("");
 
$("#year").textContent = new Date().getFullYear();
 
/* =========================================================
   THEME
========================================================= */
 
const root = document.documentElement;
const themeBtn = $("#themeBtn");
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
 
function setTheme(theme) {
  root.dataset.theme = theme;
  themeBtn.innerHTML = `<i class="fa-solid fa-${theme === "dark" ? "sun" : "moon"}"></i>`;
  themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.content = theme === "dark" ? "#0b1020" : "#f5f7fb";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}
 
setTheme(savedTheme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
themeBtn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
 
/* =========================================================
   NAV: mobile menu, scroll state, active link
========================================================= */
 
const navMenu = $("#navMenu");
const menuBtn = $("#menuBtn");
 
function setMenu(open) {
  navMenu.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
}
 
menuBtn.addEventListener("click", () => setMenu(!navMenu.classList.contains("open")));
$$(".nav-link").forEach(l => l.addEventListener("click", () => setMenu(false)));
 
const navbar = $("#navbar");
const backTop = $("#backTop");
 
addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", scrollY > 20);
  backTop.classList.toggle("show", scrollY > 600);
}, { passive: true });
 
backTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
 
const navLinks = $$(".nav-link");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${e.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
 
$$("main section[id]").forEach(s => sectionObserver.observe(s));
 
/* =========================================================
   TYPING EFFECT
========================================================= */
 
const typingEl = $("#typingText");
const words = ["Java", "Spring Boot", "DSA", "AI/ML"];
let wi = 0, ci = 0, deleting = false;
 
function type() {
  const word = words[wi];
  typingEl.textContent = word.slice(0, ci);
 
  if (!deleting && ci === word.length) {
    deleting = true;
    return setTimeout(type, 1400);
  }
 
  if (deleting && ci === 0) {
    deleting = false;
    wi = (wi + 1) % words.length;
  }
 
  ci += deleting ? -1 : 1;
  setTimeout(type, deleting ? 50 : 90);
}
 
if (!reduceMotion) { ci = 0; type(); }
 
/* =========================================================
   REVEAL ON SCROLL + COUNTERS
========================================================= */
 
function animateCount(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
 
  if (reduceMotion) { el.textContent = target + suffix; return; }
 
  const start = performance.now();
  const tick = now => {
    const t = Math.min((now - start) / 1000, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
 
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    $$("[data-count]", e.target).forEach(animateCount);
    revealObserver.unobserve(e.target);
  });
}, { threshold: 0.12 });
 
$$(".reveal").forEach(el => revealObserver.observe(el));
 
/* =========================================================
   PROJECT MODAL
========================================================= */
 
const modal = $("#projectModal");
let lastFocus = null;
 
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
 
  lastFocus = document.activeElement;
 
  $("#modalLabel").textContent = p.type;
  $("#modalTitle").textContent = p.title;
  $("#modalDescription").textContent = p.details;
  $("#modalTech").innerHTML = p.tech.map(t => `<span>${t}</span>`).join("");
  $("#modalFeatures").innerHTML = p.more.map(f => `<li>${f}</li>`).join("");
  $("#modalArchitecture").innerHTML = p.flow
    .map(s => `<span>${s}</span>`)
    .join('<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>');
 
  modal.classList.add("open");
  document.body.classList.add("lock");
  $(".modal-close", modal).focus();
}
 
function closeProject() {
  modal.classList.remove("open");
  document.body.classList.remove("lock");
  if (lastFocus) lastFocus.focus();
}
 
document.addEventListener("click", e => {
  const open = e.target.closest("[data-project]");
  if (open) openProject(open.dataset.project);
  if (e.target.closest("[data-close]")) closeProject();
});
 
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeProject();
});
 
})();
 
