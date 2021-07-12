
let affirmationButton = document.querySelector('#affirmation');
let affirmationText = document.querySelector('#affirmation-data');
let affirmationURL = "https://type.fit/api/quotes"

let motivatedButton = document.querySelector('#motivated');
let motivatedURL = "https://image.winudf.com/v2/image/Y29tLnNhdGl2YS5rdW5nZnVwYW5kYV9zY3JlZW5fMF8xNTI1NzkwNzEyXzAzOQ/screen-0.jpg?fakeurl=1&type=.jpg"

let glumButton = document.querySelector('#glum');

affirmation.addEventListener('click', (event) => {
    fetch(affirmationURL, {
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        // console.log(data)
        let affirmationEntry = document.createElement("p");
        affirmationEntry.innerText = data[10].text;
        affirmationText.appendChild(affirmationEntry);
    })
})    

// affirmationText has length = 1643

//  TEXT SHUFFLE IDEA FROM STACKOVERFLOW:
function shuffle(affirmationText) {
  let currentIndex = affirmationText.length, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [affirmationText[currentIndex], affirmationText[randomIndex]] = [
      affirmationText[randomIndex], affirmationText[currentIndex]];
  }
  return affirmationText;
}

motivated.addEventListener('click', (event) => {
    fetch(affirmationURL, {
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        let affirmationEntry = document.createElement("p");
        affirmationEntry.innerText = data[4].text;
        affirmationText.appendChild(affirmationEntry);
    })
})   

// below is from https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e

let modalBtn = document.getElementById("modal-btn1")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

let modalBtnChill = document.getElementById("modal-btn2")
let modalChill = document.querySelector(".modal2")
let closeBtnChill = document.querySelector(".close-btn2")

modalBtnChill.onclick = function(){
  modalChill.style.display = "block"
}
closeBtnChill.onclick = function(){
  modalChill.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal2){
    modalChill.style.display = "none"
  }
}
