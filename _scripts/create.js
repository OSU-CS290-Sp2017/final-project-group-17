var addSetButton = document.querySelector('.addSetContainer');
var modalBackdrop = document.getElementById('modal-backdrop');
var addSetmodal = document.getElementById('addSet-modal');
var closeSetModal = document.getElementById('closeSetModal');

addSetButton.addEventListener('click', function(){
   addSetmodal.className = '';
   modalBackdrop.className = '';

})

closeSetModal.addEventListener('click', function(){
   addSetmodal.className = 'hidden';
   modalBackdrop.className = 'hidden';
})

var createModal = document.querySelector('.modal-create-button');
var modalInputElement = document.querySelector('.modal-input-element');
var modalInputText = document.getElementById('setclass-input');

createModal.addEventListener('click', function() {
  if (modalInputText.value === "") {
    window.alert("One of your fields is blank. Fill everything out!");
    modalBackdrop.className= '';
  }
  else {
    var box = document.querySelector('.addSetContainer');

    var Class = document.createElement('p');
    Class.classList.add('addSetButton');

    box.appendChild(Class);
  }
})
