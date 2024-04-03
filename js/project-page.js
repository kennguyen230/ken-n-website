// Project info animation
function handleSectionAnimation(entries, observer) {
    entries.forEach(entry => {
        let viewportSize = window.matchMedia("(max-width:700px)")
        const titleElement = entry.target.querySelector(".project-section-title");
        const lineElement = entry.target.querySelector(".line");
        const gifElement = entry.target.querySelector(".animate-gif");
        const infoElement = entry.target.querySelector(".animate-info");

        if (viewportSize.matches) {

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

// function base(gifCard, bigGifCard, goalsAndFeatures) {
//     console.log("base")
//     removeMove(gifCard, bigGifCard, goalsAndFeatures)
//     removeTilt(gifCard, bigGifCard, goalsAndFeatures)
//     removeTilt(gifCard, bigGifCard, goalsAndFeatures)
//     removeMove(gifCard, bigGifCard, goalsAndFeatures)
// }

// function removeTilt(gifCard, bigGifCard, goalsAndFeatures) {
//     console.log("Remove tilt")
//     gifCard.vanillaTilt.destroy()
//     bigGifCard.vanillaTilt.destroy()
//     goalsAndFeatures.vanillaTilt.destroy()
// }

// function removeMove(gifCard, bigGifCard, goalsAndFeatures) {
//     console.log("Remove move")
//     VanillaTilt.init(gifCard)
//     VanillaTilt.init(bigGifCard)
//     VanillaTilt.init(goalsAndFeatures)

//     gifCard.removeAttribute("data-tilt-startX")
//     bigGifCard.removeAttribute("data-tilt-startX")
//     goalsAndFeatures.removeAttribute("data-tilt-startX")
// }

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -600px 0px"
};

const sectionObserver = new IntersectionObserver(handleSectionAnimation, appearOptions);
sectionObserver.observe(document.querySelector("#leaguenem-section"));
sectionObserver.observe(document.querySelector("#portfolio-section"));
sectionObserver.observe(document.querySelector("#youtube-section"));
sectionObserver.observe(document.querySelector("#sdzoo-section"));
sectionObserver.observe(document.querySelector("#codebrown-section"));
sectionObserver.observe(document.querySelector("#tunnelman-section"));

// Back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
