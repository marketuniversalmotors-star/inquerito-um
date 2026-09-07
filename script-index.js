const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbz-KotxTxPs_lZOYBPU27kATinLz4YI8omrKQwWlxN2vPGqiRBjF1aDU0AJQ_V3VyiT/exec';

function submitRating(score) {
    if (score <= 3) {
        document.getElementById('survey-section').style.display = 'none';
        document.getElementById('loading-msg').style.display = 'block';
        
        const formData = new FormData();
        formData.append('score', score);
        
        fetch(urlGoogleScript, { method: 'POST', body: formData })
        .then(() => window.location.href = 'agradecimento.html')
        .catch(err => console.error(err));
    } else {
        window.location.href = 'inquerito.html?score=' + score;
    }
}
