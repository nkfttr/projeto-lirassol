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

// ---------------------------------------------------------------------------------------\\
// Controle do Pop-Up
document.addEventListener('DOMContentLoaded', function() {
    const termosBtn = document.getElementById('termos-btn');
    const politicaBtn = document.getElementById('politica-btn');
    const termsPopup = document.getElementById('termsPopup');
    const closePopup = document.getElementById('closePopup');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const acceptTermsBtn = document.getElementById('acceptTerms');
    const acceptPrivacyBtn = document.getElementById('acceptPrivacy');
    const termosCheckbox = document.getElementById('termos');

    termosBtn.addEventListener('click', function(e) {
        e.preventDefault();
        termsPopup.style.display = 'flex';
        document.querySelector('.tab-btn[data-tab="terms"]').click();
    });

    politicaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        termsPopup.style.display = 'flex';
        document.querySelector('.tab-btn[data-tab="privacy"]').click();
    });

    closePopup.addEventListener('click', function() {
        termsPopup.style.display = 'none';
    });

    termsPopup.addEventListener('click', function(e) {
        if (e.target === termsPopup) {
            termsPopup.style.display = 'none';
        }
    });

    // Controle das abas
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            this.classList.add('active');

            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });

    acceptTermsBtn.addEventListener('click', function() {
        alert('Você aceitou os Termos de Uso');
        termsPopup.style.display = 'none';
    });

    acceptPrivacyBtn.addEventListener('click', function() {
        alert('Você aceitou a Política de Privacidade');
        termsPopup.style.display = 'none';
    });

    document.querySelector('.cadastro-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (termosCheckbox.checked) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Você precisa aceitar os termos e a política de privacidade');
        }
    });
});
