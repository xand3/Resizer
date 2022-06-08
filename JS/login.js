$("#recuperar").on("click", function(){
    let email = $("#email").val()
    let teste = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let resultado = teste.test(email)

    if(resultado == false) {
        alert("Digite um e-mail valido")
    } 
})