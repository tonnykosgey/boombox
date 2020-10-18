window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector(".visual");
    const colors = [
        "#eb5b5b",
        "#cdec40",
        "#50f587",
        "#15d9f",
        "#f063ba",
        "#787af5"
    ];

    //lets get the sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

           createBubbles(index);
        });
    });

    //Ceate a function that creates bubbles
    const createBubbles = index => {
        const bubble = document.createElement("div");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visuals.removeChild(this);
        });
    };
}); 
