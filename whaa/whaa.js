// add a class to start the animation
const startAnimation = (e) => {
    const selected = e.target;

    selected.classList.add("animation");
    selected.addEventListener("mouseenter", () => {
        selected.style.animationPlayState = "paused";
    });
    selected.addEventListener("mouseleave", () => {
        selected.style.animationPlayState = "running";
    });

    // if initial animation has ended
    selected.addEventListener('animationend', () => {
        selected.style.top = 0;
        selected.style.animation = "falling 2s linear infinite forwards";
    });

    var audio = new Audio("../sounds/falling.mp3");
    audio.loop = true;
    audio.play();
    audio.volume = 0.4;
}

/**
 * Creates a HTML button element
 * @returns {HTML element}
 */
export const createMe = () => {

    const newButton = document.createElement("button");
    newButton.innerHTML = "DropIt";
    newButton.setAttribute("id", "dropit");
    newButton.classList.add("btn");
    newButton.addEventListener("click", startAnimation);

    return newButton;
}