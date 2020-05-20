var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

function inicializaMarcadores() {
    campo.on("input", function () {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function atualizaTamanhoFrase(){
    let frase = $(".frase").text();
    let numPalavras = frase.split(" ").length;

    let tamanhoFrase = $('#tamanho-frase');
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function () {
        let conteudo = campo.val();

        let qtdPalavras = conteudo.split(" ").length;
        $("#contador-palavras").text(qtdPalavras);

        let qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    campo.one("focus", function () {
        var tempoRestante = $("#tempo-digitacao").text();
        let cronometroID = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                inserePlacar();
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.toggleClass("campo-desativado");
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");

    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}
$("#botao-reiniciar").click(reiniciaJogo);

$(document).ready(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);

    atualizaPlacar();

    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });
});