// Project info animation
function handleSectionAnimation(entries, observer) {
    entries.forEach(entry => {
        let viewportSize = window.matchMedia("(max-width:700px)")
        const titleElement = entry.target.querySelector(".project-section-title");
        const lineElement = entry.target.querySelector(".line");
        const gifElement = entry.target.querySelector(".animate-gif");
        const infoElement = entry.target.querySelector(".animate-info");

        let gifCard = document.querySelector(".GIF-card")
        let bigGifCard = document.querySelector(".bigger-GIF-card")
        let goalsAndFeatures = document.querySelector(".features-goals-flex-box")

        // console.log(viewportSize);
        if (viewportSize.matches) {
            gifCard.removeAttribute("data-tilt-startX")
            bigGifCard.removeAttribute("data-tilt-startX")
            goalsAndFeatures.removeAttribute("data-tilt-startX")
            
            if (entry.isIntersecting) {
                titleElement.classList.add("fadeInTop");
                lineElement.classList.add("animate-line");
                gifElement.classList.add("fadeInTop");
                infoElement.classList.add("fadeInTop");
            } else {
                titleElement.classList.remove("fadeInTop");
                lineElement.classList.remove("animate-line");
                gifElement.classList.remove("fadeInTop");
                infoElement.classList.remove("fadeInTop");
            }
        } else {
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
        }
    })
}

const portfolioObserver = new IntersectionObserver(handleSectionAnimation);
portfolioObserver.observe(document.querySelector("#portfolio-section"));

const youtubeObserver = new IntersectionObserver(handleSectionAnimation);
youtubeObserver.observe(document.querySelector("#youtube-section"));

const sdzooObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#sdzoo-section"));

const codeBrownObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#codebrown-section"));

const tunnelmanObserver = new IntersectionObserver(handleSectionAnimation);
tunnelmanObserver.observe(document.querySelector("#tunnelman-section"));


// Back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
