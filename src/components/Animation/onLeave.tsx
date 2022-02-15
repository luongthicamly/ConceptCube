import { gsap } from "gsap";
const onLeave = (origin: any, destination: any, direction: any) => {
    switch (destination.index) {
        case 0:
            gsap.to(".second-page-container", { visibility: "hidden" });
            gsap.from(".title-page-one", {
                autoAlpha: 0,
                y: -780,
                duration: 1.7,
                ease: "power4.out",
                delay: 0.5,
            });
            gsap.from(".about-text", {
                autoAlpha: 0,
                y: -780,
                duration: 1.7,
                ease: "power4.out",
                delay: 0.5,
            });
            gsap.from(".company", {
                autoAlpha: 0,
                x: -500,
                duration: 2,
                delay: 0.5,
                ease: "power4.out",
            });
            gsap.to(".maxius-logo", { color: "#222222" })
            break;
        case 1:
            gsap.to(".title-page-one", { visibility: "hidden" });
            gsap.to(".subTitle", { visibility: "hidden" });
            gsap.to(".note-page-one", { visibility: "hidden" });
            gsap.to(".page-three-content", { visibility: "hidden" });
            gsap.to(".title_fourth", { visibility: "hidden", duration: 1, ease: "power4.out", });
            break;
        case 2:
            gsap.to(".second-page-container", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".fourth-container", { visibility: "hidden", duration: 1, ease: "power4.out", delay: 0.5 });
            break;
        case 3:
            gsap.to(".page-three-content", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".title_fourth", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".fifth-wrapper", { visibility: "hidden", duration: 1, ease: "power4.out", });
            break;
        case 4:
            gsap.to(".fourth-container", { visibility: "hidden", duration: 1, ease: "power4.out", delay: .5 });
    }
};
export default onLeave;
