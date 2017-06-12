var loginButton = document.getElementById('loginButton');
var modal = document.getElementById('login-modal');
var modalBackdrop = document.getElementById('modal-backdrop');
var closeLoginModal = document.getElementById('closeLoginModal');

var modalHeader = document.getElementById('userModalHeader');
var socialButtons = document.getElementsByClassName('UISocialButton');

loginButton.addEventListener('click', function() {
   modalHeader.innerHTML = 'Login';
   socialButtons[0].textContent = 'Login with Facebook';
   socialButtons[1].textContent = 'Login with Google';
   modal.className = '';
   modalBackdrop.className = '';
});

var signupButton = document.getElementById('signupButton');

signupButton.addEventListener('click', function() {
   modalHeader.innerHTML = 'Sign up';
   socialButtons[0].textContent = 'Sign up with Facebook';
   socialButtons[1].textContent = 'Sign up with Google';
   modal.className = '';
   modalBackdrop.className = '';
});

closeLoginModal.addEventListener('click', function() {
   modal.className = 'hidden';
   modalBackdrop.className = 'hidden';
})

/*
 * Small function to get a person's identifier from the current URL.
 */
function getPersonIDFromLocation() {
  var pathComponents = window.location.pathname.split('/');
  if (pathComponents[0] !== '' && pathComponents[1] !== 'people') {
    return null;
  }
  return pathComponents[2];
}

/*
 * This function uses Handlebars on the client side to generate HTML for a
 * person photo and adds that person photo HTML into the DOM.
 */
function insertNewPhoto() {

  var photoURL = document.getElementById('photo-url-input').value || '';
  var photoCaption = document.getElementById('photo-caption-input').value || '';

  if (photoURL.trim()) {

    var personID = getPersonIDFromLocation();
    if (personID) {
      console.log("== Person ID:", personID);

      storePersonPhoto(personID, cardTerm, cardDefinition, function (err) {

        if (err) {
          alert("Unable to save person's photo.  Got this error:\n\n" + err);
        } else {

          var photoCardTemplate = Handlebars.templates.photoCard;
          var templateArgs = {
            term: cardTerm,
            definition: cardDefinition
          };

          var photoCardHTML = photoCardTemplate(templateArgs);
          // console.log(photoCardHTML);

          var photoCardContainer = document.querySelector('.photo-card-container');
          photoCardContainer.insertAdjacentHTML('beforeend', photoCardHTML);

        }

      });

    }

    closeAddPhotoModal();

  } else {

    alert('You must specify a value for the "URL" field.');

  }

}

/*
 * This function will communicate with our server to store the specified
 * photo for a given person.
 */
function storePersonPhoto(personID, term, definition, callback) {

  var postURL = "/classes/" + personID + "/addClass";

  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postURL);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  postRequest.addEventListener('load', function (event) {
    var error;
    if (event.target.status !== 200) {
      error = event.target.response;
    }
    callback(error);
  });

  var postBody = {
    term: term,
    definition: definition
  };
  postRequest.send(JSON.stringify(postBody));

}
