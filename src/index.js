import { createHome } from "./home";
import "./style.css";

const appendHome = () => {
    const content = document.querySelector("#content");
    const home = createHome();
    content.append(home);
}

appendHome();