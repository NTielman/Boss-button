/**
 * Generates random coordinates where the e.target is being set next
 * @param {event} e 
 * @returns 
 */
const randomJump = (e) => {
    // calculate a random x and y coordinate
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));

    e.target.style.left = randX + 'px';
    e.target.style.top = randY + 'px';

    return undefined
}

/**
 * Creates a HTML button element
 * @returns {HTML element}
 */
export const createMe = () => {

    const newButton = document.createElement("button");
    newButton.setAttribute('id', 'kiekeboe');
    newButton.innerText = "Kiekeboe";
    newButton.classList.add("btn");
    newButton.addEventListener("mouseenter", randomJump)

    return newButton
}
