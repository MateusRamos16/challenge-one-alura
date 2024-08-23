const textArea = document.querySelector('.campo-texto');
const saida = document.querySelector('.exibicao');

function criptografar(){
    let texto = textArea.value;
    let criptografia = texto.replace(/e/g, 'enter').replace(/i/g,"imes").replace(/a/g,"ai")
    .replace(/o/g,"ober").replace(/u/g,"ufat");

    document.querySelector('.exibicao').innerHTML = '<textarea readonly id="input-texto">' + criptografia +
    '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    let texto = textArea.value;
    let descripto = texto.replace(/enter/g, 'e').replace(/imes/g,"i").replace(/ai/g,"a")
    .replace(/ober/g,"o").replace(/ufat/g,"u");

    document.querySelector('.exibicao').innerHTML = '<textarea readonly id="input-texto">' + descripto +
    '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

    function copiar(){
        let textoCop = document.getElementById('input-texto').value;
        navigator.clipboard.writeText(textoCop);
        alert('Copiado com sucesso!');
    }