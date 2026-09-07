const form = document.getElementById('surveyForm');
const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbz-KotxTxPs_lZOYBPU27kATinLz4YI8omrKQwWlxN2vPGqiRBjF1aDU0AJQ_V3VyiT/exec';

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault(); 
        
        const btn = form.querySelector('.submit-btn');
        btn.innerText = "A enviar..."; 
        
        const formData = new FormData(form);
        
        const urlParams = new URLSearchParams(window.location.search);
        const scoreDado = urlParams.get('score');
        
        if (scoreDado) {
            formData.append('score', scoreDado);
        }
        
        fetch(urlGoogleScript, { 
            method: 'POST', 
            body: formData 
        })
        .then(response => {
            window.location.href = 'agradecimento.html';
        })
        .catch(error => {
            console.error('Erro:', error);
            btn.innerText = "Erro ao enviar. Tente novamente.";
        });
    });
}
