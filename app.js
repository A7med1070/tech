const pages = [
  ["index.html", "الرئيسية"],
  ["about.html", "من نحن"],
  ["services.html", "الخدمات"],
  ["products.html", "التكييفات"],
  ["gallery.html", "المعرض"],
  ["reviews.html", "التقييمات"],
  ["contact.html", "تواصل معنا"]
];

const iconPaths = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.23a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z"/>',
  snow: '<path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07 19.07 4.93M8 2l4 4 4-4M8 22l4-4 4 4"/>',
  truck: '<path d="M10 17H5a3 3 0 0 1-3-3V6h12v11M14 9h4l4 4v4h-3M7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  whatsapp: '<path d="M20 11.7a8 8 0 0 1-11.9 7L3 20l1.4-4.9A8 8 0 1 1 20 11.7Z"/><path d="M9.2 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3-.1.5.4.8 1 1.4 1.8 1.8.2.1.3 0 .5-.1l.7-.5c.2-.1.4-.1.6 0l1.8.9c.3.1.4.3.4.6 0 .4-.3 1.2-.8 1.5-.5.4-1.7.7-3.6-.1-2.7-1.1-4.4-3.8-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2Z"/>'
};

const svgIcon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.star}</svg>`;

function freshAirLogo(className = "brand-logo") {
  const uid = `fa-${className.replace(/[^a-z0-9]/gi, "") || "logo"}`;
  return `
    <svg class="${className}" viewBox="0 0 430 124" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="فريش إير للمكيفات المستعملة بالرياض">
      <defs>
        <linearGradient id="${uid}-mark" x1="18" y1="14" x2="122" y2="108" gradientUnits="userSpaceOnUse">
          <stop stop-color="#84F8FF"/>
          <stop offset=".46" stop-color="#20BDEB"/>
          <stop offset="1" stop-color="#94EA46"/>
        </linearGradient>
        <linearGradient id="${uid}-wind" x1="18" y1="30" x2="124" y2="78" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E8FFFF"/>
          <stop offset=".55" stop-color="#66ECFF"/>
          <stop offset="1" stop-color="#79F2C3"/>
        </linearGradient>
        <linearGradient id="${uid}-shine" x1="148" y1="18" x2="410" y2="104" gradientUnits="userSpaceOnUse">
          <stop stop-color="var(--logo-text)"/>
          <stop offset=".5" stop-color="var(--logo-text)"/>
          <stop offset="1" stop-color="var(--logo-accent)"/>
        </linearGradient>
        <filter id="${uid}-glow" x="-10" y="-10" width="158" height="144" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="12" stdDeviation="11" flood-color="#21D8FF" flood-opacity=".32"/>
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#8EE23F" flood-opacity=".22"/>
        </filter>
        <filter id="${uid}-textGlow" x="120" y="0" width="310" height="124" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="2" stdDeviation="1.1" flood-color="var(--logo-shadow)" flood-opacity=".82"/>
          <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#21D8FF" flood-opacity=".14"/>
        </filter>
      </defs>
      <g class="logo-symbol" filter="url(#${uid}-glow)">
        <path class="logo-orbit" d="M70 15c29.8 0 54 24.2 54 54 0 13.4-4.9 25.8-13.1 35.3" stroke="url(#${uid}-mark)" stroke-width="9.5" stroke-linecap="round"/>
        <path class="logo-orbit" d="M32.7 104.3A54 54 0 0 1 70 15" stroke="url(#${uid}-mark)" stroke-width="9.5" stroke-linecap="round"/>
        <path class="logo-windline" d="M22 52c17.7-17.1 39.9-19.1 62.9-3.1 16.1 11.2 32.7 13.2 50.4 1.8-13.2 22.5-37 30.7-60.5 18.8C57.1 60.5 43.6 50.4 22 52Z" fill="url(#${uid}-wind)" opacity=".98"/>
        <path class="logo-windline" d="M17 73.8c20.2-14.5 42.3-15.1 64.4 0 17.1 11.7 33.9 12.5 52.5.9-15.2 21.6-39.8 29.3-63.6 17C51.7 82 39.1 72.2 17 73.8Z" fill="url(#${uid}-wind)" opacity=".78"/>
        <path d="M44 40h50M70 19.5v51M50.2 29.2l39.6 39.6M89.8 29.2 50.2 68.8" stroke="#082437" stroke-width="4.4" stroke-linecap="round" opacity=".58"/>
        <path d="M44 40h50M70 19.5v51M50.2 29.2l39.6 39.6M89.8 29.2 50.2 68.8" stroke="#F8FFFF" stroke-width="2.45" stroke-linecap="round" opacity=".9"/>
        <circle class="logo-spark" cx="118" cy="29" r="3.5" fill="#8EE23F"/>
        <circle class="logo-spark" cx="132" cy="39" r="2.5" fill="#84F8FF"/>
      </g>
      <g class="logo-copy" filter="url(#${uid}-textGlow)">
        <text class="logo-wordmark logo-wordmark-ar" x="408" y="52" direction="rtl" text-anchor="end">فريش إير</text>
        <text class="logo-tagline" x="408" y="82" direction="rtl" text-anchor="end">للمكيفات المستعملة بالرياض</text>
        <path class="logo-rule logo-rule-green" d="M214 98h98"/>
        <path class="logo-rule logo-rule-blue" d="M324 98h54"/>
      </g>
    </svg>
  `;
}

function freshAirMark(className = "brand-mark-logo") {
  const uid = `fa-${className.replace(/[^a-z0-9]/gi, "") || "mark"}`;
  return `
    <svg class="${className}" viewBox="0 0 144 124" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="${uid}-mark" x1="18" y1="14" x2="122" y2="108" gradientUnits="userSpaceOnUse">
          <stop stop-color="#84F8FF"/>
          <stop offset=".46" stop-color="#20BDEB"/>
          <stop offset="1" stop-color="#94EA46"/>
        </linearGradient>
        <linearGradient id="${uid}-wind" x1="18" y1="30" x2="124" y2="78" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E8FFFF"/>
          <stop offset=".55" stop-color="#66ECFF"/>
          <stop offset="1" stop-color="#79F2C3"/>
        </linearGradient>
        <filter id="${uid}-glow" x="-10" y="-10" width="158" height="144" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="12" stdDeviation="11" flood-color="#21D8FF" flood-opacity=".32"/>
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#8EE23F" flood-opacity=".22"/>
        </filter>
      </defs>
      <g class="logo-symbol" filter="url(#${uid}-glow)">
        <path class="logo-orbit" d="M70 15c29.8 0 54 24.2 54 54 0 13.4-4.9 25.8-13.1 35.3" stroke="url(#${uid}-mark)" stroke-width="9.5" stroke-linecap="round"/>
        <path class="logo-orbit" d="M32.7 104.3A54 54 0 0 1 70 15" stroke="url(#${uid}-mark)" stroke-width="9.5" stroke-linecap="round"/>
        <path class="logo-windline" d="M22 52c17.7-17.1 39.9-19.1 62.9-3.1 16.1 11.2 32.7 13.2 50.4 1.8-13.2 22.5-37 30.7-60.5 18.8C57.1 60.5 43.6 50.4 22 52Z" fill="url(#${uid}-wind)" opacity=".98"/>
        <path class="logo-windline" d="M17 73.8c20.2-14.5 42.3-15.1 64.4 0 17.1 11.7 33.9 12.5 52.5.9-15.2 21.6-39.8 29.3-63.6 17C51.7 82 39.1 72.2 17 73.8Z" fill="url(#${uid}-wind)" opacity=".78"/>
        <path d="M44 40h50M70 19.5v51M50.2 29.2l39.6 39.6M89.8 29.2 50.2 68.8" stroke="#082437" stroke-width="4.4" stroke-linecap="round" opacity=".58"/>
        <path d="M44 40h50M70 19.5v51M50.2 29.2l39.6 39.6M89.8 29.2 50.2 68.8" stroke="#F8FFFF" stroke-width="2.45" stroke-linecap="round" opacity=".9"/>
        <circle class="logo-spark" cx="118" cy="29" r="3.5" fill="#8EE23F"/>
        <circle class="logo-spark" cx="132" cy="39" r="2.5" fill="#84F8FF"/>
      </g>
    </svg>
  `;
}

function initShell() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="loader"><div class="loader-mark"><span>F</span></div></div>
    <div class="page-transition"></div>
    <header class="nav">
      <div class="nav-inner">
        <a class="brand" href="index.html" aria-label="Fresh air">
          <span class="brand-full">${freshAirLogo("brand-logo")}</span>
          <span class="brand-compact">${freshAirMark("brand-mark-logo")}<span>فريش إير</span></span>
        </a>
        <nav class="nav-links" aria-label="التنقل الرئيسي">
          ${pages.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <button class="icon-btn theme-toggle" type="button" title="تبديل الوضع">${svgIcon("moon")}</button>
          <button class="menu-btn" type="button" aria-label="القائمة">${svgIcon("menu")}</button>
        </div>
      </div>
    </header>
    <a class="whatsapp" href="https://wa.me/966556800314" aria-label="واتساب">${svgIcon("whatsapp")}</a>
  `);

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });

  const savedTheme = localStorage.getItem("freshair-theme");
  if (savedTheme === "light") document.documentElement.classList.add("light");
  const themeBtn = document.querySelector(".theme-toggle");
  const setThemeIcon = () => themeBtn.innerHTML = svgIcon(document.documentElement.classList.contains("light") ? "sun" : "moon");
  setThemeIcon();
  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    localStorage.setItem("freshair-theme", document.documentElement.classList.contains("light") ? "light" : "dark");
    setThemeIcon();
  });

  document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });

  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 18);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  const hideLoader = () => setTimeout(() => document.querySelector(".loader")?.classList.add("hide"), 450);
  if (document.readyState === "complete") {
    hideLoader();
  } else {
    addEventListener("load", hideLoader, { once: true });
  }

  document.querySelectorAll("a[href$='.html']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (link.target || href === current) return;
      event.preventDefault();
      const transition = document.querySelector(".page-transition");
      transition.classList.add("active");
      setTimeout(() => location.href = href, 350);
    });
  });
}

function initReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  document.querySelectorAll(".reveal, .card, .stat").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 8, 6) * 55}ms`;
    observer.observe(el);
  });
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const duration = 1600;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased).toLocaleString("ar-SA")}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: .35 });
  counters.forEach((counter) => observer.observe(counter));
}

function initCarousel(selector = "[data-carousel]") {
  document.querySelectorAll(selector).forEach((carousel) => {
    const slides = JSON.parse(carousel.dataset.slides || "[]");
    if (!slides.length) return;
    let index = 0;
    carousel.innerHTML = `<div class="slide"></div><div class="slider-dots"></div>`;
    const slide = carousel.querySelector(".slide");
    const dots = carousel.querySelector(".slider-dots");
    dots.innerHTML = slides.map((_, i) => `<button type="button" aria-label="شريحة ${i + 1}"></button>`).join("");
    const render = () => {
      const item = slides[index];
      slide.style.backgroundImage = `url('${item.image}')`;
      slide.innerHTML = `<span class="eyebrow">${item.tag}</span><h3>${item.title}</h3><p>${item.text}</p>`;
      dots.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("active", i === index));
    };
    dots.querySelectorAll("button").forEach((dot, i) => dot.addEventListener("click", () => {
      index = i;
      render();
    }));
    render();
    setInterval(() => {
      index = (index + 1) % slides.length;
      render();
    }, 4200);
  });
}

function initFilters() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === btn));
      grid.querySelectorAll("[data-type]").forEach((card) => {
        const show = value === "all" || card.dataset.type === value || card.dataset.price === value;
        card.style.display = show ? "" : "none";
      });
    });
  });
}

function initLightbox() {
  const items = document.querySelectorAll("[data-lightbox]");
  if (!items.length) return;
  document.body.insertAdjacentHTML("beforeend", `<div class="lightbox"><button class="btn primary" type="button">إغلاق</button><img src="assets/img/hero-ac-luxury.jpg" alt="معاينة الصورة"></div>`);
  const box = document.querySelector(".lightbox");
  const img = box.querySelector("img");
  items.forEach((item) => item.addEventListener("click", () => {
    img.src = item.dataset.lightbox;
    box.classList.add("open");
  }));
  box.addEventListener("click", (event) => {
    if (event.target === box || event.target.tagName === "BUTTON") box.classList.remove("open");
  });
}

function initFaq() {
  document.querySelectorAll(".faq-q").forEach((button) => {
    button.addEventListener("click", () => button.closest(".faq-item").classList.toggle("open"));
  });
}

function initProductDetail() {
  const target = document.querySelector("[data-product-detail]");
  if (!target) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "split-24";
  const products = {
    "split-24": ["مكيف سبليت 24 وحدة", "مكيف نظيف مفحوص، تبريد قوي، ضمان تشغيل بعد التركيب.", "2,150 ر.س", "assets/img/split-wall.jpg"],
    "window-18": ["مكيف شباك 18 وحدة", "خيار اقتصادي للملاحق والغرف، تنظيف كامل وفحص كهرباء.", "950 ر.س", "assets/img/window-ac.jpg"],
    "central": ["وحدة تكييف مركزية", "وحدة مناسبة للفلل والمكاتب مع تقييم فني قبل التسليم.", "5,800 ر.س", "assets/img/central-hvac.jpg"]
  };
  const product = products[id] || products["split-24"];
  target.innerHTML = `
    <div class="split">
      <div class="media-frame" style="background-image:url('${product[3]}')"></div>
      <div>
        <span class="eyebrow">تفاصيل المنتج</span>
        <h1>${product[0]}</h1>
        <p class="lead">${product[1]} يشمل السعر المعاينة الفنية والتوصيل داخل الرياض حسب الحي، مع إمكانية الفك والتركيب بواسطة فريق Fresh air.</p>
        <p class="price">${product[2]}</p>
        <div class="inline-actions">
          <a class="btn primary" href="tel:+966556800314">${svgIcon("phone")} اتصل الآن</a>
          <a class="btn ghost" href="contact.html">اطلب معاينة</a>
          <a class="btn" href="products.html">عودة للمكيفات</a>
        </div>
      </div>
    </div>`;
}

function init() {
  initShell();
  initReveals();
  initCounters();
  initCarousel();
  initFilters();
  initLightbox();
  initFaq();
  initProductDetail();
}

init();

