function voltarMenu() {
    window.location.href="PrimeiraTela.html"
}
// ---------------------------------------------------------------------------------------\\
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.cadastro-form');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmar-senha');
    const termos = document.getElementById('termos');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (senha.value !== confirmarSenha.value) {
            alert('As senhas não coincidem. Por favor, verifique.');
            confirmarSenha.focus();
            return;
        }

        if (!termos.checked) {
            alert('Você precisa aceitar os termos de uso e política de privacidade.');
            return;
        }

        if (senha.value.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        realizarCadastro();
    });

    // Validação em tempo real das senhas
    confirmarSenha.addEventListener('input', function() {
        if (senha.value !== confirmarSenha.value) {
            confirmarSenha.style.borderColor = '#fc8181';
            confirmarSenha.style.background = '#fed7d7';
        } else {
            confirmarSenha.style.borderColor = '#48bb78';
            confirmarSenha.style.background = '#f0fff4';
        }
    });
});

function realizarCadastro() {
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const email = document.getElementById('email').value;

    // Simular cadastro (Nico, temo q coloca o baguio bonitinho dai)
    const dadosCadastro = {
        nome: nome,
        empresa: empresa,
        email: email,
        timestamp: new Date().toISOString()
    };

    console.log('Dados para cadastro:', dadosCadastro);
    alert(`Cadastro realizado com sucesso!\n\nBem-vindo(a), ${nome}!\n\nEm breve você receberá um email de confirmação.`);

    // Redirecionar pro login (Tenho que fazer a parte do login ainda kkkkk)
    window.location.href = 'PrimeiraTela.html';
}