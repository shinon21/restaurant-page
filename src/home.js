import { createElement } from "./dom"
import asuna from "./assets/asuna.jpg";

const createHome = () => {
    const main = createElement("main", "", { class: "home" });
    const heading = createElement("h2", "Home");
    const introduction = createElement("p",
        "Welcome to the Sword Art Online restaurant. Here you will find some dishes from the anime. I hope you like them.",
        { class: "introduction" });
    const asunaImage = createElement("img", "", { src: asuna });
    main.append(heading, introduction, asunaImage);
    return main;
}

export { createHome }