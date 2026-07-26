// =========================
// ✅ SECTION REVEAL ANIMATION
// =========================
function revealSections() {
  document.querySelectorAll(".fade").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

// =========================
// ✅ PAGE LOAD INIT
// =========================

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  // ✅ Toggle menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing immediately
    navMenu.classList.toggle("active");
  });

  // ✅ Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  // ✅ Close when clicking a menu item
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

});
window.addEventListener("scroll", revealSections);


// =========================
// ✅ PROJECT MODAL (DYNAMIC)
// =========================
const projectModal = document.getElementById("projectModal");
const projectContent = document.getElementById("projectContent");
const projectClose = document.getElementById("projectClose");

function openProject(type) {

  let content = "";

  // ✅ ERP PROJECT
  if (type === "erp") {
    content = `
      <h2>ERP Automation Dashboard</h2>

      <p>
      Enterprise ERP dashboard for real-time production monitoring,
      sewing QC tracking, WIP visibility, and line-level performance analytics.
      </p>

      <a href="http://erp.amtranet.com/durl/dashboard.html" target="_blank">
        Open ERP Dashboard
      </a>

      <div class="slider">
        <button class="prev">&#10094;</button>
        
<div class="slides">
  <img src="asset/dashboard_URL1.png" class="slide">
  <img src="asset/dashboard_URL2.png" class="slide">
</div>

        <button class="next">&#10095;</button>
      </div>

      <h3>Features</h3>
      <ul>
        <li>Real-time production monitoring</li>
        <li>Hourly QC tracking system</li>
        <li>WIP, SMV, efficiency dashboard</li>
        <li>Target vs achievement tracking</li>
      </ul>
    `;
  }

  // ✅ IOT PROJECT
  if (type === "iot") {
    content = `
      <h2>IoT Worker Efficiency Tracking System</h2>

      <p>
      Advanced IoT-based solution integrating Intellier needle devices
      with Logic ERP platform via API. Enables real-time worker-level
      productivity tracking, idle time analysis, and efficiency monitoring.
      </p>

      <div class="slider">
        <button class="prev">&#10094;</button>
        
<div class="slides">
  <img src="asset/niddle IOT Dashboard.png" class="slide">
  <img src="asset/niddle IOT Dashboard estimated ROI.png" class="slide">
</div>

        <button class="next">&#10095;</button>
      </div>

      <h3>Key Features</h3>
      <ul>
        <li>IoT needle device integration (Intellier)</li>
        <li>Worker efficiency tracking</li>
        <li>Idle time & productivity monitoring</li>
        <li>ERP API integration (Logic ERP)</li>
      </ul>

      <h3>Business Impact</h3>
      <ul>
        <li>50–75% line balancing improvement</li>
        <li>20–35% idle time reduction</li>
        <li>15–20% better skill evaluation accuracy</li>
        <li>8–10% increase in profitability</li>
      </ul>
    `;
  }

  // ✅ API PROJECT
  if (type === "api") {
    content = `
      <h2>Telecom API System</h2>

      <p>
      High-performance backend API system built with FastAPI
      for scalable telecom services and optimized response time.
      </p>

      <h3>Features</h3>
      <ul>
        <li>FastAPI backend architecture</li>
        <li>Optimized low-latency APIs</li>
        <li>Production-ready deployment</li>
      </ul>
    `;
  }

if (type === "ecommerce") {
  content = `
    <h2>E-Commerce Platform (Sahaba Agency)</h2>

    <p>
    Designed and implemented a complete e-commerce solution including
    product management, category system, and UI optimization.
    </p>

    <a href="https://sahabaagency.com/" target="_blank">
      Visit Website
    </a>

    <div class="slider">
      <button class="prev">&#10094;</button>

      <div class="slides">
        <img src="asset/sahaba Agency website.png" class="slide">
      </div>

      <button class="next">&#10095;</button>
    </div>

    <h3>Responsibilities</h3>
    <ul>
      <li>Full-stack development using Laravel & MySQL</li>
      <li>E-commerce system design (products, categories, checkout)</li>
      <li>Frontend UI/UX development (HTML, CSS, Bootstrap)</li>
      <li>Database design and optimization</li>
      <li>Deployment, hosting, and production support</li>
    </ul>

    <h3>Technologies</h3>
    <p>Laravel, MySQL, HTML5, CSS, JavaScript, Bootstrap</p>
  `;
}

if (type === "topedu") {
  content = `
    <h2>TopEdu Global Platform</h2>

    <p>
    Developed and maintained study abroad platform with server
    infrastructure and deployment support.
    </p>

    <a href="https://topeduglobal.com/" target="_blank">
      Visit Website
    </a>

    <div class="slider">
      <button class="prev">&#10094;</button>

      <div class="slides">
        <img src="asset/Topeduglobal.png" class="slide">
      </div>

      <button class="next">&#10095;</button>
    </div>

    <h3>Responsibilities</h3>
    <ul>
      <li>Server management (Linux hosting environment)</li>
      <li>Deployment and production monitoring</li>
      <li>Bug fixing and system maintenance</li>
      <li>Performance optimization and uptime monitoring</li>
      <li>Full-stack support (Laravel, MySQL, frontend)</li>
    </ul>
  `;
}

if (type === "doria") {
  content = `
    <h2>Doria Shipping Ltd (Dubai)</h2>

    <p>
    Django CMS based multinational corporate system with
    monitoring and support.
    </p>

    <a href="https://doriabd.com/dsl/" target="_blank">
      Visit Website
    </a>

    <div class="slider">
      <button class="prev">&#10094;</button>

      <div class="slides">
        <img src="asset/Doria Shiping Ltd.png" class="slide">
      </div>

      <button class="next">&#10095;</button>
    </div>

    <h3>Responsibilities</h3>
    <ul>
      <li>Server monitoring and management</li>
      <li>Django CMS maintenance and updates</li>
      <li>Bug fixing and production support</li>
      <li>Deployment and system stability improvements</li>
      <li>Multinational project coordination</li>
    </ul>
  `;
}


if (type === "backyard") {
  content = `
    <h2>Backyard Company (Austria)</h2>

    <p>
    Technical Specialist & Implementation Lead for international system deployment.
    </p>

    <a href="https://backyardco.au/" target="_blank">
      Visit Website
    </a>

    <div class="slider">
      <button class="prev">&#10094;</button>

      <div class="slides">
        <img src="asset/backyard.png" class="slide">
      </div>

      <button class="next">&#10095;</button>
    </div>

    <h3>Responsibilities</h3>
    <ul>
      <li>Technical leadership and system coordination</li>
      <li>International system deployment and configuration</li>
      <li>Production system monitoring and support</li>
      <li>Client communication and requirement implementation</li>
      <li>Cross-team collaboration across different countries</li>
    </ul>
  `;
}

if (type === "erp_full") {
  content = `
    <h2>Logic ERP Platform (Product Owner Role)</h2>

    <p>
    Worked as Product Owner leading customization, implementation,
    and technical development of enterprise Logic ERP system.
    Responsible for end-to-end system architecture, production support,
    and continuous enhancement.
    </p>

    <a href="http://erp.amtranet.com/" target="_blank">
      Open ERP Platform
    </a>

    <div class="slider">
      <button class="prev">&#10094;</button>
      

<div class="slides">
  <img src="asset/ERP Platform.png" class="slide">
</div>


      <button class="next">&#10095;</button>
    </div>

    <h3>Responsibilities</h3>
    <ul>
      <li>Product ownership and ERP roadmap planning</li>
      <li>Frontend & backend customization</li>
      <li>Database design and optimization (SQL)</li>
      <li>ERP workflow implementation</li>
      <li>User support, training & deployment</li>
      <li>Integration with external systems</li>
    </ul>

    <h3>Modules Covered</h3>
    <ul>
      <li>Production & Planning</li>
      <li>Inventory & Supply Chain</li>
      <li>Commercial & Merchandising</li>
      <li>Approval & Workflow systems</li>
    </ul>

    <h3>Business Impact</h3>
    <ul>
      <li>Supported 1000+ ERP users</li>
      <li>Improved efficiency by 18%</li>
      <li>Real-time decision-making system</li>
      <li>Reduced manual work by 60%</li>
    </ul>

    <h3>Technology Stack</h3>
    <p>
    ERP System, PHP, JavaScript, SQL Database, Server Infrastructure
    </p>
  `;
}

  projectContent.innerHTML = content;
  projectModal.style.display = "block";

  setTimeout(() => initSlider(), 100); // ✅ ensure DOM ready
}


