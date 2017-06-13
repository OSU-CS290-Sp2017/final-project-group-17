/*** Creating a study Set ***/
var addSetButton = document.querySelector('.addBoltContainer');
var modalBackdrop = document.getElementById('modal-backdrop');
var addSetmodal = document.getElementById('addBolt-modal');
var closeSetModal = document.getElementById('closeBoltModal');
var term = document.getElementById('term');
var definition = document.getElementById('definition');

addSetButton.addEventListener('click', function(){
   addSetmodal.className = '';
   modalBackdrop.className = '';
});

closeSetModal.addEventListener('click', function(){
   addSetmodal.className = 'hidden';
   modalBackdrop.className = 'hidden';
});

var createModal = document.querySelector('.modal-create-button');
var TermInputText = document.getElementById('setTerm-input');
var DefInputText = document.getElementById('setDef-input');

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

createModal.addEventListener('click', function(){
   if (TermInputText.value === '' || DefInputText.value == '') {
     window.alert("One of your fields is blank. Fill everything out!");
   }
   else {
      var boltContainer = document.querySelector('.boltContainer');
      var boltCar = document.createElement('div');
      boltCar.classList.add('boltCard');
      var term = document.createElement('p');
      term.classList.add('cardInfo');
      term.classList.add('term');
      var definition = document.createElement('p');
      definition.classList.add('cardInfo');
      definition.classList.add('definition');

      var termText = document.createTextNode(TermInputText.value);
      var defText = document.createTextNode(DefInputText.value);

      boltContainer.appendChild(boltCar);
      boltCar.appendChild(term);
      term.appendChild(termText);
      boltCar.appendChild(definition);
      definition.appendChild(defText);

      addSetmodal.className = 'hidden';
      modalBackdrop.className = 'hidden';

      var postRequest = new XMLHttpRequest();

      var pathComponents = window.location.pathname.split('/');
      var postURL = '/classes/' + pathComponents[2] + '/addCard';
      console.log(postURL);

      postRequest.open('POST', postURL);
      postRequest.setRequestHeader('Content-Type', 'application/json');

      postRequest.addEventListener('load', function(event) {
      var error;
      if(event.target.status !== 200) {
         error = event.target.response;
      }
      callback(error);
      });

      var postBody = {
         term: TermInputText.value,
         definition: DefInputText.value
      };

      postRequest.send(JSON.stringify(postBody));

      TermInputText.value = '';
      DefInputText.value = '';

      location.reload();
    }
})
