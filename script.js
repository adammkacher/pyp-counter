let count = 0;

function increase() {

  count++;

  updateCounter("+1 Awareness Spread");
}

function decrease() {

  if (count > 0) {

    count--;

    updateCounter("-1");
  }
}

function updateCounter(message) {

  const counter =
    document.getElementById("counter");

  counter.innerText =
    count.toString().padStart(3, '0');

  counter.style.transform =
    "scale(1.15)";

  setTimeout(() => {

    counter.style.transform =
      "scale(1)";

  }, 200);

  const flash =
    document.createElement("div");

  flash.className = "flash";

  flash.innerText = message;

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.remove();
  }, 1000);

  const progress =
    Math.min((count / 100) * 100, 100);

  document.getElementById("progress-bar")
    .style.width = progress + "%";

  document.body.style.transform =
    "translateX(5px)";

  setTimeout(() => {

    document.body.style.transform =
      "translateX(-5px)";

  }, 50);

  setTimeout(() => {

    document.body.style.transform =
      "translateX(0px)";

  }, 100);

  const ring =
    document.createElement("div");

  ring.className = "ring";

  ring.style.left =
    (window.innerWidth / 2 - 150) + "px";

  ring.style.top =
    (window.innerHeight / 2 - 150) + "px";

  document.body.appendChild(ring);

  setTimeout(() => {
    ring.remove();
  }, 800);

  const big =
    document.createElement("div");

  big.className = "bigFlash";

  big.innerText =
    "AWARENESS SPREAD";

  document.body.appendChild(big);

  setTimeout(() => {
    big.remove();
  }, 1000);

  for (let i = 0; i < 40; i++) {

    const confetti =
      document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left =
      Math.random() *
      window.innerWidth + "px";

    confetti.style.background =
      ["#00ff99", "#00ccff", "#ffffff"]
      [Math.floor(Math.random() * 3)];

    confetti.style.animationDuration =
      (2 + Math.random() * 3) + "s";

    confetti.style.width =
      (8 + Math.random() * 10) + "px";

    confetti.style.height =
      confetti.style.width;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

for (let i = 0; i < 20; i++) {

  const circle =
    document.createElement("div");

  circle.classList.add("circle");

  let size = Math.random() * 60;

  circle.style.width = size + "px";
  circle.style.height = size + "px";

  circle.style.left =
    Math.random() * 100 + "vw";

  circle.style.animationDuration =
    (10 + Math.random() * 10) + "s";

  document.body.appendChild(circle);
}