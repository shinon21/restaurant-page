import { createElement } from "./dom"
import rabbit from "./assets/rabbit.jpg";
import okonomiyaki from "./assets/okonomiyaki.webp";
import sandwich from "./assets/sandwich.avif";

const foods = {
    "Asuna’s Homemade Sandwich":
    {
        description: "Crafted with precision and care, this gourmet sandwich features freshly baked bread, lightly toasted to perfection. Each bite is filled with crisp lettuce, juicy tomatoes, and tender slices of high-quality in-game meat, topped with a delicate spread of Asuna’s secret sauce. Whether you’re on the battlefield or taking a break in a safe zone, this sandwich offers a perfect balance of flavor and nourishment. A must-try meal for any adventurer!",
        price: "$120 Cor",
        image: sandwich
    }
}

const createMenu = () => {
    const main = createElement("main", "", { class: "menu" });
    const heading = createElement("h2", "Menu");
    main.append(heading);
    for (const food in foods) {
        main.append(createFoodItem(food));
    }
    return main;
}

const createFoodItem = (item) => {
    const article = createElement("article", "", { class: "food" });
    const heading = createElement("h3", item);
    const description = createElement("p", foods[item].description, { class: "description" });
    const price = createElement("p", foods[item].price, { class: "price" });
    const image = createElement("img", "", { src: foods[item].image });
    article.append(heading, image, description, price);

    return article;
}

export { createMenu }