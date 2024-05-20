// Sélectionner le footer
var footer = document.querySelector('footer');

// Ajouter un gestionnaire d'événements au clic sur le footer
footer.addEventListener('click', function() {
  console.log('clique');
});

// Déclaration du compteur
var counter = 0;

//===================================================================================================

// Sélectionner le footer
var footer = document.querySelector('footer');

// Ajouter un gestionnaire d'événements au clic sur le footer
footer.addEventListener('click', function() {
  // Incrémentation du compteur à chaque clic
  counter++;

  // Afficher "clic numéro x" en console
  console.log('clic numéro ' + counter);
});

//===================================================================================================

// Sélectionner le bouton du "Hamburger Menu"
var hamburgerButton = document.querySelector('.navbar-toggler');

// Sélectionner la barre de navigation avec l'ID navbarHeader
var navbarHeader = document.getElementById('navbarHeader');

// Ajouter un gestionnaire d'événements au clic sur le bouton du "Hamburger Menu"
hamburgerButton.addEventListener('click', function() {
  // Toggle la classe collapse sur la barre de navigation
  navbarHeader.classList.toggle('collapse');
});
//===================================================================================================

// Sélectionner la première carte
var firstCard = document.querySelector('.card');

// Vérifier si la première carte est bien sélectionnée
console.log(firstCard);

// Sélectionner le bouton "Edit" de la première carte
var editButton = firstCard.querySelector('.btn-outline-secondary');

// Vérifier si le bouton "Edit" est bien sélectionné
console.log(editButton);

// Ajouter un gestionnaire d'événements au clic sur le bouton "Edit"
editButton.addEventListener('click', function() {
  // Changer la couleur du texte de la carte en rouge
  firstCard.style.color = 'red';
});

//===========================================================================================================

// Sélectionner la deuxième carte
var secondCard = document.querySelectorAll('.card')[1]; // Nous sélectionnons le deuxième élément de la liste des cartes

// Sélectionner le bouton "Edit" de la deuxième carte
var editButtonSecondCard = secondCard.querySelector('.btn-outline-secondary');

// Ajouter un gestionnaire d'événements au clic sur le bouton "Edit" de la deuxième carte
editButtonSecondCard.addEventListener('click', function() {
  // Vérifier si le texte est actuellement vert
  if (secondCard.style.color === 'green') {
    // Si c'est le cas, le remettre à sa couleur par défaut
    secondCard.style.color = '';
  } else {
    // Sinon, mettre le texte en vert
    secondCard.style.color = 'green';
  }
});

//====================================================================================================================

// Sélectionner la barre de navigation
var navbar = document.querySelector('.navbar');

// Ajouter un gestionnaire d'événements au double-clic sur la barre de navigation
navbar.addEventListener('dblclick', function() {
  // Sélectionner le lien vers le fichier CSS Bootstrap
  var bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');

  // Vérifier si le lien est présent
  if (bootstrapLink) {
    // Si oui, le supprimer pour désactiver les styles Bootstrap
    bootstrapLink.parentNode.removeChild(bootstrapLink);
  } else {
    // Si non, recréer le lien pour réactiver les styles Bootstrap
    var newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    document.head.appendChild(newLink);
  }
});

//============================================================================================================================

const allCards = document.querySelectorAll(".card")

for (let i = 0; i < allCards.length; i++) {
    let allCards = document.querySelectorAll(".card")[i]
    const cardText = allCards.querySelector(".card-text")
    const cardImg = allCards.querySelector(".card-img-top")
    const originalText = cardText.innerHTML
    
    const reduceCard = () => {
        cardText.innerHTML = ""
        cardImg.style.width = "20%"
    }
    
    const reset = () => {
        cardText.innerHTML = originalText
        cardImg.style.width = ""
    }
    
    allCards.addEventListener('mouseover', reduceCard)
    allCards.addEventListener('mouseout', reset)
}   

//==============================================================================================================================

// Sélection du bouton
var rightButton = document.querySelector('.btn.btn-secondary.my-2');

// Ajout de l'événement au clic sur le bouton
rightButton.addEventListener('click', function() {
    // Sélection de la liste des cartes
    var cardList = document.querySelector('.album.py-5.bg-light .row');

    // Sélection de la dernière carte
    var lastCard = cardList.lastElementChild;

    // Déplacement de la dernière carte en premier
    cardList.insertBefore(lastCard, cardList.firstElementChild);
});

//=================================================================================================================================
// Sélection du bouton
var leftButton = document.querySelector('.btn.btn-primary.my-2');

// Ajout de l'événement au clic sur le bouton
leftButton.addEventListener('click', function(event) {
    // Bloquer le comportement par défaut du bouton (empêcher l'ouverture d'une page)
    event.preventDefault();

    // Sélection de la liste des cartes
    var cardList = document.querySelector('.album.py-5.bg-light .row');

    // Sélection de la première carte
    var firstCard = cardList.firstElementChild;

    // Déplacement de la première carte en dernier
    cardList.appendChild(firstCard);
});
//=====================================================================================================
// Sélectionner le logo
const logo = document.querySelector('.navbar-brand');

// Fonction pour gérer les classes de l'élément <body>
const handleKeyPress = (event) => {
    // Sélectionner l'élément <body>
    const body = document.querySelector('body');

    // Retirer toutes les classes ajoutées précédemment
    body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');

    // Appliquer les classes en fonction de la touche pressée
    switch (event.key) {
        case 'a':
            body.classList.add('col-4');
            break;
        case 'y':
            body.classList.add('col-4', 'offset-md-4');
            break;
        case 'p':
            body.classList.add('col-4', 'offset-md-8');
            break;
        case 'b':
            // Ne rien faire, ce cas remet le tout en normal
            break;
        default:
            break;
    }
};

// Ajouter l'écouteur d'événement pour détecter les touches pressées
logo.addEventListener('click', () => {
    document.addEventListener('keypress', handleKeyPress);
});
