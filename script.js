/* =========================================================
   NOVA TEAM PAGE — SCRIPT
   Sections:
   1. Team data
   2. Small icon helpers (social + avatar initials)
   3. Card rendering (builds every department grid from data)
   4. Search + filter
   5. Profile modal
   6. Stats counters (animate on scroll into view)
   7. Scroll reveal animations
   8. Navbar: hamburger, smooth scroll, active link on scroll
   9. Hero background network
   10. Join form validation
   ========================================================= */

/* ---------------------------------------------------------
   1. TEAM DATA
   Every member/role/name below is kept exactly as provided
   in the brief. Bios and responsibilities are short
   placeholder copy written to match each role.
   --------------------------------------------------------- */
const teamData = [
  {
    id: "sawera",
    name: "Sawera",
    role: "CEO",
    department: ["leadership"],
    badge: "Leadership",
    bio: "Sets the vision and direction for LearnNova VU, guiding every department toward the same goal.",
    responsibilities: ["Company vision & strategy", "Executive decision-making", "Cross-department leadership"],
    social: ["linkedin", "whatsapp"]
  },
  {
    id: "mubashir",
    name: "Mubashir",
    role: "Founder",
    department: ["leadership"],
    badge: "Leadership",
    bio: "Founded LearnNova VU to bring people together around one shared, team-driven vision.",
    responsibilities: ["Founding vision", "Long-term strategy", "Partnerships & growth"],
    social: ["linkedin", "instagram"]
  },
  {
    id: "fakhir",
    name: "Fakhir",
    role: "COO",
    department: ["leadership"],
    badge: "Leadership",
    bio: "Keeps LearnNova VU's day-to-day operations running smoothly across every department.",
    responsibilities: ["Operations management", "Process & efficiency", "Department coordination"],
    social: ["linkedin", "whatsapp"]
  },
  {
    id: "ayesha-leadership",
    name: "Ayesha",
    role: "5th Semester",
    department: ["leadership"],
    badge: "Leadership",
    bio: "Brings a fresh, student perspective into LearnNova VU's leadership conversations.",
    responsibilities: ["Leadership support", "Fresh perspective & ideas", "Cross-team involvement"],
    social: ["instagram", "whatsapp"]
  },
  {
    id: "comms-team",
    name: "Silent Spark & Ayesha",
    role: "Head of Communication",
    department: ["communication"],
    badge: "Communication",
    bio: "Managing and coordinating LearnNova VU's WhatsApp communities and communication channels.",
    responsibilities: ["Manage WhatsApp communities", "Coordinate communication channels", "Keep the team connected"],
    social: ["whatsapp", "instagram"]
  },
  {
    id: "marketing-team",
    name: "Alone & Ayesha",
    role: "Marketing Manager & Content Creators",
    department: ["marketing"],
    badge: "Marketing",
    bio: "Shape LearnNova VU's voice across reels, captions and campaigns from first draft to publish.",
    responsibilities: ["Writing reel scripts", "Creating captions", "Creating hashtags", "Developing social media content", "Supporting marketing campaigns"],
    social: ["instagram", "whatsapp"]
  },
  {
    id: "rimsha",
    name: "Rimsha",
    role: "Director of IT & Marketing",
    department: ["marketing", "it"],
    badge: "IT & Marketing",
    bio: "Leads technology initiatives while contributing to marketing strategy and digital growth.",
    responsibilities: ["Technology initiatives", "Marketing strategy", "Digital growth"],
    social: ["linkedin", "instagram"]
  },
  {
    id: "abubakar",
    name: "Abubakar",
    role: "Social Media Director",
    department: ["social"],
    badge: "Social Media",
    bio: "Oversees LearnNova VU's social media presence, content coordination, audience engagement, and social media strategy.",
    responsibilities: ["Social media presence", "Content coordination", "Audience engagement", "Social media strategy"],
    social: ["instagram", "facebook"]
  },
  {
    id: "abdulrehman",
    name: "Abdulrehman",
    role: "Chief Human Resource Manager",
    department: ["hr"],
    badge: "HR",
    bio: "Keeps LearnNova VU's people at the centre of everything, from hiring to team growth.",
    responsibilities: ["Team coordination", "Recruitment and onboarding", "Team management", "Internal communication", "Employee/team development"],
    social: ["linkedin", "whatsapp"]
  },
  {
    id: "muhtram",
    name: "Muhtram Bhai",
    role: "Chief Commercial Officer",
    department: ["commercial"],
    badge: "Commercial",
    bio: "Oversees sales, business development, and commercial strategy.",
    responsibilities: ["Sales", "Business Development", "Commercial Strategy", "Client Relations", "Growth Opportunities"],
    social: ["linkedin", "whatsapp"],
    featured: true
  }
];

