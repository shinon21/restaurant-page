import { createElement } from "./dom";
import image from "./assets/about.webp";

const createAbout = () => {
    const main = createElement("main", "", { class: "about" });
    const heading = createElement("h2", "About");
    const banner = createElement("img", "", { src: image });
    const firstP = createElement("p", "This is a simple website made with Webpack and ES6 modules. The idea was to learn how to configure Webpack to handle different type of assets.");
    const secondP = createElement("p", "I made it based on Sword Art Online, my favorite anime. All the images here are not my property and the credit goes to their respective authors.");
    main.append(heading, banner, firstP, secondP);
    return main;
}

export { createAbout }