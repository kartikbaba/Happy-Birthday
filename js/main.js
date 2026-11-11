/* ============================================
   ROMANTIC BIRTHDAY WEBSITE — JS
   ============================================ */

// ===== 1. FLOATING PARTICLES =====
(function createParticles() {
  const container = document.getElementById('particles');
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      --drift: ${(Math.random() - 0.5) * 200}px;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 15}s;
      background: ${['#f48fb1','#e91e63','#f9d5e5','#fce4ec','#c9a96e'][Math.floor(Math.random()*5)]};
      opacity: 0;
    `;
    container.appendChild(p);
  }
})();

// ===== 2. FLOATING HEARTS IN HERO =====
(function createHeroHearts() {
  const container = document.getElementById('heartsContainer');
  const emojis = ['💕','💖','💗','💓','🌸','✨','💝','🌷'];
  let interval;

  function spawnHeart() {
    const el = document.createElement('div');
    el.className = 'floating-heart';
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    el.textContent = emoji;
    const size = Math.random() * 1.5 + 0.7;
    const duration = Math.random() * 8 + 6;
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 120;
    el.style.cssText = `
      left: ${left}%;
      bottom: -5%;
      font-size: ${size}rem;
      animation-duration: ${duration}s;
      animation-delay: 0s;
      --drift: ${drift}px;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 500);
  }

  // Spawn hearts periodically
  interval = setInterval(spawnHeart, 800);
  // Initial burst
  for (let i = 0; i < 6; i++) {
    setTimeout(spawnHeart, i * 300);
  }
})();

// ===== 3. SCROLL ANIMATIONS — INTERSECTION OBSERVER =====
const scrollObserver = (typeof IntersectionObserver !== 'undefined')
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay || 0;
          setTimeout(() => {
            el.classList.add('visible');
            // Autoplay videos when they become visible
            const video = el.querySelector('video');
            if (video && video.hasAttribute('autoplay')) {
              video.play().catch(e => console.log("Autoplay blocked:", e));
            }
          }, parseFloat(delay) * 1000);
          scrollObserver.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })
  : {
      observe: (el) => {
        if (!el) return;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), parseFloat(delay) * 1000);
      },
      unobserve: () => {}
    };

(function setupScrollAnimations() {
  // Timeline items
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.dataset.delay = i * 0.1;
    scrollObserver.observe(el);
  });

  // Generic data-animate elements with stagger
  const animGroups = {};
  document.querySelectorAll('[data-animate]').forEach((el) => {
    const section = el.closest('section');
    const key = section ? section.className : 'default';
    if (!animGroups[key]) animGroups[key] = [];
    animGroups[key].push(el);
  });
  Object.values(animGroups).forEach(group => {
    group.forEach((el, i) => {
      el.dataset.delay = i * 0.12;
      scrollObserver.observe(el);
    });
  });
})();

// ===== 4. CANDLES =====
(function createCandles() {
  const row = document.getElementById('candles');
  const count = Math.min(window.innerWidth < 480 ? 8 : 12, 15);
  for (let i = 0; i < count; i++) {
    const candle = document.createElement('div');
    candle.className = 'candle';
    const flame = document.createElement('div');
    flame.className = 'candle-flame';
    flame.style.animationDelay = `${Math.random() * 0.3}s`;
    flame.style.animationDuration = `${0.2 + Math.random() * 0.3}s`;
    const body = document.createElement('div');
    body.className = 'candle-body';
    const colors = ['#e91e63','#f48fb1','#c9a96e','#ad1457','#f06292','#ec407a'];
    body.style.background = `linear-gradient(to right, ${colors[i % colors.length]}aa, ${colors[i % colors.length]}, ${colors[i % colors.length]}aa)`;
    candle.appendChild(flame);
    candle.appendChild(body);
    row.appendChild(candle);
  }
})();

