let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;

let tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

let campo = $(".campo-digitacao");
campo.on('click', function(){
    let conteudo = campo.val();
    let qtdPalavras = conteudo.split(" ").length;
    $("#contador-palavras").text(qtdPalavras);
});