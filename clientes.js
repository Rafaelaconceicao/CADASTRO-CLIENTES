const listaElement = document.getElementById('lista-clientes')
let clientes = []

try {
    const clientesSalvos = JSON.parse(localStorage.getItem('clientes') || '[]')
    if (Array.isArray(clientesSalvos)) clientes = clientesSalvos
} catch {
    clientes = []
}

if (clientes.length === 0) {
    const itemVazio = document.createElement('li')
    itemVazio.textContent = 'Nenhum cliente cadastrado.'
    listaElement.appendChild(itemVazio)
} else {
    clientes.forEach((cliente) => {
        const item = document.createElement('li')
        const nome = document.createElement('strong')
        const contato = document.createElement('p')

        nome.textContent = cliente.nome || 'Nome não informado'
        contato.textContent = `E-mail: ${cliente.email || 'não informado'} | Telefone: ${cliente.telefone || 'não informado'}`
        item.append(nome, contato)
        listaElement.appendChild(item)
    })
}