// =========================
// ✅ CLOSE MODAL
// =========================

projectClose.onclick = () => {
  projectModal.style.display = "none";
  clearInterval(sliderInterval); // ✅ stop auto slide
};


window.onclick = (e) => {
  if (e.target === projectModal) {
    projectModal.style.display = "none";
  }
};


// =========================
// ✅ SLIDER (DYNAMIC)
// =========================
let sliderInterval; // ✅ global

function initSlider() {

  let slides = document.querySelectorAll(".slide");
  let current = 0;

  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // ✅ clear previous interval
  clearInterval(sliderInterval);

  if (next && prev) {
    next.onclick = nextSlide;
    prev.onclick = prevSlide;
  }

  showSlide(0);

  // ✅ auto slide
  sliderInterval = setInterval(nextSlide, 3000);
}


// =========================
// ✅ FLOATING ACTION BUTTONS
// =========================

function toggleSharePopup() {
  const popup = document.getElementById("sharePopup");
  const btn   = document.getElementById("shareToggleBtn");
  const isOpen = popup.classList.toggle("visible");
  btn.classList.toggle("open", isOpen);
}

function copyProfileLink() {
  const url = "https://gazialamin96.github.io";
  const btn = document.getElementById("copyLinkBtn");

  const finish = (ok) => {
    btn.classList.add("copied");
    btn.innerHTML = ok
      ? '<i class="fas fa-check"></i>'
      : '<i class="fas fa-times"></i>';
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2200);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => finish(true)).catch(() => finish(false));
  } else {
    // Legacy fallback
    const el = document.createElement("textarea");
    el.value = url;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    finish(ok);
  }
}

