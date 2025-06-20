document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let senha = document.getElementById('senha').value.trim();

    let isValid = true;

    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-telefone').textContent = '';
    document.getElementById('error-senha').textContent = '';

    if (nome === '') {
        document.getElementById('error-nome').textContent = 'Campo obrigatório!';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('error-email').textContent = 'Campo obrigatório!';
        isValid = false;
    }

    if (telefone === '') {
        document.getElementById('error-telefone').textContent = 'Campo obrigatório!';
        isValid = false;
    }

    if (senha === '') {
        document.getElementById('error-senha').textContent = 'Campo obrigatório!';
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});
