/* function encriptar(){
    var str = "12345";
  [].map
  .call(str, function (x) {
    return x;
  })
  .reverse
}

console.log(encriptar);
 */

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

let string = document.getElementById('textArea');
let cuadroRespuesta = document.getElementById('resp');
let cuadroNoRespuesta = document.getElementById('no-resp');
let cuadroSiRespuesta = document.getElementById('si-resp');

function encriptar() {
    console.log(string.value);
    
    let palabra = string.value.split('');
    
    let conversion = palabra.map(a => {
        if(a == 'a') {
            return 'ai';
        }
        else if(a == 'e') {
            return 'enter';
        }
        else if(a == 'i') {
            return 'imes';
        }
        else if(a == 'o') {
            return 'ober';
        }
        else if(a == 'u') {
            return 'ufat';
        } else {
            return a; 
        }
    });

    
    cuadroRespuesta.innerHTML = conversion.join('');
    cuadroNoRespuesta.style.display = 'none';
    cuadroSiRespuesta.style.display = 'block';
}


function desencriptar() {
   
    const claves = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    
    let desencriptada = string.value;

    
    for (let i in claves) {
        let valor = claves[i];
        desencriptada = desencriptada.split(i).join(valor);
    }

    cuadroRespuesta.innerHTML = desencriptada;
    cuadroNoRespuesta.style.display = 'none';
    cuadroSiRespuesta.style.display = 'block';
}


function copiar() 
{
    navigator.clipboard.writeText(cuadroRespuesta.innerHTML);
}


/* string = 'gato';
let palabra_encriptada = encriptar(string);
console.log(palabra_encriptada);  */


