
window.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector("button");
    console.log(button);
    button.addEventListener('click',fetchRequest);
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
let fetchRequest = function(){
    fetch('http://localhost/info2180-lab4/superheroes.php').then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        alert('There was a problem with the request.');
 });
}

