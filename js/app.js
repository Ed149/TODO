'use strict'

window.addEventListener('load',()=>{
    const formList = document.getElementById('add');
    const list = document.querySelector('.list');
    const inpV = document.getElementById('addInput');
    const iv = document.getElementsByTagName('i');

    
    formList.addEventListener('click',()=>{
        let valor = inpV.value;
        if(valor.length > 1){
            localStorage.setItem(valor,valor);
        }
        
    });
    for (let i in localStorage) {
        console.log(localStorage[i]);
        if (typeof localStorage[i] == 'string') {
            var li = document.createElement('li');
            li.append(localStorage[i]);

            var icon = document.createElement('i');
            icon.id = localStorage[i];
            icon.classList = "fas fa-times del";

            li.appendChild(icon);
            list.appendChild(li);
            
             
        }


    }
    
    for(let j = 0; j < iv.length; j++){
        iv[j].addEventListener('click',()=>{
            let ivVal = iv[j].getAttribute('id');
            localStorage.removeItem(ivVal);
            location.reload();
        });
    }

});