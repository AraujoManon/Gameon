// Fonction pour basculer la classe de la navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // Ajoute la classe "responsive"
  } else {
    x.className = "topnav"; // Rétablit la classe à "topnav"
  }
}

// Sélection des éléments du DOM
const modalbg = document.querySelector(".bground"); 
const modalBtn = document.querySelectorAll(".modal-btn"); 
const formData = document.querySelectorAll(".formData"); 
const modalBody = document.querySelector(".modal-body"); 

// Ajout d'un écouteur d'événement pour chaque bouton de modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour afficher la modale
function launchModal() {
  modalbg.style.display = "block"; // Affiche le fond de la modale
  document.getElementById('reserve').reset(); // Réinitialise le formulaire
  clearErrorMessages(); // Efface les messages d'erreur
}


const close = document.querySelector(".close");

// Ajout d'un écouteur d'événement pour fermer la modale
close.addEventListener("click", () => {
  modalbg.style.display = "none"; 
});

// Fonction pour valider le formulaire
function validate(event) {
  event.preventDefault(); 
  var isValid = true; // Variable pour vérifier la validité du formulaire

  // Vérification du champ Prénom
  var first = document.getElementById('first');
  var firstError = document.getElementById('firstError');
  if (first.value.trim() === '') {
    firstError.style.display = 'inline'; // Affiche le message d'erreur
    isValid = false; // Marque le formulaire comme invalide
  } else {
    firstError.style.display = 'none'; // Masque le message d'erreur
  }

  // Vérification du champ Nom
  var last = document.getElementById('last');
  var lastError = document.getElementById('lastError');
  if (last.value.trim() === '') {
    lastError.style.display = 'inline';
    isValid = false;
  } else {
    lastError.style.display = 'none';
  }

  // Vérification du champ E-mail
  var email = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  if (email.value.trim() === '') {
    emailError.style.display = 'inline';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Vérification du champ Date de naissance
  var birthdate = document.getElementById('birthdate');
  var birthdateError = document.getElementById('birthdateError');
  if (birthdate.value.trim() === '') {
    birthdateError.style.display = 'inline';
    isValid = false;
  } else {
    birthdateError.style.display = 'none';
  }

  // Vérification du champ Quantité
  var quantity = document.getElementById('quantity');
  var quantityError = document.getElementById('quantityError');
  if (quantity.value.trim() === '') {
    quantityError.style.display = 'inline';
    isValid = false;
  } else {
    quantityError.style.display = 'none';
  }

  // Vérification du champ Location
  var location = document.querySelector('input[name="location"]:checked');
  var locationError = document.getElementById('locationError');
  if (!location) {
    locationError.style.display = 'inline';
    isValid = false;
  } else {
    locationError.style.display = 'none';
  }

  // Vérification de la case à cocher des conditions d'utilisation
  var terms = document.getElementById('terms');
  var termsError = document.getElementById('termsError');
  if (!terms.checked) {
    termsError.style.display = 'inline';
    isValid = false;
  } else {
    termsError.style.display = 'none';
  }

  if (isValid) {
    modalbg.style.display = "none"; // Ferme la modale
    document.getElementById('confirmationMessage').style.display = 'block';
    setTimeout(() => {
      document.getElementById('confirmationMessage').style.display = 'none';
    }, 2000);

    // Réinitialisation des champs du formulaire
    document.getElementById('reserve').reset();
  } else {
    // Ajout de l'animation de tremblement à .modal-body
    modalBody.classList.add('shake');
    setTimeout(() => {
      modalBody.classList.remove('shake');
    }, 500);
  }

  return false; // Empêche la soumission du formulaire
}

// Fonction pour effacer les messages d'erreur
function clearErrorMessages() {
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(error => {
    error.style.display = 'none';
  });
}

// Ajout des écouteurs d'événements pour effacer les messages d'erreur lorsque l'utilisateur commence à remplir les champs
document.getElementById('first').addEventListener('input', clearErrorMessages);
document.getElementById('last').addEventListener('input', clearErrorMessages);
document.getElementById('email').addEventListener('input', clearErrorMessages);
document.getElementById('birthdate').addEventListener('input', clearErrorMessages);
document.getElementById('quantity').addEventListener('input', clearErrorMessages);
document.querySelectorAll('input[name="location"]').forEach(input => {
  input.addEventListener('change', clearErrorMessages);
});
document.getElementById('terms').addEventListener('change', clearErrorMessages);
