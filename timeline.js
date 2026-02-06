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
    // 只用偏好来设置按钮样式，不在新页面自动播放，避免每次从头播放
    updateMusicToggle(preferred === "on");

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

    // 在大事记页面不自动播放背景音乐，只有用户点击按钮时才开始播放，
    // 避免从首页跳转过来后曲子每次都从头开始。

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
