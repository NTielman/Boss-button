
import { createMe as createCat } from './cat/cat.js'
import { createMe as createKiekeboe } from './kiekeboe/kiekeboe.js'
import { createMe as createWater } from './water/water.js'
import { createMe as createWhaa } from './whaa/whaa.js'
import { createMe2 as createLuie } from './luie/knop.js'
import { pop } from './theboss.js'

////////////////////////////////////////////////////
//              BOSSMAN                           //
///////////////////////////////////////////////////

const btnTheboss = document.createElement("button")
btnTheboss.id = "boss_button";
btnTheboss.classList.add("btn");
btnTheboss.classList.add("fadeIn");
btnTheboss.innerText = "Boss";

// Wait to add the BOSSMAN button to the DOM for dramatic effect
setTimeout(() => {    
    document.body.appendChild(btnTheboss)
}, 1000)

const bossLifeBar = document.querySelector('.boss_life_bar')

let clickCounter = 0;

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
 * After checking number of buttons and counter-count
 * Calls the addButton function
 * @param {event} e 
 */
const addButtons = (e) => {
    if (!areThereXButtons()) {
        if (clickCounter == 0) {
            /* first click  left -60%, second click left -30%, 3e click left 0% */
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
        }
    } else {
        bossLifeBar.style.left = '100%';
        pop(e)
    }
    const audio = new Audio("./sounds/intro.mp3");
    audio.play();
    audio.volume = 0.4;
    clickCounter++;
}


// const audio = new BgAudio("./sounds/bGmusic.wav")
// audio.loop = true;
// audio.play();
// audio.volume = 0.4;
 
/**
 * Checks if there are a number elements with button-tag in the DOM
 * @param {Integer} numButtons number of elements max on screen
 * @returns {Boolean} True if >= 5 buttons, else False
 */
const areThereXButtons = (numButtons = 5) => {
    if (document.getElementsByTagName("button").length >= numButtons) {
        return true;
    } else {
        return false;
    }
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

btnTheboss.addEventListener('click', addButtons);