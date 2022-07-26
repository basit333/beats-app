let typed = new Typed(".auto-typed", {
  strings: ["Beat Maker"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
    "#a76770",
    "#60d355",
  ];

  const pauseAudio = () => {
    for (let i = 0; i < sounds.length; i++) {
      sounds[i].pause();
    }
  };

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      pauseAudio();
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  //Create bubbles
  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
