import { createMe as createCat } from './cat/cat.js'
import { createMe as createKiekeboe } from './kiekeboe/kiekeboe.js'
import { createMe as createWater } from './water/water.js'
import { createMe as createWhaa } from './whaa/whaa.js'
import { createMe2 as createLuie } from './luie/knop.js'
import {
    createVolumeUp,
    createVolumeDown,
    volumeUp,
    volumeDown,
    getVolume
} from './soundcontrol/volume.js'

////////////////////////////////////////////////////
//              BOSSMAN                           //
///////////////////////////////////////////////////

const btnTheboss = document.createElement("button")
btnTheboss.id = "boss_button";
btnTheboss.classList.add("btn");
btnTheboss.innerText = "Boss";
document.body.appendChild(btnTheboss)

const bossLifeBar = document.querySelector('.boss_life_bar');
const titleCard = document.querySelector('.title_card');
let clickCounter = 0;

const btnVolumeUp = createVolumeUp();
const btnVolumeDown = createVolumeDown();
btnVolumeUp.addEventListener("click", volumeUp)
btnVolumeDown.addEventListener("click", volumeDown)

const bGaudio = new Audio("./sounds/bGmusic.mp3")
bGaudio.play();
bGaudio.loop = true;
setInterval(() => {
    bGaudio.volume = getVolume();    
}, 200);

window.addEventListener('DOMContentLoaded', (event) => {
    titleCard.innerHTML = "Welcome Player 1";

    setTimeout(() => {
        titleCard.style.opacity = 0;
    }, 1000)
    // Wait to add the BOSSMAN button to the DOM for dramatic effect
    setTimeout(() => {
        btnTheboss.style.opacity = 1;
    }, 2000)
    setTimeout(() => {
        btnTheboss.style.animation = 'pulse 5s linear infinite';
    }, 3000)
});

// We can expect these buttons on screen
const buttonArray = [
    createCat(),
    createKiekeboe(),
    createWater(),
    createWhaa(),
    createLuie()
];


// Positions in array, [top, left]
const positionsArray = [
    [50, 25],
    [50, 75],
    [75, 25],
    [75, 50],
    [75, 75]
];

/**
 * Adds a button to the DOM on a given position if it is passed, else 
 * uses standard flow
 * @param {HTML element} htmlObject 
 * @param {Integer} positionX 
 * @param {Integer} positionY 
 */
const addButton = (htmlObject, positionX = -1, positionY = -1) => {
    // if position argument is given, use it!
    if (positionX != -1) {
        htmlObject.style.position = "absolute";
        htmlObject.style.left = positionX + '%';
    }
    if (positionY != -1) {
        htmlObject.style.position = "absolute";
        htmlObject.style.top = positionY + '%';
    }
    document.body.appendChild(htmlObject);
}

/**
 * Choose a random button from the functionsArray
 * @param {array} functionArray containting html elements
 * @returns one html element
 */
const getRandomFunction = (functionArray) => {
    const randomNum = Math.floor(Math.random() * functionArray.length);
    const [selected] = functionArray.splice(randomNum, 1);
    return selected;
}

/**
 * Calls the addButton function
 * @param {event} e 
 */
const addButtons = (e) => {
    if (clickCounter == 0) {
        bossLifeBar.style.left = '30%';
        for (let i = 0; i < 2; i++) {
            const htmlObject = getRandomFunction(buttonArray);
            const positions = getPosition();
            addButton(htmlObject, positions[1], positions[0]);
        }
    } else if (clickCounter == 1) {
        bossLifeBar.style.left = '60%';
        for (let i = 0; i < 3; i++) {
            const htmlObject = getRandomFunction(buttonArray);
            const positions = getPosition();
            addButton(htmlObject, positions[1], positions[0]);
        }
    } else {
        // Game is over 
        bossLifeBar.style.left = '100%';

        // disable all buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => { btn.style.pointerEvents = "none"; })
        titleCard.style.opacity = 1;
        titleCard.innerHTML = "You Won The Game!";
    }
    const audio = new Audio("./sounds/intro.mp3");
    audio.play();
    audio.volume = getVolume();
    clickCounter++;
}

/**
 * Get the position where the next button is to be placed. 
 * @param {Array} positions array [[top, left], [top, left]...., [top,left]]
 *                          default uses the global positionsArray variable
 * @returns {Array} returns [top, left]
 */
const getPosition = () => {
    const [nextPosition] = positionsArray.splice(0, 1);
    return nextPosition;
}

document.body.appendChild(btnVolumeUp)
document.body.appendChild(btnVolumeDown)
btnTheboss.addEventListener('click', addButtons);