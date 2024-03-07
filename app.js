const textArea = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".salidaTexto");

function btnEncriptar(){
    validacionTexto()
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
}


function encriptar(srtingEncriptarda){
    let matrizCodigo = [["u", "ufat"],["i", "imes"], ["e", "enter"], ["o", "ober"], ["a", "ai"]];
    srtingEncriptarda = srtingEncriptarda.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(srtingEncriptarda.includes(matrizCodigo[i][0])){
            srtingEncriptarda = srtingEncriptarda.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return srtingEncriptarda
}

function desencriptar(srtingDesencriptarda){
    let matrizCodigo = [["u", "ufat"],["i", "imes"], ["e", "enter"], ["o", "ober"], ["a", "ai"]];
    srtingDesencriptarda = srtingDesencriptarda.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(srtingDesencriptarda.includes(matrizCodigo[i][1])){
            srtingDesencriptarda = srtingDesencriptarda.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return srtingDesencriptarda
}

function copiarTexto() {
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    mensaje.value = ""
}

function validacionTexto() {
    const textoIngresado = textArea.value;
    var regex = /^[a-z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; // Letras minúsculas, espacios y otros caracteres especiales.
    
    if (!regex.test(textoIngresado)) {
        
        alert('El texto debe contener solo letras minúsculas, sin números, acentos ni mayúsculas.');
        textArea.value = "";
    } 
           
}