// ===== 5. CONFETTI =====
window.launchConfetti = function() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#e91e63','#f48fb1','#c9a96e','#ad1457','#f06292','#fff','#ffd700','#ff69b4','#ff1493'];
  const shapes = ['circle','square','heart'];
  const particles = [];

  for (let i = 0; i < 200; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      tilt: Math.random() * 360,
      tiltSpeed: (Math.random() - 0.5) * 4,
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 4 + 2,
      opacity: 1
    });
  }

  let frame;
  let startTime = null;
  const duration = 5000;

  function drawHeart(ctx, x, y, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
    ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size * 0.75, x, y + size);
    ctx.bezierCurveTo(x, y + size * 0.75, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
    ctx.fill();
    ctx.restore();
  }

  function tick(ts) {
    if (!startTime) startTime = ts;
    const elapsed = ts - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.tilt += p.tiltSpeed;
      if (elapsed > duration * 0.7) {
        p.opacity = Math.max(0, 1 - (elapsed - duration * 0.7) / (duration * 0.3));
      }
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tilt * Math.PI / 180);

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      } else if (p.shape === 'square') {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
      } else {
        drawHeart(ctx, -p.r / 2, -p.r / 2, p.r * 1.5, p.color);
      }
      ctx.restore();

      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
    });

    if (elapsed < duration) {
      frame = requestAnimationFrame(tick);
    } else {
      canvas.style.display = 'none';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  if (frame) cancelAnimationFrame(frame);
  frame = requestAnimationFrame(tick);

  // Also trigger hearts burst
  const heroHearts = document.getElementById('heartsContainer');
  const emojis = ['🎂','🎉','💕','🎊','💖','🌸','✨'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'floating-heart';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        position:fixed;
        left:${Math.random()*100}%;
        bottom:0;
        font-size:${Math.random()*2+1}rem;
        animation-duration:${Math.random()*4+3}s;
        --drift:${(Math.random()-0.5)*200}px;
        z-index:9998;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 8000);
    }, i * 150);
  }
};

// ===== 6. PARALLAX HERO =====
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.transform = `translateY(${scrolled * 0.35}px)`;
    hero.style.opacity = Math.max(0, 1 - scrolled / 500);
  }
}, { passive: true });

// ===== 7. RESIZE CANVAS =====
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confettiCanvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

// ===== 8. LOVE CURSOR TRAIL =====
(function cursorTrail() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip mobile
  const hearts = ['💕','💖','✨','🌸'];
  document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.92) {
      const el = document.createElement('div');
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.cssText = `
        position:fixed;
        left:${e.clientX}px;
        top:${e.clientY}px;
        font-size:${Math.random()*0.8+0.5}rem;
        pointer-events:none;
        z-index:9997;
        animation: cursorFade 1s ease forwards;
        transform:translate(-50%,-50%);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1000);
    }
  });

  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes cursorFade {
      from { opacity:1; transform:translate(-50%,-50%) scale(1); }
      to   { opacity:0; transform:translate(-50%,-150%) scale(0.5); }
    }
  `;
  document.head.appendChild(styleTag);
})();

// ===== 9. AUTO-TRIGGER CONFETTI ON LOAD (SUBTLE) =====
window.addEventListener('load', () => {
  setTimeout(() => {
    // Gentle auto confetti on page load
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f48fb1','#e91e63','#fce4ec','#c9a96e','#fff0f5'];
    const p = [];
    for (let i = 0; i < 60; i++) {
      p.push({
        x: Math.random() * canvas.width,
        y: -20,
        r: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 1.5,
        opacity: 1
      });
    }

    let frames = 0;
    const maxFrames = 180;
    function drawInitial() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      p.forEach(pt => {
        pt.x += pt.vx; pt.y += pt.vy;
        if (frames > maxFrames * 0.6) pt.opacity = Math.max(0, 1 - (frames - maxFrames*0.6)/(maxFrames*0.4));
        ctx.save();
        ctx.globalAlpha = pt.opacity;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.fill();
        ctx.restore();
      });
      frames++;
      if (frames < maxFrames) requestAnimationFrame(drawInitial);
      else { canvas.style.display = 'none'; ctx.clearRect(0, 0, canvas.width, canvas.height); }
    }
    requestAnimationFrame(drawInitial);
  }, 800);
});

