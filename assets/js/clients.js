const contentData = {
    1: {
        title: "Human Resources Transformation Project for",
        companyName: "CHERRY - CAR RENTAL",
        goal: "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        solution:
            "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        steps: [
            "Building the organization's operating model and value chain",
            "Reviewing the current organizational structure and developing a flexible and agile structure.",
            "Developing a manpower plan and forecasting needs for three years.",
            "Creating job descriptions including responsibilities and expected results.",
            "Designing strategic and operational KPIs.",
            "Developing a competency framework.",
            "Assessing employee competencies and aligning job roles.",
            "Establishing a Project Management Office.",
        ],
        image: "./assets/images/service1.png",
    },
    2: {
        title: "Human Resources Transformation Project for2",
        companyName: "Client 2",
        goal: "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        solution:
            "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        steps: [
            "Building the organization's operating model and value chain.",
            "Reviewing the current organizational structure and developing a flexible and agile structure.",
            "Developing a manpower plan and forecasting needs for three years.",
            "Creating job descriptions including responsibilities and expected results.",
            "Designing strategic and operational KPIs.",
            "Developing a competency framework.",
            "Assessing employee competencies and aligning job roles.",
            "Establishing a Project Management Office.",
        ],
        image: "./assets/images/service1.png",
    },
    3: {
        title: "Human Resources Transformation Project for2",
        companyName: "Client 3",
        goal: "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        solution:
            "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        steps: [
            "Building the organization's operating model and value chain.",
            "Reviewing the current organizational structure and developing a flexible and agile structure.",
            "Developing a manpower plan and forecasting needs for three years.",
            "Creating job descriptions including responsibilities and expected results.",
            "Designing strategic and operational KPIs.",
            "Developing a competency framework.",
            "Assessing employee competencies and aligning job roles.",
            "Establishing a Project Management Office.",
        ],
        image: "./assets/images/service1.png",
    },
    4: {
        title: "Human Resources Transformation Project for2",
        companyName: "Client 4",
        goal: "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        solution:
            "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        steps: [
            "Building the organization's operating model and value chain.",
            "Reviewing the current organizational structure and developing a flexible and agile structure.",
            "Developing a manpower plan and forecasting needs for three years.",
            "Creating job descriptions including responsibilities and expected results.",
            "Designing strategic and operational KPIs.",
            "Developing a competency framework.",
            "Assessing employee competencies and aligning job roles.",
            "Establishing a Project Management Office.",
        ],
        image: "./assets/images/service1.png",
    },
    5: {
        title: "Human Resources Transformation Project for2",
        companyName: "Client 5",
        goal: "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        solution:
            "Lorem ipsum dolor sit amet consectetur. Tempus tortor in ac fringilla velit nisi. Molestie in id velit interdum.",
        steps: [
            "Building the organization's operating model and value chain.",
            "Reviewing the current organizational structure and developing a flexible and agile structure.",
            "Developing a manpower plan and forecasting needs for three years.",
            "Creating job descriptions including responsibilities and expected results.",
            "Designing strategic and operational KPIs.",
            "Developing a competency framework.",
            "Assessing employee competencies and aligning job roles.",
            "Establishing a Project Management Office.",
        ],
        image: "./assets/images/service1.png",
    },
};

const updateContent = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const contentId = activeSlide.getAttribute("data-content-id");
    const content = contentData[contentId];

    if (content) {
        document.querySelector(".client-content").innerHTML = `
        <div class="content">
          <h2>
            ${content.title} <strong>${content.companyName}</strong>
          </h2>
          <div class="box goal">
            <h4>Project Goal:</h4>
            <p>${content.goal}</p>
          </div>
          <div class="box solution">
            <h4>How did HR-Trust develop the solution?</h4>
            <p>${content.solution}</p>
          </div>
          <div class="box steps">
            <h4>Our Steps in resolving the issue:</h4>
            <ul>
              ${content.steps.map((step) => `<li>${step}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="image">
          <img src="${content.image}" alt="Project Image" />
        </div>
      `;
    }
};

const swiper3 = new Swiper(".mySwiper3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    on: {
        slideChange: function () {
            updateContent(this);
        },
    },
});
updateContent(swiper3);