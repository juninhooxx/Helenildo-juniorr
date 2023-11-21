function validaFormulario(){
        const nome = document.getElementById("nome").value;
        const email = document.querySelector("#email").value;
        const senha = document.getElementsByClassName("senha").value;
        
        console.log(senha)
}
        //validação de campos vazios
        if(nome == '' || email == '' || senha == ''){
            alert("Por favor, preencha os campos vazios!")
        }