// ===== 10. BEAUTY SEARCH INTERACTION =====
document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('showBtn');
  const retryBtn = document.getElementById('retryBtn');
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const resultState = document.getElementById('resultState');

  if (showBtn) {
    showBtn.addEventListener('click', () => {
      showBtn.classList.add('hidden');
      loadingState.classList.remove('hidden');

      setTimeout(() => {
        loadingState.classList.add('hidden');
        errorState.classList.remove('hidden');
      }, 2000);
    });
  }

  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      errorState.classList.add('hidden');
      loadingState.classList.remove('hidden');

      setTimeout(() => {
        loadingState.classList.add('hidden');
        resultState.classList.remove('hidden');
        // Trigger some confetti too!
        if (window.launchConfetti) window.launchConfetti();
      }, 1500);
    });
  }

  // ===== 11. LOAD MORE REASONS =====
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const reasonsGrid = document.getElementById('reasonsGrid');
  const finalNote = document.getElementById('finalNote');

  if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', async () => {
      seeMoreBtn.textContent = "Loading more magic...";
      seeMoreBtn.classList.add('loading');

      const renderReasons = (reasonsList) => {
        if (!reasonsList || !Array.isArray(reasonsList)) return false;

        const extraReasons = reasonsList.slice(3);
        extraReasons.forEach((item, index) => {
          const card = document.createElement('div');
          card.className = 'reason-card';
          card.setAttribute('data-animate', '');

          const icon = item.emoji || ['💖', '✨', '🌸', '🌷', '💘', '💕', '🧸', '🍭', '🦋', '🎀'][Math.floor(Math.random() * 10)];

          card.innerHTML = `
            <span class="reason-icon">${icon}</span>
            <p>${item.reason || ''}</p>
          `;

          if (reasonsGrid) reasonsGrid.appendChild(card);
          card.dataset.delay = (index % 3) * 0.15;
          if (scrollObserver && typeof scrollObserver.observe === 'function') {
            scrollObserver.observe(card);
          } else {
            card.classList.add('visible');
          }
        });

        if (seeMoreBtn.parentElement) {
          seeMoreBtn.parentElement.classList.add('hidden');
        }

        setTimeout(() => {
          if (finalNote) {
            finalNote.classList.add('visible');
            if (scrollObserver && typeof scrollObserver.observe === 'function') {
              scrollObserver.observe(finalNote);
            } else {
              finalNote.classList.add('visible');
            }
          }
        }, 1000);

        return true;
      };

      try {
        let reasons = (typeof window !== 'undefined' && window.REASONS_DATA) ||
                      (typeof globalThis !== 'undefined' && globalThis.REASONS_DATA) ||
                      (typeof self !== 'undefined' && self.REASONS_DATA) ||
                      (typeof REASONS_DATA !== 'undefined' ? REASONS_DATA : null);

        // Fallback to fetch only if offline/embedded data wasn't found
        if (!reasons || !Array.isArray(reasons) || reasons.length === 0) {
          try {
            const response = await fetch('files/reasons.json');
            if (response.ok) {
              reasons = await response.json();
            }
          } catch (fetchErr) {
            console.warn("Fetch failed (offline mode):", fetchErr);
          }
        }

        if (reasons && Array.isArray(reasons) && reasons.length > 0) {
          renderReasons(reasons);
        } else {
          throw new Error("No reasons data available offline");
        }

      } catch (error) {
        console.error("Error loading reasons:", error);
        const fallbackReasons = (typeof window !== 'undefined' && window.REASONS_DATA) || null;
        if (fallbackReasons && renderReasons(fallbackReasons)) {
          console.log("Successfully recovered using fallback reasons.");
        } else {
          seeMoreBtn.textContent = "Try Again";
          seeMoreBtn.classList.remove('loading');
        }
      }
    });
  }
});
