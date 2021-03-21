
import { bGaudio } from '../main.js';

/**
 * Starts and stops the background music
 * @param {event} e 
 */
export const playStop = (e) => {
    const bgONoff = document.getElementById("bgMusic");

    if (bgONoff.dataset.playing == "off") {
        bGaudio.play();
        bgONoff.dataset.playing = "on"
    }
    else if (bgONoff.dataset.playing == "on") {
        bGaudio.pause();
        bgONoff.dataset.playing = "off"
    }
}

/**
 * creates a button to control the background music
 * @returns {HTML element}
 */
export const bgMusicOnoff = () => {
    const newButton = document.createElement("button")
    newButton.id = "bgONoff"
    newButton.innerHTML = "Play/Stop background music"
    newButton.classList.add("btn")
    newButton.addEventListener("click", playStop);

    return newButton;

}

