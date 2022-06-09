let images = document.querySelectorAll("img");
let imgJ = document.getElementById("imgH");
let imgR = document.getElementById("imgR");
let h2 =document.querySelector("h2")
let scoreJ = 0;
let scoreR = 0;

function play() {
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      const joueur = images[i].id;
      imgJ.src = `./${joueur}.png`;
      console.log(joueur);
      const robot = images[Math.floor(Math.random() * images.length)].id;
      imgR.src = `./${robot}.png`;
      console.log(robot);
      let resultat = "";
      resultat = condition(robot, joueur);
    //   document.getElementById("resultat").innerText =
    //     "joueur : " + joueur + " robot : " + robot + " = " + resultat;
      score(resultat);
    });
  }
}

function condition(robot, joueur) {
  if (robot === joueur) {
    resultat = "egalité";
    console.log(resultat);
  } else if (
    (joueur === "ciseau" && robot === "papier") ||
    (joueur === "papier" && robot === "pierre") ||
    (joueur === "pierre" && robot === "ciseau")
  ) {
    console.log("gagné");
    resultat = "gagné";
  } else {
    console.log("perdu");
    resultat = "perdu";
  }
  return resultat;
}

play();
function score(resultat) {
  if (resultat === "gagné") {
    scoreJ++;
    //console.log(scoreJ);
    document.getElementById("scoreJ").innerText = "joueur = " + scoreJ;
  } else if (resultat === "perdu") {
    scoreR++;
    document.getElementById("scoreR").innerText = " robot = " + scoreR;
  } else {
    scoreJ += 0;
    scoreR += 0;
}
victoire()
}

function victoire(){
    if(scoreJ==2){
        h2.innerText =  'Le joueur gagne la partie'
    }else if(scoreR == 2){
        h2.innerText =  'Le robot gagne la partie'
    }    if(scoreJ == 2 || scoreR == 2) {
        scoreR = 0;
        scoreJ = 0;
    }

}

