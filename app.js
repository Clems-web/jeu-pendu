let mots = ["chaise", "feuille", "banane", "camion", "chaussure", "gendarme", "souris", "ascenseur", "brouette", "chemise"];
let input = document.getElementById("user-letter");
let buttonVerify = document.getElementById("letterTry");
let divEssai = document.getElementById("essai");
let motRandom = mots[Math.floor(Math.random()*mots.length)];
let guessWord = document.getElementById("guessWord");
let answerTableau = [];
let essais = 10;
let inputWord = document.getElementById("user-word");
let buttonTry = document.getElementById("wordTry");
let divPropose = document.getElementById("lettrePropose");
divPropose.innerHTML = "lettre(s) essayée(s) : ";

divEssai.innerHTML = "essais restant " + essais;


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
            divPropose.innerHTML += "<br>" + " - " + letter;
        }
        else if (!motRandom.includes(letter)) {
            found = false;
        }
    }
    if (!found) {
        essais--;
        divEssai.innerHTML = "essais restant " + essais;
        divPropose.innerHTML += "<br>" + " - " + letter;
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

buttonTry.addEventListener("click", function () {
    let word = inputWord.value;

    if (word === motRandom) {
        alert("Gagné !");
        window.location.reload();
    }

    else if (word !== motRandom) {
        alert("Perdu ! Le mot était : " + motRandom);
        window.location.reload();
    }
})




