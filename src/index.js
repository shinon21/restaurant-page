import { createHome } from "./home";
import { createMenu } from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const home = createHome();
const menu = createMenu();

const switchContent = (newContent) => {
    content.replaceChildren();
    content.append(newContent);
}

switchContent(menu);