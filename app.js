let searchField;
let resultsContainer;
let userInput;
window.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("button1");
    resultsContainer = document.getElementById("result")
    searchField = document.getElementById("search-container")
    console.log(button);
    button.addEventListener('click',getHeroes);
}); 


// let xmlRequest = function(){
//     const httpRequest = new XMLHttpRequest();
//     let url = "http://localhost/info2180-lab4/superheroes.php";
//     httpRequest.onreadystatechange = function(){
//         if (httpRequest.readyState === XMLHttpRequest.DONE) {
//             if (httpRequest.status === 200) {
//                 let response = httpRequest.responseText;
//                 alert(response);
//             } else {
//                 alert('There was a problem with the request.');
//             }
//         }
//     };
//     httpRequest.open('GET', url);
//     httpRequest.send();
// }
// let ajaxRequest = function(){
//     $.ajax("http://localhost/info2180-lab4/superheroes.php")
//     .done(function(result) {
//         alert(result);
//     }).fail(function(result) {
//         alert('There was a problem with the request.');
//     });
// }
// let fetchRequest = function(){
//     fetch('http://localhost/info2180-lab4/superheroes.php').then(response => response.text())
//     .then(data => {
//         alert(data);
//     })
//     .catch(error => {
//         alert('There was a problem with the request.');
//  });
// }

function getHeroes(e){
    e.preventDefault();
    userInput = searchField.value.toUpperCase();
    $.ajax({
        url: 'superheroes.php',
        type: 'get',
        data:{query: userInput},
        success: function(data) {
            superOutput(data);
        },
        error: function(err) {
            alert(err);
        }
    })
}

function superOutput(superheroes){
    clearResults(resultsContainer);
    let div = document.createElement("div");
    div.innerHTML = superheroes;
    resultsContainer.appendChild(div);
}


function clearResults(parentDiv){
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
}
