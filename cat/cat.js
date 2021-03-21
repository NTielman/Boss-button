/**
 * Adjust the setting of the element to follow the pointer on the screen
 * @param {event} e 
 */
const startChase = (e) => {
    e.target.style.pointerEvents = "none";
    const buttonRect = e.target.getBoundingClientRect()
    e.target.classList.add('rotating')

    // set initial cursor position
    const cursorPosition = {
        x: 0,
        y: 0
    }

    // set starting chase button position
    const buttonPosition = {
        x: buttonRect.x,
        y: buttonRect.y
    }

    const chaseCursor = (event) => {
        cursorPosition.x = event.pageX;
        cursorPosition.y = event.pageY;

        const xDistance = cursorPosition.x - buttonPosition.x;
        const yDistance = cursorPosition.y - buttonPosition.y;

        buttonPosition.x += xDistance / 25;
        buttonPosition.y += yDistance / 25;

        e.target.style.left = buttonPosition.x + 'px';
        e.target.style.top = buttonPosition.y + 'px';
    }

    window.addEventListener('mousemove', chaseCursor)
}

/**
 * Creates a HTML button element
 * @returns {HTML element}
 */
export const createMe = () => {
    const newCat = document.createElement("button");
    newCat.classList.add("chase_button", "btn");
    newCat.id = "cat"
    newCat.innerHTML = "The Cat"
    newCat.addEventListener('click', startChase)
    return newCat
}