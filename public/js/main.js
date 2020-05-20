let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;

let tempoInicial = $("#tempo-digitacao").text();

let tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

let campo = $(".campo-digitacao");
campo.on('input', function(){
    let conteudo = campo.val();

    let qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
    let qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});

let tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function () {
    let cronometroID = setInterval(function () {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }
    }, 1000);
});

$("#botao-reiniciar").click(function () {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
});