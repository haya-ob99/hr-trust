const brgureIcon = document.querySelector(".icon-burger");
const navLinksPhone = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");
const closeNav = document.querySelector(".close-nav");
const navLinks = document.querySelectorAll(".nav-links a");

document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
})

//  Toggle Mobile Navbar 
function toggleMobileMenu() {
  navLinksPhone.classList.toggle("showMobileNav");
  overlay.classList.toggle("active-overlay");
}
brgureIcon.addEventListener("click", toggleMobileMenu);
closeNav.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksPhone.classList.remove("showMobileNav");
    overlay.classList.remove("active-overlay");
  });
});


// Active Links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const currentURL = window.location.href;

  links.forEach(link => {
    if (currentURL.includes(link.href)) {
      link.parentElement.classList.add("active");
    }
  });
});

//  Body Animation On Load
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

// Animation On Scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden, .hidden-to-top, .hidden-left, .hidden-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
});


// Contact Tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const forms = document.querySelectorAll(".form-tab");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      forms.forEach((form) => {
        form.classList.remove("active");
      });

      const tabId = this.getAttribute("data-tab");
      const activeForm = document.getElementById(tabId);

      setTimeout(() => {
        activeForm.classList.add("active");
      }, 50);
    });
  });
});


// Select Options
document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((customSelect) => {
    const selectHeader = customSelect.querySelector(".select-header");
    const selectHeaderContent = selectHeader.querySelector("span");
    const selectOptions = customSelect.querySelector(".select-options");

    selectHeader.addEventListener("click", () => {
      const isOpen = selectOptions.style.display === "block";

      document.querySelectorAll(".custom-select .select-options").forEach((options) => {
        options.style.display = "none";
      });

      if (!isOpen) {
        selectOptions.style.display = "block";
        customSelect.classList.add("open");
      } else {
        selectOptions.style.display = "none";
        customSelect.classList.remove("open");
      }
    });

    selectOptions.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        selectHeaderContent.textContent = event.target.textContent;
        selectOptions.style.display = "none";
        customSelect.classList.remove("open");

        document.querySelectorAll(".select-options li").forEach(li => li.classList.remove("selected"));
        event.target.classList.add("selected");
      }
    });

    document.addEventListener("click", (event) => {
      if (!customSelect.contains(event.target)) {
        selectOptions.style.display = "none";
        customSelect.classList.remove("open");
      }
    });
  });
});

// Counter - Statistics
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        counters.forEach((counter) => {
          let target = +counter.getAttribute("data-target");
          let count = 0;
          let speed = target / 50;

          let updateCounter = setInterval(() => {
            count += Math.ceil(speed);
            counter.textContent = count;

            if (count >= target) {
              counter.textContent = target;
              clearInterval(updateCounter);
            }
          }, 30);
        });
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector("#statistics"));
});
// Flip Card
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach((card) => {
    const readMore = card.querySelector(".read-more");
    const readLess = card.querySelector(".read-less");

    readMore.addEventListener("click", function () {
      card.classList.add("flipped");
    });

    readLess.addEventListener("click", function () {
      card.classList.remove("flipped");
    });
  });
});

// Hover Services Cards
document.querySelectorAll(".card").forEach((card, index) => {
  const iconImg = card.querySelector("img");

  const defaultSrc = iconImg.getAttribute("src");
  const activeSrc = defaultSrc.replace("service-icon", "service-active-icon");

  card.addEventListener("mouseenter", () => {
    iconImg.setAttribute("src", activeSrc);
  });

  card.addEventListener("mouseleave", () => {
    iconImg.setAttribute("src", defaultSrc);
  });
});
// Navbar Home On Scroll
window.addEventListener("scroll", function () {
  const navHome = document.querySelector(".nav-home");
  const logo = document.querySelector(".navbar .home-logo");

  if (window.scrollY > 50) {
    navHome.classList.add("scrolled");
    logo.src = "./assets/images/logo.svg";
  } else {
    navHome.classList.remove("scrolled");
    logo.src = "./assets/images/home-logo.svg";
  }
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