/* Names shown in the Marketing & Social Media collaboration strip */
const collabNames = ["Alone", "Ayesha", "Abubakar", "Rimsha"];

/* ---------------------------------------------------------
   2. ICON HELPERS
   --------------------------------------------------------- */
const socialIcons = {
  facebook: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.9a8.1 8.1 0 0 1 6.9 12.4l-.3.4.9 3.3-3.4-.9-.4.2A8.1 8.1 0 1 1 12 3.9zm-3.2 4c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.1 1.8 2.9 4.5 4 2.2.9 2.7.7 3.1.7.6-.1 1.8-.7 2.1-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4-.3-.1-1.8-.9-2-1-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.2-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4z"/></svg>`
};

function initials(name){
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

/* ---------------------------------------------------------
   3. CARD RENDERING
   --------------------------------------------------------- */
function socialRowHTML(person){
  return `<div class="social-row">${
    person.social.map(key => `<a href="#" aria-label="${person.name} on ${key}" onclick="return false">${socialIcons[key] || ""}</a>`).join("")
  }</div>`;
}

function cardHTML(person){
  const prominent = person.featured ? " card-prominent" : "";
  return `
    <article class="card reveal${prominent}" data-id="${person.id}"
      data-name="${person.name.toLowerCase()}"
      data-role="${person.role.toLowerCase()}"
      data-department="${person.department.join(" ")}">
      <div class="card-avatar">${initials(person.name)}</div>
      <span class="card-badge">${person.badge}</span>
      <h4 class="card-name">${person.name}</h4>
      <p class="card-role">${person.role}</p>
      <p class="card-bio">${person.bio}</p>
      <div class="card-footer">
        ${socialRowHTML(person)}
        <button class="view-profile-btn" data-id="${person.id}">View Profile</button>
      </div>
    </article>
  `;
}

function renderGrid(containerId, members){
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = members.map(cardHTML).join("");
}

function byDept(dept){
  return teamData.filter(p => p.department.includes(dept));
}

renderGrid("grid-leadership", byDept("leadership"));
renderGrid("grid-communication", byDept("communication"));
renderGrid("grid-marketing", teamData.filter(p => p.id === "marketing-team" || p.id === "rimsha"));
renderGrid("grid-social", byDept("social"));
renderGrid("grid-hr", byDept("hr"));
renderGrid("grid-commercial", byDept("commercial"));

/* Collaboration avatar strip */
document.getElementById("collabAvatars").innerHTML = collabNames
  .map(n => `<span class="mini-avatar" title="${n}">${initials(n)}</span>`)
  .join("");

/* ---------------------------------------------------------
   4. SEARCH + FILTER
   Works across every card already rendered on the page.
   --------------------------------------------------------- */
const searchInput = document.getElementById("searchInput");
const filterBar = document.getElementById("filterBar");
const noResults = document.getElementById("noResults");
let activeFilter = "all";

function applySearchAndFilter(){
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach(card => {
    const name = card.dataset.name || "";
    const role = card.dataset.role || "";
    const dept = card.dataset.department || "";

    const matchesFilter = activeFilter === "all" || dept.split(" ").includes(activeFilter);
    const matchesSearch = !query || name.includes(query) || role.includes(query) || dept.includes(query);
    const visible = matchesFilter && matchesSearch;

    card.style.display = visible ? "" : "none";
    if (visible) visibleCount++;
  });

  /* Hide a department block entirely if it has no visible cards */
  document.querySelectorAll(".dept-block").forEach(block => {
    const hasVisible = [...block.querySelectorAll(".card")].some(c => c.style.display !== "none");
    block.style.display = hasVisible ? "" : "none";
  });

  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", applySearchAndFilter);

filterBar.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  applySearchAndFilter();
});

/* ---------------------------------------------------------
   5. PROFILE MODAL
   --------------------------------------------------------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalAvatar = document.getElementById("modalAvatar");
const modalBadge = document.getElementById("modalBadge");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const modalResp = document.getElementById("modalResp");
const modalSocial = document.getElementById("modalSocial");

function openModal(id){
  const person = teamData.find(p => p.id === id);
  if (!person) return;

  modalAvatar.textContent = initials(person.name);
  modalBadge.textContent = person.badge;
  modalName.textContent = person.name;
  modalRole.textContent = person.role;
  modalBio.textContent = person.bio;
  modalResp.innerHTML = person.responsibilities.map(r => `<li>${r}</li>`).join("");
  modalSocial.innerHTML = person.social
    .map(key => `<a href="#" aria-label="${person.name} on ${key}" onclick="return false">${socialIcons[key] || ""}</a>`)
    .join("");

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".view-profile-btn");
  if (btn) openModal(btn.dataset.id);
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* ---------------------------------------------------------
   6. STATS COUNTERS — animate once, when scrolled into view
   --------------------------------------------------------- */
