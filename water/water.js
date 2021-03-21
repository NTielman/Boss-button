/*
Starts animation for empting the water button
*/
const emptyTank = (waterBtn, liquid, spilledLiquid) => {
    waterBtn.style.pointerEvents = "none";
    liquid.style.transitionDuration = "5s";
    liquid.style.top = '0px';
    spilledLiquid.style.top = '0px';
}

/*
Creates the water button
*/
export const createMe = () => {
    const newContainer = document.createElement("div");
    const newLink = document.createElement("a");
    const newSpan = document.createElement("span");
    const newDiv = document.createElement("div");

    newLink.classList.add("water_button", "btn");
    newSpan.classList.add("water_text");
    newDiv.classList.add("liquid");

    newSpan.innerHTML = "Waterdrops";

    newLink.appendChild(newSpan);
    newLink.appendChild(newDiv);

    const spillageContainer = document.createElement("div")
    const spilledLiquid = document.createElement("div")

    spillageContainer.classList.add('spillage_container')
    spilledLiquid.classList.add('spilled_liquid')
    spillageContainer.appendChild(spilledLiquid)

    newLink.addEventListener('click', () => {
        emptyTank(newLink, newDiv, spilledLiquid)
    })
    newContainer.appendChild(newLink)
    newContainer.appendChild(spillageContainer)
    newContainer.classList.add('button_container')

    return newContainer;
};