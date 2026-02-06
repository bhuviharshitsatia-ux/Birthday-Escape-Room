function showResult(name) {
    const resultText = document.getElementById("resultText");

    const message =
`🎉 Happy Birthday, ${name}! 🎂💖

You completed the Quiz!!!!!!!!!!
yeyeyeyeey Maharani ji so smart 🏆

– Made by Abby`;

    resultText.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
        let char = message[i];
        resultText.textContent += char === " " ? "\u00A0" : char;
        i++;
        if (i === message.length) clearInterval(typing);
    }, 35);
}

function launchConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = `hsl(${Math.random()*360},100%,50%)`;
        confetti.style.animationDuration = (Math.random()*2 + 2) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}
