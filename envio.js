/* Enviar dados do formulario */

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado ' + nome.value + ' suas informações foram encaminhados com sucesso, RETORNAREMOS EM BREVE!');
    }


}