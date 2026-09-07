const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbz-KotxTxPs_lZOYBPU27kATinLz4YI8omrKQwWlxN2vPGqiRBjF1aDU0AJQ_V3VyiT/exec';

function submitRating(score) {
    if (score <= 3) {
        // Esconde os botões e mostra o aviso de carregamento
        document.getElementById('survey-section').style.display = 'none';
        document.getElementById('loading-msg').style.display = 'block';
        
        const formData = new FormData();
        formData.append('score', score);
        
        // Envia para o Excel e avança para o agradecimento
        fetch(urlGoogleScript, { method: 'POST', body: formData })
        .then(() => window.location.href = 'agradecimento.html')
        .catch(err => console.error(err));
    } else {
        // Redireciona para o inquérito e envia a nota no URL
        window.location.href = 'inquerito.html?score=' + score;
    }
}
