const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbz-KotxTxPs_lZOYBPU27kATinLz4YI8omrKQwWlxN2vPGqiRBjF1aDU0AJQ_V3VyiT/exec';

function submitRating(score) {
    // Se o cliente clicar em 1, 2 ou 3, redireciona para o inquérito detalhado
    if (score <= 3) {
        window.location.href = 'inquerito.html?score=' + score;
    } else {
        // Se clicar em 4 ou 5, regista diretamente no Excel e vai para o agradecimento
        document.getElementById('survey-section').style.display = 'none';
        document.getElementById('loading-msg').style.display = 'block';
        
        const formData = new FormData();
        formData.append('score', score);
        
        fetch(urlGoogleScript, { method: 'POST', body: formData })
        .then(() => window.location.href = 'agradecimento.html')
        .catch(err => console.error(err));
    }
}
