let executando = true

pessoas = []

while(executando){
 
  console.clear()
  
  console.log("=========== Menu ==================")
  console.log("1 - Cadastrar                      ")
  console.log("2 - Lista Pessoas                  ")
  console.log("3 - Remover Pessoas                ")
  console.log("4 - Sair                           ")
  console.log("===================================")

  let opcao = Number(prompt("Digite a opção"))

  switch(opcao) {
      
    case 1:
      
      cadastro()
      
      break
    
    case 2:
      
      listar()

      prompt("pressione alguma tecla ....")
      
      break

    case 3:
     
      remover()
      
      break  
      
    case 4:
      
      executando = false
      
      break
  }
  
}



//*******************************************
function cadastro(){

      console.log("\nCadastrar Pessoa")
      
      let nome = prompt("Digite o nome da pessoa") 
      
      this.pessoas.push(nome)
      
      // console.log(`"${nome}" cadastrada.`)
  
}



//*********************************************
function listar(){
     
      console.log("===================================")
      console.log("\nListagem de Pessoas       ")
      console.log("===================================")
      
      for (let [i, p] of this.pessoas.entries()) {
        
        console.log(i, p)
        
      }

      console.log("===================================")
      
}

//****************************************************
function remover(id){

  listar()

    let idPessoa = Number(prompt("Digite o id da pessoa a remover."))  
         
    this.pessoas.splice(idPessoa, 1)
  
}