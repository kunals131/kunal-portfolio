
import gsap, { Power4 } from 'gsap';

export const dropMenuAnimation = (
  menuClass: string,
  state: boolean = false,
  height:number|string = 200
): void => {
  if (state) {
    const tl = gsap.timeline();
    tl.to(menuClass, {
      duration: 0.15,
      height: height,
      ease: Power4.easeInOut,
      delay : -0.1
    });
  } else {
    const tl = gsap.timeline();
    tl.to(menuClass, {
      duration: 0.15,
      height: 0,
      ease: Power4.easeInOut,
      delay : -0.1
    });
  }
};