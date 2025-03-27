import { createElement } from "./dom"

const createMenu = () => {
    const main = createElement("main", "", { class: "menu" });
    const heading = createElement("h2", "Menu");

    main.append(heading);
    return main;
}

export { createMenu }