/**
 * Creates a volume up button
 * @returns {HTML element}
 */
export const createVolumeUp = () => {
    const newButton = document.createElement("button");
    newButton.id = "volUp";
    newButton.classList.add("btn");
    newButton.innerText = "vol +";

    return newButton;
}

/**
 * Creates a volume down button
 * @returns {HTML element}
 */
export const createVolumeDown = () => {
    const newButton = document.createElement("button");
    newButton.id = "volDown";
    newButton.classList.add("btn");
    newButton.innerText = "vol -";

    return newButton;
}

/**
 * Sets the volume 0.1 higher
 */
export const volumeUp = () => {
    const volumeElement = document.getElementById("currentVol");
    let volume = parseFloat(volumeElement.dataset.volume);
    if (volume < 1) {
        volume = (volume + 0.1);
    }
    volumeElement.dataset.volume = volume.toFixed(1);
}

/**
 * Sets the volume 0.1 lower
 */
export const volumeDown = () => {
    const volumeElement = document.getElementById("currentVol");
    let volume = parseFloat(volumeElement.dataset.volume);
    if (volume > 0) {
        volume = (volume - 0.1);
    }
    volumeElement.dataset.volume = volume.toFixed(1);
}

export const getVolume = () => {
    const volume = parseFloat(document.getElementById("currentVol").dataset.volume)
    return volume
}