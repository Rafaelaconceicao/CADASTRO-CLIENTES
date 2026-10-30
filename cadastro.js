function funcaoCadastrarCliente(){
    // identifica os campos no HTML e pega os valores.
    const nome= document.getElementById('nome').value
    const email= document.getElementById('email').value
    const telefone= document.getElementById('telefone').value

    // Verifica se os campos estão vazios.
    // Mostra mensagem de alerta no navegador.
    if(!nome || !email || !telefone)
        alert('Por favor, preencha os campos.')
        return

}


// cria uma variável com os dados do cliente.
const novoCleiente= {nome, email, telefone}

// Pega a lista de clientes já existente ou cria uma vazia.
let listaClientes= JSON.parse(localStorage.getitem('clientes')) || []

// Adiciona um novo cliente na lista.
listaClientes.push(novoCliente)

// Salva no localStorage ( Armazenamento local no navegador)
localStorage.setitem('clientes', JSON.stringify(listaClientes))

// Mensagem do navegador confirmando salvamento
alert ('Cliente cadastrado com sucesso!')

//Limpa o forumulário
document.getElementById('formulario-cadastro').reset()