const statNumbers = document.querySelectorAll(".stat-number");

function animateCount(el){
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

statNumbers.forEach(el => statObserver.observe(el));

/* ---------------------------------------------------------
   7. SCROLL REVEAL
   --------------------------------------------------------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveals(){
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}
observeReveals();
/* Re-scan after filter/search changes reveal new cards */
const gridObserverTarget = document.getElementById("team");
new MutationObserver(observeReveals).observe(gridObserverTarget, { childList: true, subtree: true });

/* ---------------------------------------------------------
   8. NAVBAR — hamburger, smooth scroll, active link on scroll
   --------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

const sections = ["top", "about", "team", "departments", "join"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navLinks.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { threshold: 0.4, rootMargin: "-80px 0px -50% 0px" });

sections.forEach(sec => navObserver.observe(sec));

/* ---------------------------------------------------------
   9. HERO BACKGROUND NETWORK
   A small SVG of connected nodes, representing the team
   working together. Generated once, animated softly via CSS.
   --------------------------------------------------------- */
(function buildHeroNetwork(){
  const container = document.getElementById("heroNetwork");
  const w = 1200, h = 500;
  const nodes = [];
  const cols = 7, rows = 3;

  for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
      nodes.push({
        x: (c / (cols - 1)) * w + (Math.random() * 40 - 20),
        y: 90 + r * 150 + (Math.random() * 40 - 20)
      });
    }
  }

  let lines = "";
  nodes.forEach((n, i) => {
    nodes.slice(i + 1).forEach(m => {
      const dist = Math.hypot(n.x - m.x, n.y - m.y);
      if (dist < 190){
        lines += `<line x1="${n.x}" y1="${n.y}" x2="${m.x}" y2="${m.y}" stroke="white" stroke-opacity="0.08"/>`;
      }
    });
  });

  let dots = nodes.map((n, i) => `
    <circle cx="${n.x}" cy="${n.y}" r="3" fill="white" fill-opacity="0.35">
      <animate attributeName="r" values="3;4.5;3" dur="${4 + (i % 5)}s" repeatCount="indefinite"/>
    </circle>
  `).join("");

  container.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">${lines}${dots}</svg>`;
})();

/* ---------------------------------------------------------
   10. JOIN FORM VALIDATION
   --------------------------------------------------------- */
const joinForm = document.getElementById("joinForm");
const formSuccess = document.getElementById("formSuccess");

const validators = {
  fName: v => v.trim().length >= 2 || "Please enter your name.",
  fEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.",
  fArea: v => v.trim().length >= 2 || "Let us know your role or area of interest.",
  fMessage: v => v.trim().length >= 10 || "Please write a little more (at least 10 characters)."
};

const fieldToError = {
  fName: "err-name",
  fEmail: "err-email",
  fArea: "err-area",
  fMessage: "err-message"
};

function validateField(id){
  const input = document.getElementById(id);
  const result = validators[id](input.value);
  const errorEl = document.getElementById(fieldToError[id]);
  const row = input.closest(".form-row");

  if (result === true){
    row.classList.remove("invalid");
    errorEl.textContent = "";
    return true;
  } else {
    row.classList.add("invalid");
    errorEl.textContent = result;
    return false;
  }
}

Object.keys(fieldToError).forEach(id => {
  document.getElementById(id).addEventListener("blur", () => validateField(id));
});

const submitBtn = joinForm.querySelector('button[type="submit"]');

joinForm.addEventListener("submit", async e => {
  e.preventDefault();
  const results = Object.keys(fieldToError).map(validateField);
  const allValid = results.every(Boolean);
  if (!allValid){
    formSuccess.hidden = true;
    return;
  }

  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try{
    const response = await fetch(joinForm.action, {
      method: "POST",
      body: new FormData(joinForm),
      headers: { "Accept": "application/json" }
    });

    if (response.ok){
      formSuccess.textContent = "Thanks — your message has been sent. LearnNova VU will be in touch soon.";
      formSuccess.hidden = false;
      joinForm.reset();
      Object.values(fieldToError).forEach(errId => { document.getElementById(errId).textContent = ""; });
      document.querySelectorAll(".form-row").forEach(row => row.classList.remove("invalid"));
    } else {
      formSuccess.textContent = "Something went wrong sending your message. Please try again in a moment.";
      formSuccess.hidden = false;
    }
  } catch (err){
    formSuccess.textContent = "Something went wrong sending your message. Please check your connection and try again.";
    formSuccess.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
    setTimeout(() => { formSuccess.hidden = true; }, 7000);
  }
});
