// Project info animation
function handleSectionAnimation(entries, observer) {
    entries.forEach(entry => {
        const titleElement = entry.target.querySelector(".project-section-title");
        const lineElement = entry.target.querySelector(".line");
        const gifElement = entry.target.querySelector(".outer-gif");
        const infoElement = entry.target.querySelector(".outer-info");

        if (entry.isIntersecting) {
            titleElement.classList.add("fadeInTop");
            lineElement.classList.add("animate-line");
            gifElement.classList.add("fadeInLeft");
            infoElement.classList.add("fadeInRight");
        } else {
            titleElement.classList.remove("fadeInTop");
            lineElement.classList.remove("animate-line");
            gifElement.classList.remove("fadeInLeft");
            infoElement.classList.remove("fadeInRight");
        }
    })
}

const tunnelmanObserver = new IntersectionObserver(handleSectionAnimation);
tunnelmanObserver.observe(document.querySelector("#tunnelman-section"));

const sdzooObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#sdzoo-section"));

const codeBrownObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#codebrown-section"));

const portfolioObserver = new IntersectionObserver(handleSectionAnimation);
tunnelmanObserver.observe(document.querySelector("#portfolio-section"));

const youtubeObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#youtube-section"));


// Back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})