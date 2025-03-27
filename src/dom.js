
const createElement = (type, textContent = "", attributes = {}) => {
    const element = document.createElement(type);
    for (const attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    element.textContent = textContent;
    return element;
}

export { createElement }