let buttons = document.querySelectorAll('.buttons');
console.log(buttons);
function disabledefault(event){
    for (let button of buttons){
        button.addEventListener('click',function(event){console.log('ola');

        })

    } 
}disabledefault();