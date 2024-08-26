const texteArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// Função para criptografar o texto
function btnEncriptar() {
    const textoEncriptado = encriptar(texteArea.value);
    mensagem.value = textoEncriptado;
    texteArea.value = "";
    atualizarImagem(); // Atualiza a visibilidade da imagem
}

// Função que realiza a criptografia
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

// Função para descriptografar o texto
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(texteArea.value);
    mensagem.value = textoDesencriptado;
    texteArea.value = "";
    atualizarImagem(); // Atualiza a visibilidade da imagem
}

// Função que realiza a descriptografia
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

// Função para atualizar a visibilidade da imagem
function atualizarImagem() {
    if (mensagem.value.trim() === "") {
        mensagem.classList.remove("esconder-imagem");
    } else {
        mensagem.classList.add("esconder-imagem");
    }
}

