/* =====================================
   APHOTECH SOLAR – MAIN JAVASCRIPT
   ===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========= SMOOTH SCROLL ========= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ========= SCROLL REVEAL ========= */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealOnScroll.observe(el));

  /* ========= PROJECT LIGHTBOX ========= */
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector("img") : null;
  const projectImages = document.querySelectorAll(".project-img");

  projectImages.forEach(img => {
    img.addEventListener("click", () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  /* ========= BUTTON CLICK FEEDBACK ========= */
  document.querySelectorAll(".btn, .package-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 150);
    });
  });

});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
