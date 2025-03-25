window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const activeTab = urlParams.get("tab") || "consulting";
  setActiveTab(activeTab);
});

function setActiveTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const heroImage = document.querySelector(".hero-section .service-hero");
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");

  if (
    !tabs.length ||
    !tabContents.length ||
    !heroImage ||
    !heroTitle ||
    !heroDescription
  ) {
    return;
  }

  const heroContent = {
    consulting: {
      image: "./assets/images/hero-service4.webp",
      title: "Expert HR Consulting Solutions",
      description:
        "At HR-Trust, we provide strategic HR consulting solutions designed to optimize workforce performance, talent management, and organizational growth.",
    },
    "executive-search": {
      image: "./assets/images/hero-service3.webp",
      title: "Pioneering Executive Search",
      description:
        "At HR-Trust, we follow a structured and strategic executive search process to ensure that organizations find the best leadership talent to drive success.",
    },
    coaching: {
      image: "./assets/images/hero-service2.webp",
      title: "Unlock Your Leadership Potential with Executive Coaching",
      description:
        "At HR-Trust, we empower leaders to thrive with transformative executive coaching that sharpens skills, accelerates careers, and drives results.",
    },
    training: {
      image: "./assets/images/hero-service1.webp",
      title: "Expert Training For Professionals",
      description:
        "We believe that continuous learning and skill development are key to organizational success.",
    },
  };

  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");

    const icon = tab.querySelector(".icon img");
    if (icon) {
      icon.src = tab.getAttribute("data-icon");
    }
  });

  const activeTabElement = document.querySelector(`.tab[data-tab="${tabName}"]`);
  if (activeTabElement) {
    activeTabElement.classList.add("active-tab");

    const activeIcon = activeTabElement.querySelector(".icon img");
    if (activeIcon) {
      activeIcon.src = activeTabElement.getAttribute("data-icon-active");
    }
  }

  tabContents.forEach((content) => {
    content.classList.remove("active-content");
  });

  const activeContent = document.getElementById(tabName);
  if (activeContent) {
    activeContent.classList.add("active-content");
  }

  if (heroContent[tabName]) {
    heroImage.src = heroContent[tabName].image;
    heroTitle.textContent = heroContent[tabName].title;
    heroDescription.textContent = heroContent[tabName].description;
  }
}

//  Accordion - Service 2
document.addEventListener("DOMContentLoaded", () => {
  const accordionTitles = document.querySelectorAll(".accordion-title");

  accordionTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const contentId = title.getAttribute("data-target");
      const content = document.getElementById(contentId);

      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item !== content) {
          item.classList.remove("active-content");
        }
      });

      document.querySelectorAll(".accordion-title").forEach((t) => {
        if (t !== title) {
          t.classList.remove("active-title");
        }
      });

      content.classList.toggle("active-content");
      title.classList.toggle("active-title");
    });
  });
});

// Fixed Services Tabs
document.addEventListener("DOMContentLoaded", function () {
  const servicesTabs = document.querySelector(".services-tabs");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      servicesTabs.classList.add("scrolled");
    } else {
      servicesTabs.classList.remove("scrolled");
    }
  });
});
// Consulting Accordions
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const parentItem = this.parentElement;
    const content = parentItem.querySelector(".accordion-content");

    // document.querySelectorAll(".accordion-item").forEach((item) => {
    //   if (item !== parentItem) {
    //     item.classList.remove("active");
    //   }
    // });

    if (!parentItem.classList.contains("active")) {
      parentItem.classList.add("active");
    } else {
      parentItem.classList.remove("active");
    }
  });
});
// Change Icon - Consultin Cards
document.querySelectorAll(".card").forEach((card) => {
  const img = card.querySelector(".card-icon img");
  const originalSrc = img.src;
  const hoverSrc = originalSrc.replace(".svg", "-hover.svg");

  card.addEventListener("mouseenter", () => {
    img.src = hoverSrc;
  });

  card.addEventListener("mouseleave", () => {
    img.src = originalSrc;
  });
});
