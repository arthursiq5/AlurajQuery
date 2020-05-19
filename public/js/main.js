var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

let tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

let campo = $(".campo-digitacao");
campo.on('click', function(){
    console.log('cliquei no campo');
});