function nativeShare() {
  if (navigator.share) {
    navigator.share({
      title: "Al Amin | Portfolio",
      text:  "Check out Al Amin's portfolio — Senior System Analyst | ERP | DevOps | AI Automation",
      url:   "https://gazialamin96.github.io"
    }).catch(() => {});
  } else {
    // Fallback: just copy the link
    copyProfileLink();
  }
}

// Close share popup when clicking outside
document.addEventListener("click", (e) => {
  const wrapper = document.querySelector(".share-wrapper");
  if (wrapper && !wrapper.contains(e.target)) {
    document.getElementById("sharePopup").classList.remove("visible");
    const btn = document.getElementById("shareToggleBtn");
    if (btn) btn.classList.remove("open");
  }
});


// =========================
// ✅ CUSTOM ANIMATED CURSOR
// =========================
(function initCursor() {

  // Skip on touch-only devices (phones/tablets with no mouse)
  if (!window.matchMedia("(pointer: fine)").matches) return;

  document.body.classList.add("custom-cursor");

  const dot  = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mx = -200, my = -200; // dot position  (instant)
  let rx = -200, ry = -200; // ring position (lagged)

  // ── Dot follows mouse instantly ──────────────────────
  document.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";
    dot.classList.add("visible");
    ring.classList.add("visible");
  });

  // ── Ring follows with smooth lag (requestAnimationFrame) ──
  (function tick() {
    rx += (mx - rx) * 0.10;
    ry += (my - ry) * 0.10;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(tick);
  })();

  // ── Hide when mouse leaves the page ─────────────────
  document.addEventListener("mouseleave", () => {
    dot.classList.remove("visible");
    ring.classList.remove("visible");
  });

  document.addEventListener("mouseenter", () => {
    dot.classList.add("visible");
    ring.classList.add("visible");
  });

  // ── Hover state (links, buttons, cards, etc.) ────────
  const TARGETS = "a, button, .btn, .card, label, [onclick], .float-btn, .menu-toggle, .share-copy-btn, .tab";

  document.addEventListener("mouseover", e => {
    if (e.target.closest(TARGETS)) {
      dot.classList.add("is-hover");
      ring.classList.add("is-hover");
    }
  });

  document.addEventListener("mouseout", e => {
    if (e.target.closest(TARGETS)) {
      dot.classList.remove("is-hover");
      ring.classList.remove("is-hover");
    }
  });

  // ── Click burst ───────────────────────────────────────
  document.addEventListener("mousedown", () => {
    dot.classList.add("is-click");
    ring.classList.add("is-click");
  });

  document.addEventListener("mouseup", () => {
    dot.classList.remove("is-click");
    ring.classList.remove("is-click");
  });

})();


