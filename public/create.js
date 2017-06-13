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
var statusSets = document.getElementById('status');

function addStudySet() {
  if (modalInputText.value === "") {
    window.alert("One of your fields is blank. Fill everything out!");
    modalBackdrop.className= '';
  }
  else {
    var mainContainer = document.querySelector('.mainContainer');
    var studyCardLink = document.createElement('a');
    studyCardLink.setAttribute('href', 'card.html');
    studyCardLink.classList.add('studycardlink');
    var setContainer = document.createElement('div');
    setContainer.classList.add('setContainer');
    var setClassName = document.createElement('p');
    var classNameTxt = document.createTextNode(modalInputText.value);


    mainContainer.appendChild(studyCardLink);
    studyCardLink.appendChild(setContainer);
    setContainer.appendChild(setClassName);
    setClassName.appendChild(classNameTxt);

    addSetmodal.className = 'hidden';
    modalBackdrop.className = 'hidden';


    var postRequest = new XMLHttpRequest();

    postRequest.open('POST', '/classes/addclass');
    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function(event) {
      var error;
      if(event.target.status !== 200) {
         error = event.target.response;
      }
      callback(error);
    });

   var postBordy = {
         key: modalInputText.value,
         class: modalInputText.value
   };

   postRequest.send(JSON.stringify(postBordy));

   modalInputText.value = '';
   }

}


createModal.addEventListener('click', addStudySet);
