function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Seu-nome";
    var numPalavras = $("#contador-palavras").text();
    let linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function mostraPlacar() {
    $(".placar").slideToggle(600);
}

$("#botao-placar").click(mostraPlacar);
