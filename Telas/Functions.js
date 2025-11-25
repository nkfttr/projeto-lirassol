function voltarMenu() {
    window.location.href="\\projeto-lirassol\\index.html"
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

// ---------------------------------------------------------------------------------------\\
// tabela de preços médios de reciclagem - R$/tonelada
const precosReciclagem = {
    //RESIDUO: R$ POR TONELADA
    // organico: 120R$ /tonelada
    organico: 120,   // composto orgânico
    plastico: 900,
    papel: 850,
    metal: 2500,
    vidro: 180,
    eletronico: 3500
};

// fatores ambientais
// toneladas co2 e MWh por tonelada reciclada
const fatoresAmbientais = {
    organico: { co2: 0.05, energia: 0.2 },
    plastico: { co2: 2.5, energia: 2.8 },
    papel:    { co2: 1.1, energia: 1.9 },
    metal:    { co2: 4.0, energia: 8.5 },
    vidro:    { co2: 0.3, energia: 0.4 },
    eletronico: { co2: 6.0, energia: 12.0 }
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculadoraForm');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // pegar os valores do residuo selecionado
        const tipoResiduo = document.querySelector('input[name="residuo"]:checked').value;
        const volume = parseFloat(document.getElementById('volume').value);
        const custoColeta = parseFloat(document.getElementById('custo').value);

        // calculos financeiros
        // calcula com base nos valores do produto
        const precoTon = precosReciclagem[tipoResiduo];
        const receitaMensal = volume * precoTon;
        const lucroMensal = receitaMensal - custoColeta;
        const lucroAnual = lucroMensal * 12;

        // calculos ambientais
        //calcula com base nos valores ambientais descritos em const fatoresAmbientais
        const { co2, energia } = fatoresAmbientais[tipoResiduo];
        const co2Reduzido = (volume * co2).toFixed(1);
        const energiaPoupada = (volume * energia).toFixed(1);

        // preencher resultado
        document.getElementById('lucroMensal').textContent =
            `R$ ${lucroMensal.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} por mês`;
        document.getElementById('lucroMensal').style.color = lucroMensal >= 0 ? '#145e24' : '#dc3545';

        document.getElementById('lucroAnual').textContent =
            `R$ ${lucroAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})} retorno anual`;

        document.getElementById('co2').textContent = `${co2Reduzido.replace('.', ',')}t`;
        document.getElementById('energia').textContent = `${energiaPoupada.replace('.', ',')} MWh`;
        document.getElementById('residuoTotal').textContent = `${volume.toFixed(1).replace('.', ',')}t resíduos reciclados mensalmente`;

        // mostrar resultado e rolar
        resultado.style.display = 'block';
        setTimeout(() => {
            resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    });
});