// Скрипт для плавной прокрутки к секции при клике на кнопку
document.querySelector('.cta-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Обработка отправки формы с показом сообщения
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвратить обычную отправку формы
    
    const formData = new FormData(this);
    const formAction = this.getAttribute('action');
    
    fetch(formAction, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response-message').innerText = 'Сообщение отправлено успешно!';
        document.getElementById('response-message').style.color = 'green';
        this.reset();
    })
    .catch(error => {
        document.getElementById('response-message').innerText = 'Ошибка при отправке сообщения. Попробуйте позже.';
        document.getElementById('response-message').style.color = 'red';
    });
});
