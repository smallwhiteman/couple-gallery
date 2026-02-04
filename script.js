document.addEventListener("DOMContentLoaded", () => {
  const galleryEl = document.getElementById("gallery");
  const lightboxEl = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightbox-image");
  const dateEl = document.getElementById("lightbox-date");
  const captionEl = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  function openLightbox(photo) {
    imgEl.src = `photos/${photo.file}`;
    imgEl.alt = photo.caption || "";
    dateEl.textContent = photo.date || "";
    captionEl.textContent = photo.caption || "";
    lightboxEl.classList.remove("hidden");
  }

  function closeLightbox() {
    lightboxEl.classList.add("hidden");
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightboxEl.addEventListener("click", (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  PHOTOS.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.src = `photos/${photo.file}`;
    img.alt = photo.caption || "";

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

    card.addEventListener("click", () => openLightbox(photo));

    galleryEl.appendChild(card);
  });
});
