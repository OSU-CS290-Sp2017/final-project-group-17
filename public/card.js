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
      TermInputText.value = '';
      DefInputText.value = '';
   }
})
