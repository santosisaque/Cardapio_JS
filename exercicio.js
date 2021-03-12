function cadastrarPedido() {

    var pedido = { Carboidrato: "", ProteínaVegetal: "", ProteínaAnimal: "", HortaliçaseLegumes: "", Pagamento: "" };

    pedido.Carboidrato = document.querySelector("#txtCarboidrato").value;
    pedido.ProteínaAnimal = document.querySelector("#txtProteinaAnimal").value;
    pedido.ProteínaVegetal = document.querySelector("#txtProteinaVegetal").value;
    pedido.HortaliçaseLegumes = document.querySelector("#txtHortalicaseLegumes").value;
    pedido.Pagamento = document.querySelector("#txtPagamento").value;
  
    if(pedido.Carboidrato && pedido.ProteínaVegetal && pedido.ProteínaAnimal && pedido.HortaliçaseLegumes && pedido.Pagamento) {

        var listaPedido = [];

        listaPedido.push(pedido);

        listarPedido(listaPedido);

        limparTela();
    }
}

function listarPedido(listaPedido) {

    var div = document.querySelector('#dvResultados');
    div.innerText = "";

    for (var i = 0; i < listaPedido.length; i++) {
        div.innerText += "\n" + "Carboidrato:" + listaPedido[i].Carboidrato +
            " ProteínaAnimal: " + listaPedido[i].ProteínaVegetal +
            " ProteínaVegetal: " + listaPedido[i].ProteínaAnimal +
            " HortaliçaseLegumes: " + listaPedido[i].HortaliçaseLegumes +
            " Pagamento: " + listaPedido[i].Pagamento;
    }
}

function limparTela() {

    document.querySelector("#txtCarboidrato").value = "";
    document.querySelector("#txtProteinaAnimal").value = "";
    document.querySelector("#txtProteinaVegetal").value = "";
    document.querySelector("#txtHortalicaseLegumes").value = "";
    document.querySelector("#txtPagamento").value = "";
}
