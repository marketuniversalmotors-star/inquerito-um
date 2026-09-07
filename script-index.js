const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbz-KotxTxPs_lZOYBPU27kATinLz4YI8omrKQwWlxN2vPGqiRBjF1aDU0AJQ_V3VyiT/exec';

function submitRating(score) {
    if (score <= 3) {
        // Gera um token único para rastrear esta resposta
        const token = 'tok_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
        
        // Envia o voto IMEDIATAMENTE para o Excel em segundo plano (caso o cliente desista a meio)
        const formData = new FormData();
        formData.append('score', score);
        formData.append('token', token);
        
        fetch(urlGoogleScript, { method: 'POST', body: formData })
        .catch(err => console.error(err));

        // Redireciona para o inquérito levando o score e o token
        window.location.href = `inquerito.html?score=${score}&token=${token}`;
    } else {
        // Notas 4 e 5 continuam a ir direto ao Excel e agradecimento
        document.getElementById('survey-section').style.display = 'none';
        document.getElementById('loading-msg').style.display = 'block';
        
        const formData = new FormData();
        formData.append('score', score);
        
        fetch(urlGoogleScript, { method: 'POST', body: formData })
        .then(() => window.location.href = 'agradecimento.html')
        .catch(err => console.error(err));
    }
}
