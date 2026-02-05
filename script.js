document.addEventListener("DOMContentLoaded", () => {
  const galleryEl = document.getElementById("gallery");
  const lightboxEl = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightbox-image");
  const dateEl = document.getElementById("lightbox-date");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const categoryEl = document.getElementById("lightbox-category");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const randomBtn = document.getElementById("random-btn");
  const themeToggle = document.getElementById("theme-toggle");
  const musicToggle = document.getElementById("music-toggle");
  const backToTopBtn = document.getElementById("back-to-top");
  const photoCountEl = document.getElementById("photo-count");
  const loveTimerEl = document.getElementById("love-timer");
  const categoryNav = document.getElementById("category-nav");
  const bgMusic = document.getElementById("bg-music");

  const allPhotos = [...PHOTOS];

  let currentIndex = 0;
  let currentPhotos = [...allPhotos];
  let activeCategory = "all";

  if (photoCountEl) {
    photoCountEl.textContent = ` · 共 ${PHOTOS.length} 张照片`;
  }

  // 自动渲染分类导航按钮
  function renderCategoryNav() {
    if (!categoryNav) return;

    // 添加"全部"按钮
    const allBtn = document.createElement("button");
    allBtn.className = "category-btn active";
    allBtn.dataset.category = "all";
    allBtn.textContent = "全部";
    categoryNav.appendChild(allBtn);

    // 根据 CATEGORY_LABELS 渲染分类按钮
    Object.entries(CATEGORY_LABELS).forEach(([key, label]) => {
      const btn = document.createElement("button");
      btn.className = "category-btn";
      btn.dataset.category = key;
      btn.textContent = label;
      categoryNav.appendChild(btn);
    });

    // 更新 categoryButtons 引用
    return categoryNav.querySelectorAll(".category-btn");
  }

  const categoryButtons = renderCategoryNav();

  if (loveTimerEl) {
    const start = new Date('2025-12-06T17:20:00').getTime();

    const updateLoveTimer = () => {
      const now = Date.now();
      const diffMs = Math.max(0, now - start);
      const totalSeconds = Math.floor(diffMs / 1000);

      const days = Math.floor(totalSeconds / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      loveTimerEl.textContent = `在一起 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds.toString().padStart(2, '0')} 秒`;
    };

    updateLoveTimer();
    setInterval(updateLoveTimer, 1000);
  }

  // 深色模式
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  // 加载保存的主题
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", toggleTheme);

  // 背景音乐控制
  function updateMusicToggle(isPlaying) {
    if (!musicToggle) return;
    musicToggle.textContent = isPlaying ? "🔊 Only For You" : "🎵 Only For You";
    musicToggle.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    musicToggle.classList.toggle("music-on", !!isPlaying);
  }

  if (bgMusic && musicToggle) {
    bgMusic.loop = true;
    let musicPlaying = false;
    const preferred = localStorage.getItem("bgMusic") || "on"; // 默认开启
    updateMusicToggle(false);

    const bindGesturePlay = () => {
      const handler = () => {
        bgMusic.play().then(() => {
          musicPlaying = true;
          updateMusicToggle(true);
          localStorage.setItem("bgMusic", "on");
        }).catch(() => {});
      };
      ["click", "touchstart", "keydown"].forEach((evt) => {
        window.addEventListener(evt, handler, { once: true });
      });
    };

    const autoPlayIfPreferred = () => {
      if (preferred !== "on") return;
      bgMusic.play().then(() => {
        musicPlaying = true;
        updateMusicToggle(true);
      }).catch(() => {
        // 需要用户手势时，挂一次全局监听
        bindGesturePlay();
      });
    };

    // 打开页面尝试自动播放（可能会被浏览器策略拦截）
    autoPlayIfPreferred();

    musicToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        updateMusicToggle(false);
        localStorage.setItem("bgMusic", "off");
      } else {
        bgMusic.play().then(() => {
          musicPlaying = true;
          updateMusicToggle(true);
          localStorage.setItem("bgMusic", "on");
        }).catch(() => {
          bindGesturePlay();
        });
      }
    });
  }

  // 返回顶部按钮
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 随机照片（当前筛选内随机）
  randomBtn.addEventListener("click", () => {
    if (!currentPhotos.length) return;

    let pool = currentPhotos;
    if (activeCategory !== "all") {
      pool = currentPhotos.filter((p) => p.category === activeCategory);
    }

    if (!pool.length) return;

    const randomIndexInPool = Math.floor(Math.random() * pool.length);
    const randomPhoto = pool[randomIndexInPool];
    const indexInCurrent = currentPhotos.indexOf(randomPhoto);
    if (indexInCurrent === -1) return;

    openLightbox(indexInCurrent);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function openLightbox(index) {
    const photo = currentPhotos[index];
    imgEl.src = `photos/${photo.file}`;
    imgEl.alt = photo.caption || "";
    dateEl.textContent = photo.date || "";
    captionEl.textContent = photo.caption || "";
    counterEl.textContent = `${index + 1} / ${currentPhotos.length}`;

    if (categoryEl) {
      const catKey = photo.category || 'daily';
      const label = CATEGORY_LABELS[catKey] || '日常';
      categoryEl.textContent = `类别：${label}`;
    }
    currentIndex = index;
    lightboxEl.classList.remove("hidden");
  }

  function closeLightbox() {
    lightboxEl.classList.add("hidden");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentPhotos.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    openLightbox(currentIndex);
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrev();
  });
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showNext();
  });
  lightboxEl.addEventListener("click", (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  // 键盘导航
  document.addEventListener("keydown", (e) => {
    if (lightboxEl.classList.contains("hidden")) return;
    
    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        showPrev();
        break;
      case "ArrowRight":
        showNext();
        break;
    }
  });

  // 图片懒加载
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      }
    });
  }, { rootMargin: "50px" });

  currentPhotos.forEach((photo, index) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.dataset.src = `photos/${photo.file}`;
    img.alt = photo.caption || "";
    img.loading = "lazy";

    const meta = document.createElement("div");
    meta.className = "photo-meta";

    const date = document.createElement("p");
    date.className = "photo-date";
    date.textContent = photo.date || "";

    const caption = document.createElement("p");
    caption.className = "photo-caption";
    caption.textContent = photo.caption || "";

    meta.appendChild(date);
    meta.appendChild(caption);
    card.appendChild(img);
    card.appendChild(meta);

    card.addEventListener("click", () => openLightbox(index));

    galleryEl.appendChild(card);
    imageObserver.observe(img);
  });

  const applyCategory = (category) => {
    activeCategory = category;
    const cards = galleryEl.querySelectorAll(".photo-card");
    cards.forEach((card, idx) => {
      const photo = currentPhotos[idx];
      const pCat = (photo && photo.category) || "daily";
      const show = category === "all" || pCat === category;
      card.style.display = show ? "" : "none";
    });
  };

  if (categoryButtons.length) {
    categoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.category || "all";
        applyCategory(cat);
      });
    });
  }
});
