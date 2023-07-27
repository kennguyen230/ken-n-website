// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             document.querySelector(".project-section-title").classList.add("fadeInTop");
//             document.querySelector(".line").classList.add("animate-line");
//             document.querySelector(".outer-gif").classList.add("fadeInLeft");
//             document.querySelector(".outer-info").classList.add("fadeInRight");
//         } else {
//             document.querySelector(".project-section-title").classList.remove("fadeInTop");
//             document.querySelector(".line").classList.remove("animate-line");
//             document.querySelector(".outer-gif").classList.remove("fadeInLeft");
//             document.querySelector(".outer-info").classList.remove("fadeInRight");
//         }
//     })
// })
// // observer.observe(document.querySelector(".sdzoo"));
// observer.observe(document.querySelector(".tunnelman"));

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

const covidObserver = new IntersectionObserver(handleSectionAnimation);
tunnelmanObserver.observe(document.querySelector("#covid19-section"));

const codeBrownObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#codebrown-section"));

const youtubeObserver = new IntersectionObserver(handleSectionAnimation);
sdzooObserver.observe(document.querySelector("#youtube-section"));
