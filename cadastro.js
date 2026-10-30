function funcaoCadastrarCliente() {
    const formulario = document.getElementById('formulario-cadastro')
    const nome = formulario.elements.nome.value.trim()
    const email = formulario.elements.email.value.trim()
    const telefone = formulario.elements.telefone.value.trim()

    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos.')
        return
    }

    const novoCliente = {nome, email, telefone}
    let listaClientes

    try {
        listaClientes = JSON.parse(localStorage.getItem('clientes') || '[]')
        if (!Array.isArray(listaClientes)) listaClientes = []
    } catch {
        listaClientes = []
    }

    listaClientes.push(novoCliente)
    localStorage.setItem('clientes', JSON.stringify(listaClientes))
    alert('Cliente cadastrado com sucesso!')
    formulario.reset()
}

document.getElementById('formulario-cadastro').addEventListener('submit', (event) => {
    event.preventDefault()
    funcaoCadastrarCliente()
})