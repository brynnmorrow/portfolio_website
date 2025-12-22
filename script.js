function loopTypewriter(el, text, typeMs = 85, pauseMs = 1200, eraseMs = 35) {
    let i = 0, dir = 1;
    function tick() {
      el.textContent = text.slice(0, i);
      if (dir === 1 && i < text.length) {
        i++; setTimeout(tick, typeMs);
      } else if (dir === 1) {
        dir = -1; setTimeout(tick, pauseMs);
      } else if (dir === -1 && i > 0) {
        i--; setTimeout(tick, eraseMs);
      } else {
        dir = 1; setTimeout(tick, 500);
      }
    }
    tick();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("typeTarget");
    if (el) {
      loopTypewriter(el, "Hello, I'm Brynn Morrow...");
    }
  
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
  