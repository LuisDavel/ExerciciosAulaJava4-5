var combobox = document.getElementById('combobox');

combobox.addEventListener('change', adicionar);

function adicionar(){
    var p = document.getElementById('paragrafo1');
    var p2 = document.getElementById('paragrafo2');
    
    if(combobox.value == '0'){
        p.innerText = '';
        p2.innerHTML = '';
        console.log(p);
        console.log(p2);
    }

    if(combobox.value == '1'){
        p.innerText = 'Paraná';
        p2.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg" alt="Imagem PR" width=180 height=120>';
        console.log(p);
        console.log(p2);
    }

    if(combobox.value == '2'){
        p.innerText = 'Rio Grande do Sul';
        p2.innerHTML = '<img src="https://www.blackangelsl.net/wp-content/uploads/2012/05/Bandeira-RS.jpg" alt="Imagem RS" width=180 height=120>';
        console.log(p);
        console.log(p2);
    }
        
    if(combobox.value == '3'){
        p.innerText = 'Santa Catarina';
        p2.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bandeira_de_Santa_Catarina.svg/1200px-Bandeira_de_Santa_Catarina.svg.png" alt="Imagem SC" width=180 height=120>';
        console.log(p);
        console.log(p2);
    }
}
