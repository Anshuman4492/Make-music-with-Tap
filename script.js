window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.getElementById('visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];
    console.log(sounds);
    // Lets get going with the sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 25;
            sounds[index].play();
            createBubbles(index);
        });
    });
    // Function for creating bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 2s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
            sounds[index].pause();
        });
    };

});