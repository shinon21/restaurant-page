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
    },
    "Ragout Rabbit Stew": {
        description: "A dish reserved for the most fortunate of players, our S-class Ragout Rabbit Stew is the pinnacle of fine dining in Aincrad. Made from the rarest rabbit meat, slow-cooked in a rich, savory broth with farm-fresh vegetables and fragrant herbs, this stew delivers an unparalleled depth of flavor. Every spoonful melts in your mouth, warming your soul and preparing you for the battles ahead. A meal fit for the strongest warriors!",
        price: "2,500 Cor",
        image: rabbit
    },
    "Shrimp and Potato Okonomiyaki": {
        description: "Aincrad’s finest okonomiyaki, expertly prepared with a crispy golden crust and a soft, flavorful center. This savory pancake is packed with succulent shrimp, perfectly seasoned potatoes, and a special blend of in-game spices, then topped with a generous drizzle of tangy sauce and creamy aioli. Whether you’re feasting solo or sharing with a party, this dish brings the taste of home-cooked comfort to the virtual world.",
        price: "850 Cor",
        image: okonomiyaki
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