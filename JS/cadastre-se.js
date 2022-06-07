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

let email = $("#email")
function validaEmail(email){
    var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {
        alert("Email invalido")
    }
}