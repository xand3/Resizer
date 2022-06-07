$("#cep").on("blur", function () {
    let numCep = $("#cep").val().replace(/\D/g, '');

    let validaCep = /^[0-9]{8}$/;

    if (validaCep.test(numCep)) {
        let url = "https://viacep.com.br/ws/" + numCep + "/json/";
        console.log(numCep);
        $.ajax({
            url: url,
            type: "get",
            dataType: "json",

            success: function (dados) {
                console.log(dados);
                $("#uf").val(dados.uf);
                $("#localidade").val(dados.localidade);
                $("#bairro").val(dados.bairro);
                $("#logradouro").val(dados.logradouro);
            },
        });
    }
    else {
        alert("Formato de CEP inválido.")
    }
});
