import { gsap } from "gsap";

const afterLoad = (origin: any, destination: any, direction: any) => {

    switch (destination.index) {
        case 1:
            gsap.from(".second-page-container", {
                autoAlpha: 0,
            });
            gsap.from(".second-page-content", {
                autoAlpha: 0,
                x: -420,
                duration: 1,
                ease: "power4.out",
                delay: 0.3,
            });
            break;
        case 2:
            gsap.from(".page-three-content", {
                autoAlpha: 0,
                // y: -220,
                // duration: 1.3,
                // ease: "power4.out",
            });
            gsap.from(".item-gamme-development", {
                autoAlpha: 0,
                x: -420,
                duration: 0.7,
                ease: "power4.out",
            });
            gsap.from(".item-ui-design", {
                autoAlpha: 0,
                x: 420,
                duration: 0.7,
                ease: "power4.out",
                delay: 0.3,
            });
            gsap.from(".item-si", {
                autoAlpha: 0,
                x: 420,
                duration: 0.7,
                ease: "power4.out",
                delay: 0.6,
            });
            gsap.from(".item-game-marketing", {
                autoAlpha: 0,
                x: 420,
                duration: 0.7,
                ease: "power4.out",
                delay: 0.9,
            });
            break;
        case 3:
            gsap.from(".fourth-container", {
                autoAlpha: 0,
            });
            gsap.from(".fourth-title", {
                autoAlpha: 0,
                y: -220,
                duration: 1,
                ease: "power4.out",
            });
            gsap.from(".list-history", {
                autoAlpha: 0,
                x: -420,
                duration: 1,
                ease: "power4.out",
                delay: 0.3,
            });
            break;
        case 4:
            gsap.from(".fifth-wrapper", {
                autoAlpha: 0,
            });
            gsap.from(".fifth-title",{
                autoAlpha: 0,
                x: 220,
                duration: 1,
                ease: "power4.out",
            })
            gsap.from(".fifth-name", {
                autoAlpha: 0,
                x: -220,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
            });
            gsap.from(".fifth-contact", {
                autoAlpha: 0,
                y: -50,
                stagger: 0.1,
                duration: 2,
                ease: "power4.out",
                delay: .2,
            });
            
            break;
    }
};
export default afterLoad;
