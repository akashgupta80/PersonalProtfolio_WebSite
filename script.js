(() => {
    "use strict";

    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const CREDLY_URL = "";

    const CERTIFICATES = [
        {
            logo: "image/ibm.png",
            image: "image/certificate/ibm.jpg",
            brand: "#0f62fe",
            type: "DIGITAL BADGE",
            title: "AI Fundamentals",
            fullTitle: "AI Fundamentals: Foundations for Understanding AI",
            issuer: "IBM SkillsBuild",
            date: "Nov 2026",
            detail: "",
            url: "https://www.credly.com/go/rOopa05j"
        },
        {
            logo: "image/oracle.png",
            image: "image/certificate/oracle.jpg",
            brand: "#c74634",
            type: "AWARD OF COMPLETION",
            title: "Database Programming with SQL",
            fullTitle: "Database Programming with SQL",
            issuer: "Oracle Academy",
            date: "Dec 2025",
            detail: "Completed all coursework",
            url: ""
        },
        {
            logo: "image/nice.png",
            image: "image/certificate/java.jpg",
            brand: "#9b1b30",
            type: "COURSE CERTIFICATE",
            title: "Programming in Java",
            fullTitle: "Programming in Java",
            issuer: "NICE Computer, Muzaffarpur",
            date: "Sep 2024",
            detail: "Grade A · 83%",
            url: ""
        },
        {
            logo: "image/guvi.png",
            image: "image/certificate/guvi.jpg",
            brand: "#1fb86a",
            type: "CERTIFICATE OF COMPLETION",
            title: "Mastering MySQL",
            fullTitle: "Mastering MySQL",
            issuer: "HCL GUVI",
            date: "Dec 2025",
            detail: "ID M5119g6uq61K117EY7",
            url: "https://www.guvi.in/certificate?id=M5119g6uq61K117EY7"
        },
        {
            logo: "image/redhat.png",
            image: "image/certificate/redhat.jpg",
            brand: "#ee0000",
            type: "CERTIFICATE OF ATTENDANCE",
            title: "System Administration I (RH124)",
            fullTitle: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
            issuer: "Red Hat",
            date: "May 2026",
            detail: "40 credit hours",
            url: "https://www.credly.com/badges/a49323bd-caa1-4da2-a129-a96332451ee7"
        }
    ];

    const SKILLS = [
        {
            icon: "fa-solid fa-code",
            group: "Programming",
            desc: "Strong foundation in core programming and object-oriented design.",
            items: [
                ["Java", "fa-brands fa-java"],
                ["Python", "fa-brands fa-python"],
                ["C", "fa-brands fa-cuttlefish"],
                ["OOP", "fa-solid fa-cubes"],
                ["Collections", "fa-solid fa-layer-group"],
                ["SQL", "fa-solid fa-database"]
            ]
        },
        {
            icon: "fa-solid fa-puzzle-piece",
            group: "DSA & Problem Solving",
            desc: "Practising data structures and algorithms regularly on LeetCode.",
            items: [
                ["Arrays & Strings", "fa-solid fa-list"],
                ["Searching & Sorting", "fa-solid fa-arrow-down-1-9"],
                ["Recursion", "fa-solid fa-rotate"]
            ]
        },
        {
            icon: "fa-solid fa-server",
            group: "Backend",
            desc: "Building application logic, APIs and database connectivity.",
            items: [
                ["Spring Boot", "fa-solid fa-leaf"],
                ["REST APIs", "fa-solid fa-plug"],
                ["JDBC", "fa-solid fa-link"]
            ]
        },
        {
            icon: "fa-solid fa-database",
            group: "Database",
            desc: "Designing relational schemas and writing queries.",
            items: [
                ["MySQL", "fa-solid fa-database"],
                ["Database Design", "fa-solid fa-table-cells"],
                ["Joins & Queries", "fa-solid fa-diagram-project"]
            ]
        },
        {
            icon: "fa-solid fa-globe",
            group: "Web Development",
            desc: "Responsive, accessible interfaces that talk to REST APIs.",
            items: [
                ["HTML5", "fa-brands fa-html5"],
                ["CSS3", "fa-brands fa-css3-alt"],
                ["JavaScript", "fa-brands fa-js"],
                ["Fetch API", "fa-solid fa-satellite-dish"]
            ]
        },
        {
            icon: "fa-solid fa-brain",
            group: "AI & Tools",
            desc: "Exploring machine learning concepts and everyday dev tools.",
            items: [
                ["Machine Learning", "fa-solid fa-brain"],
                ["Git & GitHub", "fa-brands fa-git-alt"]
            ]
        }
    ];

    const PROJECTS = [
        {
            id: "seat",
            num: "01",
            icon: "fa-solid fa-chair",
            type: "WEB APPLICATION",
            year: "2026",
            title: "Exam Seat Finder",
            intro: "A web portal where students enter an admission number and instantly see their exam room, seat, shift and timing.",
            details: "Students search by admission number to get room, seat, shift and timing, with upcoming and past exams organised separately, a live visitor counter and an in-app feedback form.",
            features: [
                ["fa-solid fa-magnifying-glass", "Instant seat lookup"],
                ["fa-solid fa-calendar-days", "Upcoming & past exams"],
                ["fa-solid fa-users", "Live students online"],
                ["fa-solid fa-comment-dots", "Feedback system"]
            ],
            more: [
                "Sorts exams by date and shift automatically",
                "Program badge for regular, back-paper and debarred exams",
                "Safe DOM rendering, responsive and accessible UI"
            ],
            tech: ["HTML", "CSS", "JavaScript", "Fetch API", "REST API"],
            flow: ["Browser UI", "Fetch API", "REST API /exam-seats", "Database"],
            github: ""
        },
        {
            id: "ums",
            num: "02",
            icon: "fa-solid fa-building-columns",
            type: "JAVA APPLICATION",
            year: "UNIVERSITY PROJECT",
            title: "University Management System",
            intro: "A dashboard-based desktop application that organizes academic and administrative operations in one place.",
            details: "A centralized system to manage students, courses, attendance and reports through a Java Swing interface connected to MySQL via JDBC.",
            features: [
                ["fa-solid fa-user-graduate", "Student management"],
                ["fa-solid fa-book", "Course management"],
                ["fa-solid fa-calendar-check", "Attendance"],
                ["fa-solid fa-chart-column", "Reports"]
            ],
            more: [
                "Manage student and course records",
                "Track attendance",
                "Generate academic reports"
            ],
            tech: ["Java", "Java Swing", "AWT", "JDBC", "MySQL"],
            flow: ["Swing / AWT UI", "Java logic", "JDBC", "MySQL"],
            github: ""
        }
    ];

    const CODING = [
        {
            logo: "LC",
            name: "LeetCode",
            text: "Practising data structures, algorithms and problem solving.",
            url: "https://leetcode.com/u/AkashGuptaxa/",
            label: "CODING PLATFORM"
        },
        {
            logo: '<i class="fa-brands fa-github"></i>',
            name: "GitHub",
            text: "Explore my projects, code and development journey.",
            url: "https://github.com/akashgupta80",
            label: "CODE & PROJECTS"
        }
    ];

    $("#skillsGrid").innerHTML = SKILLS.map(group => `
        <article class="skill-card reveal">
            <div class="skill-icon"><i class="${group.icon}"></i></div>
            <h3>${group.group}</h3>
            <p>${group.desc}</p>
            <div class="chips">${group.items.map(item => `<span><i class="${item[1]}"></i>${item[0]}</span>`).join("")}</div>
        </article>`).join("");

    $("#projectsList").innerHTML = PROJECTS.map((project, index) => `
        <article class="project-card reveal${index % 2 ? " reverse" : ""}">
            <div class="project-content">
                <div class="project-meta"><span>${project.type}</span><span>${project.year}</span></div>
                <h3>${project.title}</h3>
                <p class="project-intro">${project.intro}</p>
                <div class="project-features">${project.features.map(feature => `<div><i class="${feature[0]}"></i><span>${feature[1]}</span></div>`).join("")}</div>
                <div class="chips">${project.tech.map(tech => `<span>${tech}</span>`).join("")}</div>
                <div class="project-actions">
                    <button type="button" class="project-btn" data-project="${project.id}">Explore Project <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    ${project.github ? `<a class="project-btn ghost" href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Code</a>` : ""}
                </div>
            </div>
            <div class="project-visual" aria-hidden="true"><i class="${project.icon}"></i><b>${project.num}</b></div>
        </article>`).join("");

    $("#certGrid").innerHTML = CERTIFICATES.map((cert, index) => `
        <article class="cert-card reveal" style="--brand: ${cert.brand}">
            <div class="cert-logo"><img src="${cert.logo}" alt="${cert.issuer} logo"></div>
            <h3>${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <button type="button" class="cert-show" data-cert="${index}"><i class="fa-regular fa-eye"></i> Show</button>
        </article>`).join("");

    $("#certMore").innerHTML = CREDLY_URL
        ? `<a class="project-btn" href="${CREDLY_URL}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-medal"></i> View all on Credly</a>`
        : "";

    $("#codingGrid").innerHTML = CODING.map(item => `
        <a class="coding-card reveal" href="${item.url}" target="_blank" rel="noopener noreferrer">
            <div class="coding-logo">${item.logo}</div>
            <span>${item.label}</span>
            <h3>${item.name}</h3>
            <p>${item.text}</p>
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>`).join("");

    $("#year").textContent = new Date().getFullYear();

    const root = document.documentElement;
    const themeBtn = $("#themeBtn");
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch (error) {}

    function setTheme(theme) {
        root.dataset.theme = theme;
        themeBtn.innerHTML = `<i class="fa-solid fa-${theme === "dark" ? "sun" : "moon"}"></i>`;
        themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);

        const meta = $('meta[name="theme-color"]');

        if (meta) {
            meta.content = theme === "dark" ? "#0b1020" : "#f5f7fb";
        }

        try {
            localStorage.setItem("theme", theme);
        } catch (error) {}
    }

    setTheme(savedTheme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

    themeBtn.addEventListener("click", () => {
        setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });

    const navMenu = $("#navMenu");
    const menuBtn = $("#menuBtn");

    function setMenu(open) {
        navMenu.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", String(open));
        menuBtn.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
    }

    menuBtn.addEventListener("click", () => {
        setMenu(!navMenu.classList.contains("open"));
    });

    $$(".nav-link").forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    const navbar = $("#navbar");
    const backTop = $("#backTop");

    addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", scrollY > 20);
        backTop.classList.toggle("show", scrollY > 600);
    }, { passive: true });

    backTop.addEventListener("click", () => {
        scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    });

    const navLinks = $$(".nav-link");

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    $$("main section[id]").forEach(section => sectionObserver.observe(section));

    const typingEl = $("#typingText");
    const words = ["Java", "Spring Boot", "DSA", "AI/ML"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const word = words[wordIndex];
        typingEl.textContent = word.slice(0, charIndex);

        if (!deleting && charIndex === word.length) {
            deleting = true;
            return setTimeout(type, 1400);
        }

        if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        charIndex += deleting ? -1 : 1;
        setTimeout(type, deleting ? 50 : 90);
    }

    if (!reduceMotion) {
        charIndex = 0;
        type();
    }

    function animateCount(el) {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";

        if (reduceMotion) {
            el.textContent = target + suffix;
            return;
        }

        const start = performance.now();

        const tick = now => {
            const progress = Math.min((now - start) / 1000, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))) + suffix;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("in");
            $$("[data-count]", entry.target).forEach(animateCount);
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    $$(".reveal").forEach(el => revealObserver.observe(el));

    const modal = $("#projectModal");
    let lastFocus = null;

    function openProject(id) {
        const project = PROJECTS.find(item => item.id === id);

        if (!project) {
            return;
        }

        lastFocus = document.activeElement;

        $("#modalLabel").textContent = project.type;
        $("#modalTitle").textContent = project.title;
        $("#modalDescription").textContent = project.details;
        $("#modalTech").innerHTML = project.tech.map(tech => `<span>${tech}</span>`).join("");
        $("#modalFeatures").innerHTML = project.more.map(feature => `<li>${feature}</li>`).join("");
        $("#modalArchitecture").innerHTML = project.flow
            .map(step => `<span>${step}</span>`)
            .join('<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>');

        modal.classList.add("open");
        document.body.classList.add("lock");
        $(".modal-close", modal).focus();
    }

    function closeProject() {
        modal.classList.remove("open");
        document.body.classList.remove("lock");

        if (lastFocus) {
            lastFocus.focus();
        }
    }

    document.addEventListener("click", event => {
        const openBtn = event.target.closest("[data-project]");

        if (openBtn) {
            openProject(openBtn.dataset.project);
        }

        if (event.target.closest("[data-close]")) {
            closeProject();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("open")) {
            closeProject();
        }
    });

    const certModal = $("#certModal");
    let certLastFocus = null;

    function openCert(index) {
        const cert = CERTIFICATES[index];

        if (!cert) {
            return;
        }

        certLastFocus = document.activeElement;

        $("#certModalType").textContent = cert.type;
        $("#certModalTitle").textContent = cert.fullTitle || cert.title;
        $("#certModalMeta").textContent = [cert.issuer, cert.date, cert.detail].filter(Boolean).join(" · ");
        $("#certModalImage").src = cert.image;
        $("#certModalImage").alt = `${cert.fullTitle || cert.title} certificate`;
        $("#certModalActions").innerHTML = `
            ${cert.url ? `<a class="project-btn" href="${cert.url}" target="_blank" rel="noopener noreferrer">Verify credential <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
            <a class="project-btn ghost" href="${cert.image}" target="_blank" rel="noopener noreferrer">Open full size <i class="fa-solid fa-expand"></i></a>`;

        certModal.classList.add("open");
        document.body.classList.add("lock");
        $(".modal-close", certModal).focus();
    }

    function closeCert() {
        certModal.classList.remove("open");
        document.body.classList.remove("lock");

        if (certLastFocus) {
            certLastFocus.focus();
        }
    }

    document.addEventListener("click", event => {
        const showBtn = event.target.closest("[data-cert]");

        if (showBtn) {
            openCert(Number(showBtn.dataset.cert));
        }

        if (event.target.closest("[data-close-cert]")) {
            closeCert();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && certModal.classList.contains("open")) {
            closeCert();
        }
    });
})();