// =========================
// ✅ LOADING SCREEN
// =========================
(function initLoader() {
  const overlay  = document.getElementById("loaderOverlay");
  const bar      = document.getElementById("loaderBar");
  const statusEl = document.getElementById("loaderStatus");
  const percentEl= document.getElementById("loaderPercent");
  const codesEl  = document.getElementById("loaderCodes");
  if (!overlay) return;

  document.body.style.overflow = "hidden";

  const snippets = [
    'SELECT worker, AVG(efficiency) FROM sewing_line GROUP BY line_id;',
    'git push origin main && pm2 restart erp-server --update-env',
    'def sync_erp(payload): return requests.post(ERP_API, json=payload)',
    'docker build -t erp-app:latest . && docker-compose up -d --build',
    '@app.post("/api/v1/production/sync") async def sync(data: ERPModel):',
    'ALTER TABLE inventory ADD COLUMN iot_device_id VARCHAR(50) NOT NULL;',
    'nginx -t && systemctl reload nginx && echo "Deploy success ✓"',
    '{ "erp_users": 1000, "uptime": "99.9%", "efficiency_gain": "+18%" }',
    'php artisan queue:work --tries=3 --timeout=60 --daemon',
    'git commit -m "feat: AI-assisted ERP automation & IoT pipeline"',
    'curl -X POST https://erp.amtranet.com/api/v1/sync -H "Bearer: ***"',
    'SELECT kpi, target FROM production WHERE date=CURDATE() AND hit=1;',
    'ansible-playbook deploy.yml -i hosts/production --tags=erp,iot',
    'python automate.py --module=erp --env=production --verbose --ai',
    'systemctl status logic-erp | grep "active (running)" | tail -1',
    'INSERT INTO go_live_log (project, users, status) VALUES ("ERP",1000,"SUCCESS");',
    'rsync -avz --delete dist/ deploy@server:/var/www/html/ --progress',
    'SELECT SUM(output) FROM production_log WHERE shift="morning" AND wip=0;',
    'import anthropic; ai = anthropic.Anthropic()  # Vibe coding session',
    'git log --oneline --graph --decorate --all | head -20',
    'cat /var/log/erp/error.log | grep -i "critical" | wc -l  # → 0',
    'mysql -u root erp_db < migration_v3.sql && echo "Migration done ✓"',
    'kubectl get pods -n production | grep erp  # Running: 4/4',
    'SELECT COUNT(*) shipments FROM orders WHERE status="DISPATCHED";',
  ];

  const statuses = [
    "Initializing systems...",
    "Loading ERP modules...",
    "Connecting to database...",
    "Syncing IoT pipeline...",
    "Running AI services...",
    "Deploying to production...",
    "System ready ✓",
  ];

  const DURATION  = 3000;
  const STEP_MS   = 28;
  const TOTAL_STEPS = Math.round(DURATION / STEP_MS);
  const STATUS_STEP = Math.floor(TOTAL_STEPS / statuses.length);

  let step = 0;
  let lastStatusIdx = 0;

  // Spawn a floating code line at a random position
  function spawnCode() {
    const el = document.createElement("div");
    el.className = "code-float";
    el.textContent = snippets[Math.floor(Math.random() * snippets.length)];

    const dur = 3.2 + Math.random() * 2.4;
    el.style.left             = (Math.random() * 92) + "%";
    el.style.top              = (8  + Math.random() * 80) + "%";
    el.style.fontSize         = (8.5 + Math.random() * 4) + "px";
    el.style.color            = "rgba(0,247,255," + (0.07 + Math.random() * 0.22).toFixed(2) + ")";
    el.style.animationDuration = dur + "s";

    codesEl.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 200);
  }

  // Seed initial burst then keep spawning
  for (let i = 0; i < 8; i++) setTimeout(spawnCode, i * 70);
  const spawnTimer = setInterval(spawnCode, 250);

  // Progress ticker
  const progressTimer = setInterval(() => {
    step++;
    const pct = Math.min(Math.round((step / TOTAL_STEPS) * 100), 100);
    bar.style.width     = pct + "%";
    percentEl.textContent = pct + "%";

    const sIdx = Math.min(Math.floor(step / STATUS_STEP), statuses.length - 1);
    if (sIdx !== lastStatusIdx) {
      lastStatusIdx = sIdx;
      statusEl.style.opacity = "0";
      setTimeout(() => {
        statusEl.textContent  = statuses[sIdx];
        statusEl.style.opacity = "1";
      }, 180);
    }

    if (step >= TOTAL_STEPS) clearInterval(progressTimer);
  }, STEP_MS);

  // Dismiss after 3 s
  setTimeout(() => {
    clearInterval(spawnTimer);
    clearInterval(progressTimer);
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
    setTimeout(() => overlay.remove(), 800);
  }, DURATION);

  // Add fade transition to status text
  statusEl.style.transition = "opacity 0.18s ease";
})();
