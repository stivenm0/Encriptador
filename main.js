let result= document.querySelector('.box-result')
let area= document.querySelector('textarea')
let copy= document.querySelector('.btn-copy')

function accion(e){
    e.preventDefault()
    let text = area.value.toLowerCase();

    if(e.submitter.name === 'encriptar'){
        text = text.replace(/e/g, 'enter');
        text = text.replace(/i/g, 'imes');
        text = text.replace(/a/g, 'ai');
        text = text.replace(/u/g, 'ufat');
        text = text.replace(/o/g, 'ober');
    }else{
        text = text.replace(/enter/g, 'e');
        text = text.replace(/imes/g, 'i');
        text = text.replace(/ai/g, 'a');
        text = text.replace(/ufat/g, 'u');
        text = text.replace(/ober/g, 'o');
    }
    result.classList.add('a')
    result.innerText = text
    copy.disabled= false;
}

function copiarAlPortapapeles() {
    var seleccion = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(result);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand('copy');
  }
  
  
function dark(){
    let value= document.documentElement.style.getPropertyValue('--background');

    if(value=== '#0A1427'){
        document.documentElement.style.setProperty('--background', '#d1d1d1')
        document.documentElement.style.setProperty('--text', '#141313')
    }else{
        document.documentElement.style.setProperty('--background', '#0A1427')
        document.documentElement.style.setProperty('--text', '#d1d1d1')

    }
}