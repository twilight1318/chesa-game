/* =========================
   LEVEL SYSTEM
========================= */

function nextLevel(levelNumber) {

    const levels =
        document.querySelectorAll(".level");

    levels.forEach(function(level) {

        level.classList.remove("active");

    });

    const next =
        document.getElementById(
            "level" + levelNumber
        );

    next.classList.add("active");
}


/* =========================
   LEVEL 3
========================= */

function showSaree() {

    const message =
        document.getElementById(
            "sareeMessage"
        );

    message.classList.remove("hidden");
}


/* =========================
   LEVEL 4
========================= */

function showFinal() {

    const message =
        document.getElementById(
            "finalMessage"
        );

    message.classList.remove("hidden");
}


/* =========================
   LEVEL 5
========================= */

function showSecret() {

    const message =
        document.getElementById(
            "secretMessage"
        );

    message.classList.remove("hidden");
}


/* =========================
   FINAL SCREEN
========================= */

function showEnding() {

    document
        .querySelectorAll(".level")
        .forEach(function(level) {

            level.classList.remove("active");

        });

    document
        .getElementById("ending")
        .classList.add("active");
}


/* =========================
   CREATE STARS
========================= */

const stars =
    document.getElementById("stars");

for (let i = 0; i < 100; i++) {

    const star =
        document.createElement("span");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* =========================
   CREATE FLOATING HEARTS
========================= */

const hearts =
    document.getElementById("hearts");

for (let i = 0; i < 20; i++) {

    const heart =
        document.createElement("span");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.animationDelay =
        Math.random() * 8 + "s";

    heart.style.fontSize =
        (14 + Math.random() * 18) + "px";

    hearts.appendChild(heart);
}