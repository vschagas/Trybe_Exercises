let button1 = document.getElementById('button1');
function disabledefault(event){
    event.preventDefault();
    console.log(event.target);
}button1.addEventListener('click', disabledefault);