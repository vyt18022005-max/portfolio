/* =========================================================
   TRẦN NGUYỄN HOÀNG VY
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    /* =====================================================
       PROJECT 01
    ===================================================== */

    "01": {

        number: "01",

        type: "VIDEO EDITING",

        title: "VIDEO<br>TRUYỀN THÔNG",

        description:
            "Dựng và biên tập các video truyền thông, Intro, Kick-off và video cung cấp thông tin.",

        videos: [
    {
        file: "Videos/video01.mp4",
        title: "Video truyền thông 01",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video02.mp4",
        title: "Video truyền thông 02",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video03.mp4",
        title: "Video truyền thông 03",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video04.mp4",
        title: "Video truyền thông 04",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video05.mp4",
        title: "Video truyền thông 05",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video06.mp4",
        title: "Video truyền thông 06",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video07.mp4",
        title: "Video truyền thông 07",
        description: "Video truyền thông và cung cấp thông tin."
    },
    {
        file: "Videos/video08.mp4",
        title: "Video truyền thông 08",
        description: "Video truyền thông và cung cấp thông tin."
    },
 
]

    },


    /* =====================================================
       PROJECT 02
    ===================================================== */

    "02": {

        number: "02",

        type: "EVENT MEDIA",

        title: "VIDEO<br>RECAP",

        description:
            "Sản xuất và dựng video recap cho Career Bootcamp, Career Talk, Livestream và Internship Week.",

        videos: [

            {
                file: "Videos/video09.mp4",

                title: "CaseStudy Recap",

                description:
                    "Video recap chương trình CaseStudy Lab"
            },

            {
                file: "Videos/video10.mp4",

                title: "Storytelling Recap",

                description:
                    "Video recap chương trình Storytelling."
            },

            {
                file: "Videos/video11.mp4",

                title: "Mentoring Recap",

                description:
                    "Video tổng kết Mentoring."
            }

        ]

    },


    /* =====================================================
       PROJECT 03
    ===================================================== */

    "03": {

        number: "03",

        type: "AI / CAREER",

        title: "AI<br>PHÂN TÍCH CV",

        description:
            "Tham gia dựng và biên tập chính 03 video truyền thông cho chương trình AI Phân tích CV.",

        videos: [

            {
                file: "Videos/video12.mp4",

                title: "AI Phân tích CV 01",

                description:
                    "Video truyền thông cho chương trình AI Phân tích CV."
            },

            {
                file: "Videos/video13.mp4",

                title: "AI Phân tích CV 02",

                description:
                    "Video truyền thông và giới thiệu tính năng của AI Phân tích CV."
            },

            {
                file: "Videos/video14.mp4",

                title: "AI Phân tích CV 03",

                description:
                    "Intro cho chương trình AI Phân tích CV."
            }

        ]

    },


    /* =====================================================
       PROJECT 04
    ===================================================== */

    "04": {

        number: "04",

        type: "CONTENT CREATION",

        title: "CAPCUT<br>CREATOR",

        description:
            "Sáng tạo và biên tập nội dung video ngắn trên CapCut, phát triển tài khoản đạt hơn 5.000 người theo dõi và 24 triệu lượt tiếp cận.",

        videos: [

            {
                file: "Videos/video15.mp4",

                title: "CapCut Template 01",

             description: "Sáng tạo template theo xu hướng mạng xã hội, tập trung vào hình ảnh và chuyển động để tăng khả năng thu hút người xem."
            },

            {
                file: "Videos/video16.mp4",

                title: "CapCut Template 02",

                description: "Thiết kế và ứng dụng keyframe trên CapCut để tạo chuyển động mượt mà, tăng tính thu hút cho video."
            },

            {
                file: "Videos/video17.mp4",

               title: "CapCut Template 03",

           description: "Sản xuất nội dung ngắn theo xu hướng, kết hợp hình ảnh, âm thanh và nhịp dựng phù hợp với hành vi người xem."
            },

           

        ]

    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const portfolioPage =
    document.getElementById(
        "portfolioPage"
    );


const projectPage =
    document.getElementById(
        "projectPage"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


const detailNumber =
    document.getElementById(
        "detailNumber"
    );


const detailType =
    document.getElementById(
        "detailType"
    );


const detailTitle =
    document.getElementById(
        "detailTitle"
    );


const detailDescription =
    document.getElementById(
        "detailDescription"
    );


const videoGrid =
    document.getElementById(
        "videoGrid"
    );


const backToPortfolio =
    document.getElementById(
        "backToPortfolio"
    );


const backToPortfolioBottom =
    document.getElementById(
        "backToPortfolioBottom"
    );


/* =========================================================
   CREATE VIDEO CARD
========================================================= */

function createVideoCard(video, index) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "video-card";


    card.innerHTML = `

        <div class="video-wrapper">

            <video
                controls
                playsinline
                preload="metadata"
            >

                <source
                    src="${video.file}"
                    type="video/mp4"
                >

                Trình duyệt của bạn
                không hỗ trợ phát video này.

            </video>


            <div class="video-error">

                <div>

                    <strong>
                        Không thể hiển thị video
                    </strong>

                    <br><br>

                    File đã được tìm thấy
                    nhưng trình duyệt không thể
                    giải mã video này.

                    <br><br>

                    Hãy kiểm tra định dạng
                    MP4 / H.264.

                </div>

            </div>

        </div>


        <div class="video-card-info">

            <span>
                VIDEO ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
                ${video.title}
            </h3>

            <p>
                ${video.description}
            </p>

        </div>

    `;


    const videoElement =
        card.querySelector(
            "video"
        );


    const errorElement =
        card.querySelector(
            ".video-error"
        );


    /* =====================================================
       VIDEO ERROR
    ===================================================== */

    videoElement.addEventListener(
        "error",
        function() {

            errorElement.classList.add(
                "show"
            );


            console.error(
                "Không thể phát video:",
                video.file
            );

        }
    );


    /* =====================================================
       VIDEO METADATA
    ===================================================== */

    videoElement.addEventListener(
        "loadedmetadata",
        function() {

            console.log(
                "Video:",
                video.file
            );


            console.log(
                "Width:",
                videoElement.videoWidth
            );


            console.log(
                "Height:",
                videoElement.videoHeight
            );


            /* VIDEO DỌC */

            if (
                videoElement.videoHeight >
                videoElement.videoWidth
            ) {

                videoElement.classList.add(
                    "portrait-video"
                );

            }

        }
    );


    return card;
}


/* =========================================================
   RENDER VIDEOS
========================================================= */

function renderVideos(project) {

    videoGrid.innerHTML = "";


    if (
        !project.videos ||
        project.videos.length === 0
    ) {

        videoGrid.innerHTML = `

            <div
                style="
                    grid-column: 1 / -1;
                    padding: 70px 20px;
                    text-align: center;
                    color: #ffffff;
                "
            >

                Chưa có video
                cho dự án này.

            </div>

        `;


        return;
    }


    project.videos.forEach(
        function(video, index) {

            const card =
                createVideoCard(
                    video,
                    index
                );


            videoGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectId) {

    const project =
        projects[projectId];


    if (!project) {

        console.error(
            "Không tìm thấy project:",
            projectId
        );

        return;

    }


    /* Cập nhật thông tin */

    detailNumber.textContent =
        project.number;


    detailType.textContent =
        project.type;


    detailTitle.innerHTML =
        project.title;


    detailDescription.textContent =
        project.description;


    /* Hiển thị video */

    renderVideos(
        project
    );


    /* Ẩn portfolio */

    portfolioPage.style.display =
        "none";


    /* Hiện trang project */

    projectPage.classList.add(
        "active"
    );


    /* Đổi background */

    document.body.style.background =
        "#182b45";


    /* URL */

    history.pushState(
        null,
        "",
        "#project-" + projectId
    );


    /* Scroll lên đầu */

    window.scrollTo(
        0,
        0
    );

}


/* =========================================================
   PROJECT CLICK
========================================================= */

projectCards.forEach(
    function(card) {

        card.addEventListener(
            "click",
            function() {

                const projectId =
                    card.dataset.project;


                openProject(
                    projectId
                );

            }
        );

    }
);


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    /* Ẩn project */

    projectPage.classList.remove(
        "active"
    );


    /* Hiện portfolio */

    portfolioPage.style.display =
        "block";


    /* Background */

    document.body.style.background =
        "#182b45";


    /* URL */

    history.pushState(
        null,
        "",
        "#projects"
    );


    /* Scroll về portfolio */

    setTimeout(
        function() {

            const projectsSection =
                document.getElementById(
                    "projects"
                );


            if (projectsSection) {

                projectsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        },
        50
    );

}


/* =========================================================
   BACK BUTTONS
========================================================= */

if (backToPortfolio) {

    backToPortfolio.addEventListener(
        "click",
        closeProject
    );

}


if (backToPortfolioBottom) {

    backToPortfolioBottom.addEventListener(
        "click",
        closeProject
    );

}


/* =========================================================
   OPEN PROJECT FROM URL
========================================================= */

function openProjectFromURL(projectId) {

    const project =
        projects[projectId];


    if (!project) {

        return;

    }


    detailNumber.textContent =
        project.number;


    detailType.textContent =
        project.type;


    detailTitle.innerHTML =
        project.title;


    detailDescription.textContent =
        project.description;


    renderVideos(
        project
    );


    portfolioPage.style.display =
        "none";


    projectPage.classList.add(
        "active"
    );


    document.body.style.background =
        "#182b45";


    window.scrollTo(
        0,
        0
    );

}


/* =========================================================
   CHECK URL
========================================================= */

function checkURL() {

    const hash =
        window.location.hash;


    if (
        hash.startsWith(
            "#project-"
        )
    ) {

        const projectId =
            hash.replace(
                "#project-",
                ""
            );


        openProjectFromURL(
            projectId
        );

    }

}


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener(
    "popstate",
    function() {

        if (
            window.location.hash
                .startsWith(
                    "#project-"
                )
        ) {

            checkURL();

        }
        else {

            projectPage.classList.remove(
                "active"
            );


            portfolioPage.style.display =
                "block";


            document.body.style.background =
                "#182b45";

        }

    }
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#" ||
                        targetId.startsWith(
                            "#project-"
                        )
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        }
    );


/* =========================================================
   SCROLL REVEAL
========================================================= */

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


sections.forEach(
    function(section) {

        observer.observe(
            section
        );

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            projectPage.classList.contains(
                "active"
            )
        ) {

            closeProject();

        }

    }
);


/* =========================================================
   START
========================================================= */

window.addEventListener(
    "load",
    function() {

        checkURL();

    }
);


/* =========================================================
   DEBUG IMAGE
========================================================= */

document
    .querySelectorAll(
        "img"
    )
    .forEach(
        function(image) {

            image.addEventListener(
                "error",
                function() {

                    console.warn(
                        "Không tìm thấy ảnh:",
                        this.src
                    );

                }
            );

        }
    );


console.log(
    "Portfolio của Trần Nguyễn Hoàng Vy đã sẵn sàng."
);