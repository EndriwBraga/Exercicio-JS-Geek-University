// Exercicio 1
   let cliente = {
        nome : "Maria Braga",
        email : "xuxa@666.com",
        telefone : "+55 53 666-666",
        rua : "rua volte sempre",
        numero : 01,
        bairro : "pinhos",
        cidade : "sao paulo",
        uf : "SP",

       frase: function() {
           return console.log(console.log("A cliente " + cliente.nome + " mora em " + cliente.bairro + " no estado de " + cliente.uf + "." ));
       }
   };

// console.log(cliente.frase());

// //console.log("A cliente " + cliente.nome + " mora em " + cliente.bairro + " no estado de " + cliente.uf + "." )

// Exercicio 2
    function passandoPelosImpares() {
        for (var i = 0; i < 202; i++) {
            if ((i % 2) != 0) {
           console.log('aqui eu tenho o valor de ' + i);
        }
    }
}

 passandoPelosImpares();

// Exercicio 3

    function verificarExperiencia(){
    var idadeInformada = prompt("quanto tempo de experiencia voce tem? ");

    if (idadeInformada <= 2){
        alert("Você é considerado Junior com " + idadeInformada + " anos");
    } else if (idadeInformada > 2 && idadeInformada <= 5){
        alert("Você é considerado Pleno com " + idadeInformada + " anos");
    } else alert("Voce já é considerado Senior com " + idadeInformada + " anos de experiencia.");
}

verificarExperiencia();








