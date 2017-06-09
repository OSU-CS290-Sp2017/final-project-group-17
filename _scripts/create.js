/*** Creating a study Set ***/
var addSetButton = document.querySelector('.addSetContainer');
var modalBackdrop = document.getElementById('modal-backdrop');
var addSetmodal = document.getElementById('addSet-modal');
var closeSetModal = document.getElementById('closeSetModal');

addSetButton.addEventListener('click', function(){
   addSetmodal.className = '';
   modalBackdrop.className = '';

});

closeSetModal.addEventListener('click', function(){
   addSetmodal.className = 'hidden';
   modalBackdrop.className = 'hidden';
});

var createModal = document.querySelector('.modal-create-button');
var modalInputElement = document.querySelector('.modal-input-element');
var modalInputText = document.getElementById('setclass-input');

createModal.addEventListener('click', function() {
  if (modalInputText.value === "") {
    window.alert("One of your fields is blank. Fill everything out!");
    modalBackdrop.className= '';
  }
  else {
    var mainContainer = document.querySelector('.mainContainer');
    var setContainer = document.createElement('div');
    setContainer.classList.add('setContainer');
    var setClassName = document.createElement('p');
    var classNameTxt = document.createTextNode(modalInputText.value);

    mainContainer.appendChild(setContainer);
    setContainer.appendChild(setClassName);
    setClassName.appendChild(classNameTxt);

    addSetmodal.className = 'hidden';
    modalBackdrop.className = 'hidden';
    modalInputText.value = '';
  }
});
