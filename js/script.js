let modif = document.getElementById("sec");
function unClick() {
  // Il nous affiche le rectangle au milieu de la page en vert
  gsap.to(modif, { y: 150, stagger: 0.2, backgroundColor: "green" });
}

function doubleClick() {
  // Il incline le box sur le coté quand on double clique
  gsap.to(modif, { rotation: 27, x: 100, duration: 0.03 });
}

function mouse() {
  //   Quand on passe la souris dessus, il pousse le tableau à droite à 180px;
  gsap.to(modif, { x: 180, repeat: 2, yoyo: true });
}

function logKey() {
  //   Il met le rectangle en rouge et en cercle quand on clique sur une touche

  gsap.to(modif, {
    duration: 1, // Durée de l'animation en secondes
    borderRadius: "50%", // Transforme les coins en un cercle parfait
    ease: "power2.inOut", // Effet de transition (vous pouvez en choisir d'autres)
    backgroundColor: "red",
  });
}

function enterMouse() {
  // Il réduit la taille du rectangle en le mettant en carré quand on délaisse le click droit
  gsap.to(modif, {
    width: 300, // Nouvelle largeur en pixels
    height: 300, // Nouvelle hauteur en pixels
    duration: 1, // Durée de l'animation en secondes
  });
}

function clickDroit() {
  // Il réduit la taille du rectangle quand on fait un click droit
  gsap.to(modif, {
    width: 150, // Nouvelle largeur en pixels
    height: 100, // Nouvelle hauteur en pixels
    duration: 1, // Durée de l'animation en secondes
  });
}

window.addEventListener("click", unClick);
window.addEventListener("dblclick", doubleClick);
window.addEventListener("mouseover", mouse);
document.addEventListener("keypress", logKey);
document.addEventListener("mouseup", enterMouse);
document.addEventListener("contextmenu", clickDroit);
