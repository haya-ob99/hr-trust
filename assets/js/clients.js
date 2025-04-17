const allCards = document.querySelectorAll(".client-card");
const allContentData = {
    1: {
        title: "Human Resources Transformation Project for",
        companyName: "Dr Abdulaziz Alajaji",
        section: "Health (private section)",
        steps: [
            "Corporate organizational structure",
            "Compensation & benefits framework (salaries, incentives, rewards, and total remuneration packages)",
            "Performance management system",
            "Functional competencies",
            "Talent management and leadership development",
            "Executive recruitment",
            "Career development and growth"
        ],
        image: "./assets/images/client-img1.jpg",
        year: "2023 - 2024",
        duration: "12"
    },
    2: {
        title: "Human Resources Transformation Project for",
        companyName: "Leejam",
        section: "Sports (private section)",
        steps: ["Attracting Executives and Supervisors"],
        image: "./assets/images/client-img2.jpg",
        year: "2024 - 2025",
        duration: "12"
    },
    3: {
        title: "Human Resources Transformation Project for",
        companyName: "Water Transmission and technologies co.",
        section: "Desalination and water transportation (government section)",
        steps: ["Project management and performance reports (Project Plan)",
            "Developing and implementing an employee transfer readiness assessment scale",
            "Conducting planning and alignment processes (job placement)",
            "Designing the employee transition journey, including:",
            "Developing the digital platform for job offers (automating offer mechanisms)",
            "Establishing a governance, risk and compliance framework (regulations, policies, procedures, and contracts)",
            "Developing new employee orientation and support services program:"
        ],
        subSteps: [
            "Conducting an organizational culture survey and analysis",
            "Implementing change management and communication strategies, plans, and execution",
            "Developing a digital platform for job offers (automated offer mechanisms)",
            "Establishing a governance, risk, and compliance framework (including regulations, policies, procedures, and contracts)",
            "Designing a new employee orientation and support services program"
        ],
        image: "./assets/images/client-img3.jpg",
        year: "2024 - 2025",
        duration: "9"
    },
    4: {
        title: "Human Resources Transformation Project for",
        companyName: "Esnad",
        section: "Industry and mining (government section)",
        steps: [
            "Study and measurement of employee satisfaction and engagement in the regulatory section",
            "Study of benefits, incentives, rewards, and compensation packages for the regulatory section",
            "Oversight of executive talent acquisition",
            "Special Advisor to the CEO",
            "General supervision of the human capital section"
        ],
        image: "./assets/images/client-img4.png",
        year: "2023 - 2024",
        duration: "15"
    },
    5: {
        title: "Human Resources Transformation Project for",
        companyName: "Engineer Holding Group",
        section: "Investment, media, manufacturing, hospitality, and real estate (private section)",
        steps: [
            "Attraction and recruitment of talents.",
            "Executive talent acquisition."
        ],
        image: "./assets/images/service1.png",
        year: "2022",
        duration: "4"
    },
    6: {
        title: "Human Resources Transformation Project for",
        companyName: "Fuchsia & Alhasa Auto Bakery",
        section: "baked goods and sweets (private section)",
        steps: [
            "Attracting and recruiting talents.",
            "Attracting executives."
        ],
        image: "./assets/images/client-img6.jpg",
        year: "2022",
        duration: "4"
    },
    7: {
        title: "Human Resources Transformation Project for",
        companyName: "Masah",
        section: "Contracting (private section)",
        steps: [
            "Corporate organizational structure.", "Wages, Benefits, Incentives, Perks, Rewards, and Compensations", "Functional Performance Management System (Including All Related Components)", "Functional Competencies."
        ],
        image: "./assets/images/service1.png",
        year: "2023",
        duration: "6"
    },
    8: {
        title: "Human Resources Transformation Project for",
        companyName: "AgriServ",
        section: "Agriculture and services (government section)",
        steps: ["Talent Acquisition (Executives & All Organizational Levels)"],
        image: "./assets/images/client-img8.png",
        year: "2024",
        duration: "12"
    },
    9: {
        title: "Human Resources Transformation Project for",
        companyName: "CHERRY - CAR RENTAL",
        section: "Transportation and logistics services (private section)",
        steps: [
            "Institutional organizational structure.",
            "Salaries, benefits, incentives, perks, bonuses, and compensations.",
            "Performance management system and all its components.",
            "Job competencies."
        ],
        image: "./assets/images/client-img9.jpg",
        year: "2022 - 2023",
        duration: "6"
    },
    10: {
        title: "Human Resources Transformation Project for",
        companyName: "Almajdiah Residence",
        section: "Real estate (private section)",
        steps: [
            "Planning and monitoring implementation of the new strategy and corporate performance",
            "Current state assessment to establish baseline for initiatives and projects (Baseline)",
            "Corporate performance management",
            "Corporate organizational structure",
            "Wages, benefits, incentives, bonuses, perks and compensation packages",
            "Employee performance management system",
            "Functional competencies",
            "Career development and growth",
            "Roles of the Managing Director and executives"
        ],
        image: "./assets/images/client-img10.png",
        year: "2024",
        duration: "12"
    },
    11: {
        title: "Human Resources Transformation Project for",
        companyName: "MCDC",
        section: "Real estate and hotel management (public contribution)",
        steps: [
            "Corporate Organizational Structure",
            "Compensation & Benefits Framework",
            "Employee Performance Management System (Full Framework)",
            "Functional Competencies.",
            "Talent Development & Succession Planning"
        ],
        image: "./assets/images/client-img11.jpg",
        year: "2025",
        duration: "6"
    },
};

const updateContent = (content) => {
    if (content) {
        const stepsContent =
            content.steps.length === 1
                ? `<p>${content.steps[0]}</p>`
                : `<ul>${content.steps.map((step) => {
                    let subStepsHTML = '';

                    if (step === "Developing new employee orientation and support services program:" && content.subSteps) {
                        subStepsHTML = `
                            <ol>
                                ${content.subSteps.map(sub => `<li>${sub}</li>`).join("")}
                            </ol>`;
                    }

                    return `<li>${step}${subStepsHTML}</li>`;
                }).join("")}</ul>`;

        document.querySelector(".client-content").innerHTML = `
        <div class="content">
          <h2>
            ${content.title} <strong>${content.companyName}</strong>
          </h2>
          <span>Contract duration: ${content.duration} Months , Year : ${content.year}</span>
          <div class="box goal">
            <h4>Section:</h4>
            <p>${content.section}</p>
          </div>
          <div class="box steps">
            <h4>Scope of Work:</h4>
            ${stepsContent}
          </div>
        </div>
        <div class="image">
          <img src="${content.image}" alt="Project Image" />
        </div>
      `;
    }
};


allCards.forEach((card) => {
    card.addEventListener("click", () => {
        const contentId = card.getAttribute("data-content-id");
        const content = allContentData[contentId];

        updateContent(content);

        allCards.forEach((c) => c.classList.remove("client-card-active"));
        card.classList.add("client-card-active");
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const firstCard = allCards[0];
    const firstId = firstCard.getAttribute("data-content-id");
    const firstContent = allContentData[firstId];

    updateContent(firstContent);
    firstCard.classList.add("client-card-active");
});