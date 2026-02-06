document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const musicToggle = document.getElementById("music-toggle");
  const bgMusic = document.getElementById("bg-music");

  // 深色模式
  if (themeToggle) {
    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", toggleTheme);
  }

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
});
