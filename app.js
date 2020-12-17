let mots = ["chaise", "feuille", "banane", "camion", "chaussure", "gendarme", "souris", "ascenseur", "brouette", "chemise"];
let input = document.getElementById("user-letter");
let buttonVerify = document.getElementById("letterTry");
let divEssai = document.getElementById("essai");
let motRandom = mots[Math.floor(Math.random()*mots.length)];
let guessWord = document.getElementById("guessWord");
let answerTableau = [];
let essais = 10;

divEssai.innerHTML = "essais restant " + essais;
console.log(motRandom);

for (let x = 0; x < motRandom.length; x++) {
    answerTableau[x] = "_";
    guessWord.innerHTML = answerTableau.join(" ");
}

buttonVerify.addEventListener("click", function () {
    let letter = input.value;
    let found = true;

    for (let x = 0; x < motRandom.length; x++) {
        if (motRandom[x] === letter) {
            answerTableau[x] = letter;
            guessWord.innerHTML = answerTableau.join(" ");
        }
        else if (!motRandom.includes(letter)) {
            found = false;
        }
    }
    if (!found) {
        essais--;
        divEssai.innerHTML = "essais restant " + essais;
    }
    if (essais <= 0) {
        alert("Perdu ! Le mot était : " + motRandom);
        window.location.reload();
    }
    if (!answerTableau.includes("_")) {
        alert("Gagné !");
        window.location.reload();
    }
})





