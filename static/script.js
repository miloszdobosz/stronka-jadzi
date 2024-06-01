const girl_front = document.getElementById("girl_front");
const girl_back = document.getElementById("girl_back");
const wheel_left = document.getElementById("wheel_left");
const wheel_right = document.getElementById("wheel_right");

const animWidth = girl_front.getBoundingClientRect().width;
const animHeight = girl_front.getBoundingClientRect().height;

let accurateScrollLeft = 0;
let x, y, positionX, positionY;

document.addEventListener("wheel", (event) => {
    event.preventDefault();
    accurateScrollLeft += event.deltaY;

    let frame = Math.floor(accurateScrollLeft / 100) % 23;
    if (frame < 0) frame += 23;

    y = Math.floor(frame / 6);
    x = Math.floor(frame % 6);

    console.log(frame, x, y);

    positionX = -x * animWidth + "px";
    positionY = -y * animHeight + "px";

    girl_front.style.backgroundPositionX = positionX;
    girl_back.style.backgroundPositionX = positionX;
    girl_front.style.backgroundPositionY = positionY;
    girl_back.style.backgroundPositionY = positionY;

    wheel_left.style.rotate = accurateScrollLeft / 5 + "deg";
    wheel_right.style.rotate = accurateScrollLeft / 5 + "deg";
});