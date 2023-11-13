let searchField;
let resultsContainer;
let userInput;
window.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("button1");
    resultsContainer = document.getElementById("result")
    searchField = document.getElementById("search-container")
    button.addEventListener('click',getHeroes);
}); 



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
