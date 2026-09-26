/* InfraEdge 360 — Homepage interactions (background particle canvas, counters, marquee, tabs) */

// Lightweight particle streak canvas setup
const canvas = document.getElementById('streaks');
const ctx = canvas.getContext('2d');
let w, h, particles;

function resize(){
  w = canvas.width = canvas.offsetWidth * devicePixelRatio;
  h = canvas.height = canvas.offsetHeight * devicePixelRatio;
}

function makeParticles(n){
  const arr = [];
  for(let i=0;i<n;i++){
    arr.push({
      x: Math.random()*w,
      y: Math.random()*h,
      len: (20 + Math.random()*90) * devicePixelRatio,
      speed: (0.6 + Math.random()*2.4) * devicePixelRatio,
      angle: (-0.5 + Math.random()*0.3),
      alpha: 0.08 + Math.random()*0.35,
      width: (0.6 + Math.random()*1.6) * devicePixelRatio
    });
  }
  return arr;
}

function init(){
  resize();
  particles = makeParticles(Math.floor((w*h)/38000));
}

function draw(){
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = '#000000';
  for(const p of particles){
    ctx.globalAlpha = p.alpha;
    ctx.lineWidth = p.width;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    const ex = p.x + Math.cos(p.angle)*p.len;
    const ey = p.y + Math.sin(p.angle)*p.len;
    ctx.lineTo(ex, ey);
    ctx.stroke();

    p.x += Math.cos(p.angle)*p.speed;
    p.y += Math.sin(p.angle)*p.speed;

    if(p.x < -100 || p.x > w+100 || p.y < -100 || p.y > h+100){
      p.x = Math.random()*w;
      p.y = Math.random()*h;
    }
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();

const aboutSlider = document.querySelector('.about-slider');
if (aboutSlider) {
  // Use helper to always get fresh NodeList (helps if DOM changes)
  let current = 0;
  let timer = null;

  function getSlides() { return Array.from(aboutSlider.querySelectorAll('.about-slide')); }
  function getDots() { return Array.from(aboutSlider.querySelectorAll('.about-slider-dot')); }

  function showSlide(nextIndex) {
    const slides = getSlides();
    const dots = getDots();
    if (!slides.length) return;

    current = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const active = index === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));

      if (active) {
        // Make focusable and move focus after a small delay so animation begins
        slide.setAttribute('tabindex', '-1');
        window.setTimeout(() => { try { slide.focus(); } catch(e){} }, 90);
      } else {
        slide.removeAttribute('tabindex');
      }
    });

    dots.forEach((dot, index) => {
      const active = index === current;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    timer = setInterval(() => showSlide(current + 1), 4200);
  }

  function stopAutoSlide() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Attach event listeners to dots (re-query each time to ensure up-to-date)
  function bindDotListeners(){
    const dots = getDots();
    dots.forEach((dot, index) => {
      // avoid duplicate listeners by removing and re-adding
      dot.replaceWith(dot.cloneNode(true));
    });
    // reselect after clone
    getDots().forEach((dot, index) => {
      dot.addEventListener('click', () => { showSlide(index); startAutoSlide(); });
    });
  }

  aboutSlider.addEventListener('mouseenter', stopAutoSlide);
  aboutSlider.addEventListener('mouseleave', startAutoSlide);

  // Add touch/swipe support for mobile — detect horizontal swipes
  (function(){
    let touchStartX = null;
    const threshold = 40; // px
    aboutSlider.addEventListener('touchstart', function(e){
      if (e.touches && e.touches.length === 1) touchStartX = e.touches[0].clientX;
    }, {passive:true});

    aboutSlider.addEventListener('touchend', function(e){
      if (touchStartX === null) return;
      const touchEndX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : null;
      if (touchEndX === null) { touchStartX = null; return; }
      const dx = touchEndX - touchStartX;
      if (Math.abs(dx) > threshold) {
        if (dx < 0) {
          showSlide(current + 1);
        } else {
          showSlide(current - 1);
        }
        startAutoSlide();
      }
      touchStartX = null;
    }, {passive:true});
  })();

  // initialize
  showSlide(0);
  bindDotListeners();
  startAutoSlide();
}

// ---- Portfolio reel: start CSS-driven animation when visible and populate deferred images ----
(function(){
  const container = document.querySelector('.portfolio-reel-container');
  const track = document.querySelector('.portfolio-reel-track');
  if (!container || !track) return;

  function populateDeferred(){
    try{
      const deferred = container.querySelectorAll('[data-deferred] img[data-src]');
      deferred.forEach(img => {
        if (!img.getAttribute('src')){
          img.setAttribute('src', img.getAttribute('data-src'));
          img.removeAttribute('data-src');
        }
      });
    }catch(e){/* ignore */}
  }

  function startTrack(){
    if (track.classList.contains('play')) return;
    populateDeferred();
    // give browser a frame to parse images before unpausing animation
    requestAnimationFrame(() => track.classList.add('play'));
  }

  try {
    const io = new IntersectionObserver((entries, obs) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          startTrack();
          obs.unobserve(container);
          break;
        }
      }
    }, {root:null, rootMargin:'200px', threshold:0.05});
    io.observe(container);

    // Fallback: ensure it runs after load if observer didn't trigger
    window.addEventListener('load', () => { if (track.classList.contains('play') === false) startTrack(); });
  } catch(e) {
    // If IntersectionObserver unsupported, just start animation after load
    window.addEventListener('load', startTrack);
    function ensure(){
      try{
        const r = container.getBoundingClientRect();
        if (r.top < (window.innerHeight * 1.15)) startTrack();
      }catch(e){}
    }
    ensure();
    window.addEventListener('scroll', ensure, {passive:true});
    window.addEventListener('resize', ensure);
  }

  // Best-effort immediate start for environments where load/IO timing is unreliable (preview servers)
  try{ requestAnimationFrame(startTrack); }catch(e){}
  // Extra fallback: ensure we start shortly after script runs if earlier attempts missed
  try{ setTimeout(startTrack, 200); }catch(e){}
})();

