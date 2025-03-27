import { createHome } from "./home";
import { createMenu } from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const home = createHome();
const menu = createMenu();

const paths = { "home": home, "menu": menu, }

const handleNavigation = () => {
    const navButtons = document.querySelectorAll("nav button");
    for (const button of navButtons) {
        button.addEventListener("click", (e) => {
            const path = e.target.textContent.toLowerCase();
            switchContent(paths[path]);
        })
    }
}

const switchContent = (newContent) => {
    content.replaceChildren();
    content.append(newContent);
}

switchContent(home);
handleNavigation();