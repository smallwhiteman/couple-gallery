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
    const preferred = localStorage.getItem("bgMusic") || "on"; // 用户总体偏好
    const stateKey = "bgMusicState";
    const timeKey = "bgMusicTime";
    const lastState = localStorage.getItem(stateKey) || "stopped";
    const lastTime = parseFloat(localStorage.getItem(timeKey) || "0");

    const bindGesturePlay = () => {
      const handler = () => {
        bgMusic.play().then(() => {
          musicPlaying = true;
          updateMusicToggle(true);
          localStorage.setItem("bgMusic", "on");
          localStorage.setItem(stateKey, "playing");
        }).catch(() => {});
      };
      ["click", "touchstart", "keydown"].forEach((evt) => {
        window.addEventListener(evt, handler, { once: true });
      });
    };

    const initFromLastState = () => {
      if (!Number.isNaN(lastTime) && lastTime > 0) {
        try {
          bgMusic.currentTime = lastTime;
        } catch (e) {}
      }

      // 如果首页正在播放，则在大事记页续播；否则只更新按钮状态
      if (lastState === "playing" && preferred === "on") {
        bgMusic.play().then(() => {
          musicPlaying = true;
          updateMusicToggle(true);
        }).catch(() => {
          bindGesturePlay();
        });
      } else {
        updateMusicToggle(lastState === "playing");
      }
    };

    if (bgMusic.readyState >= 1) {
      initFromLastState();
    } else {
      bgMusic.addEventListener("loadedmetadata", initFromLastState, { once: true });
    }

    // 播放进度持久化，方便在首页/大事记之间切换时续播
    bgMusic.addEventListener("timeupdate", () => {
      if (!musicPlaying) return;
      try {
        localStorage.setItem(timeKey, String(bgMusic.currentTime || 0));
      } catch (e) {}
    });

    window.addEventListener("beforeunload", () => {
      try {
        localStorage.setItem(timeKey, String(bgMusic.currentTime || 0));
        localStorage.setItem(stateKey, musicPlaying ? "playing" : "paused");
      } catch (e) {}
    });

    musicToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        updateMusicToggle(false);
        localStorage.setItem("bgMusic", "off");
        localStorage.setItem(stateKey, "paused");
      } else {
        bgMusic.play().then(() => {
          musicPlaying = true;
          updateMusicToggle(true);
          localStorage.setItem("bgMusic", "on");
          localStorage.setItem(stateKey, "playing");
        }).catch(() => {
          bindGesturePlay();
        });
      }
    });
  }
});
