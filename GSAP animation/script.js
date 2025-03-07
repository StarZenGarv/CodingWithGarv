let xprev = 0;

document.querySelectorAll('.elem').forEach(elem => {
    elem.addEventListener("mousemove", (dets) => {
        let diffrot = dets.clientX - xprev;
        xprev = dets.clientX;

        let rect = elem.getBoundingClientRect();

        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: "power3",
            left: dets.clientX - rect.left - 55,  
            top: dets.clientY - rect.top - 55,    

            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });

    elem.addEventListener("mouseleave", () => {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            ease: "power3",
        });
    });
});
