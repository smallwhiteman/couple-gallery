document.addEventListener("DOMContentLoaded", () => {
  const galleryEl = document.getElementById("gallery");
  const lightboxEl = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightbox-image");
  const dateEl = document.getElementById("lightbox-date");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const randomBtn = document.getElementById("random-btn");
  const themeToggle = document.getElementById("theme-toggle");
  const backToTopBtn = document.getElementById("back-to-top");
  const photoCountEl = document.getElementById("photo-count");
  const loveTimerEl = document.getElementById("love-timer");
  const categoryNav = document.getElementById("category-nav");
  const categoryButtons = categoryNav ? categoryNav.querySelectorAll(".category-btn") : [];

  const CATEGORY_MAP = {
    "flower-field-us.jpg": "confession",
    "flower-field-us.jpg": "confession",
    "lake-portrait.jpg": "portrait",
    "birthday-dinner.jpg": "daily",
    "scooter-ride.jpg": "daily",
    "night-shoulders.jpg": "daily",
    "lake-talk.jpg": "daily",
    "headphones-night.jpg": "portrait",
    "field-photo-1.jpg": "portrait",
    "field-photo-2.jpg": "portrait",
    "flowers-squat.jpg": "portrait",
    "flowers-squat-2.jpg": "portrait",
    "flowers-offer.jpg": "portrait",
    "lake-ears.jpg": "portrait",
    "flowers-front-bouquet.jpg": "portrait",
    "flowers-hair.jpg": "portrait",
    "sunset-salute.jpg": "portrait",
    "lake-breath.jpg": "portrait",
    "lake-coat-front.jpg": "portrait",
    "lake-coat-front-2.jpg": "portrait",
    "park-coat-front.jpg": "portrait",
    "park-coat-grass.jpg": "portrait",
    "lake-coat-arms.jpg": "portrait",
    "sunset-tree.jpg": "portrait",
    "sunset-lake-lean.jpg": "portrait",
    "sunset-lake-v.jpg": "portrait",
    "sunset-lake-ok.jpg": "portrait",
    "sunset-lake-think.jpg": "portrait",
    "lake-blue.jpg": "portrait",
    "sunset-tree-2.jpg": "portrait",
    "flowers-walk-1.jpg": "portrait",
    "flowers-walk-2.jpg": "portrait",
    "rock-flowers.jpg": "confession",
    "sunset-silhouette-1.jpg": "portrait",
    "sunset-silhouette-2.jpg": "portrait",
    "bouquet-close-orange-1.jpg": "confession",
    "bouquet-close-orange-2.jpg": "confession",
    "street-food.jpg": "daily",
    "scooter-hands.jpg": "daily",
    "ski-helmet.jpg": "daily",
    "dog-cafe-group.jpg": "daily",
    "dog-cafe-hold.jpg": "daily",
    "night-street-food-2.jpg": "daily",
    "mirror-hug.jpg": "confession",
    "rings-bands.jpg": "confession",
    "bumper-pink-1.jpg": "daily",
    "bumper-pink-2.jpg": "daily",
    "heart-hands.jpg": "confession",
    "carousel-back.jpg": "daily",
    "lakeside-cafe.jpg": "confession",
    "willow-reflection.jpg": "confession",
    "bouquet-lake-duck.jpg": "confession",
    "couple-heart-soft.jpg": "confession",
    "ring-by-lake.jpg": "confession",
    "couple-heart-night.jpg": "confession",
    "letter-reading.jpg": "confession",
    "couple-heart-pinkboat.jpg": "confession",
    "hand-in-hand-night.jpg": "confession",
    "bouquet-cafe-focus.jpg": "confession",
    "bouquet-cafe-blur.jpg": "confession",
    "pavilion-hug-2.jpg": "confession",
    "pavilion-back.jpg": "confession",
    "swan-boat-back.jpg": "confession",
    "pavilion-hug.jpg": "confession",
    "letter-close.jpg": "confession",
    "bouquet-close.jpg": "confession",
    "forehead-touch.jpg": "confession",
    "pavilion-side.jpg": "confession",
    "white-flowers-tree.jpg": "confession",
    "sunset-couple-lake.jpg": "confession",
    "rings-show-lake.jpg": "confession",
    "hair-fix-night.jpg": "confession"
  };

  const allPhotos = PHOTOS.map((p) => ({
    ...p,
    category: CATEGORY_MAP[p.file] || "daily",
  }));

  let currentIndex = 0;
  let currentPhotos = [...allPhotos];

  if (photoCountEl) {
    photoCountEl.textContent = ` · 共 ${PHOTOS.length} 张照片`;
  }

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
    const randomIndex = Math.floor(Math.random() * currentPhotos.length);
    openLightbox(randomIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function openLightbox(index) {
    const photo = currentPhotos[index];
    imgEl.src = `photos/${photo.file}`;
    imgEl.alt = photo.caption || "";
    dateEl.textContent = photo.date || "";
    captionEl.textContent = photo.caption || "";
    counterEl.textContent = `${index + 1} / ${currentPhotos.length}`;
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
