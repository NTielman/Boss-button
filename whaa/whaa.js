const jumpLeft = (e) => {
    const selected = e.target
    const position = selected.style.left.slice(0, -2)
    console.log(position)
    if (position == '') {
        selected.style.left = '100px'
    } else {
        const newPosition = parseInt(position) - 100
        console.log(newPosition)
        selected.style.left = newPosition + 'px'
    }
}

const jumpRight = (e) => {
    const selected = e.target
    const position = selected.style.left.slice(0, -2)
    if (position == '') {
        selected.style.left = '100px'
    } else {
        const newPosition = parseInt(position) + 100
        selected.style.left = newPosition + 'px'
    }
}

const jump = (e) => {
    const position = selected.style.left.slice(0, -2)
    if ((parseInt(position) + 100) > window.innerWidth) {
        jumpLeft(e)
    } else {
        jumpRight(e)
    }
}

// add a class to start the animation
const startAnimation = (e) => {
    const selected = e.target;
    selected.classList.add("animation");
    selected.addEventListener("mouseenter", () => {
        selected.style.animationPlayState = "paused";
    })
    selected.addEventListener("mouseleave", () => {
        selected.style.animationPlayState = "running";
    })

}

/**
 * Creates a HTML button element
 * @returns {HTML element}
 */
export const createMe = () => {

    const newButton = document.createElement("button");
    newButton.innerHTML = "DropIt";
    newButton.setAttribute("id", "dropit")
    newButton.classList.add("btn");
    newButton.addEventListener("click", startAnimation)

    return newButton
}