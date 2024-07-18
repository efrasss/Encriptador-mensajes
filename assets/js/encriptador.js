const d = document;
const textArea = d.querySelector('.form_input');
const imagenMuneco = d.querySelector('.result_img');
const loaderRetro = d.querySelector('.loader');
const resultTitle = d.querySelector('.result_title');
const resultText = d.querySelector('.result_text');
const btnEncriptar = d.querySelector('.form_btn');
const btnDesencriptar = d.querySelectorAll('.form_btn');
const btnCopiar = d.querySelector('.result_btn');

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Funcion para completar
function encriptadorMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;    
    }

    return mensajeEncriptado;
}

// Funcion para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
// Ocultar elementos dinamicamente
textArea.addEventListener('input', (e) => {
    imagenMuneco.style.display = 'none';
    loaderRetro.classList.remove('hidden');
    resultTitle.textContent = 'Capturando Mensaje.';
    resultText.textContent = "";
})
// funcion boton encriptar
btnEncriptar.addEventListener('click', (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptadorMensaje(mensaje);
    resultText .textContent = mensajeEncriptado;
    btnCopiar.classList.remove('hidden');
    resultTitle.textContent = 'El resultado es:';
})
// Funcion boton desencriptar
btnDesencriptar[1].addEventListener('click', (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    resultTitle.textContent = 'El resultado es:';
    btnCopiar.classList.remove('hidden');
})
btnCopiar.addEventListener('click', () => {
    let textoCopiado = resultText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        imagenMuneco.style.display = 'block';
        loaderRetro.classList.add('hidden');
        resultTitle.textContent = "El texto fue copiado!";
        btnCopiar.classList.add('hidden');
        resultText.textContent = '';
    })
})