var peso = document.getElementById('peso');
var combobox = document.getElementById('comboboxPlanetas');
var calcular = document.getElementById('calcular');

calcular.addEventListener('click', adicionar);

function adicionar(){
    var p = document.getElementById('pResultado');

    if(combobox.value == 0){
        combobox.innerText = '';
        p.innerText = '';
        p2.innerHTML = '';
        console.log(p);
    }

// Desisti, mas eu sei que consigo resolver , desculpa professor ;/
}
