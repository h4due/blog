let users = [
    {email: 'krapivin.kolia@gmail.com',
     password: 'krapivin',
    },
    
];

document.getElementById('btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const passwd = document.getElementById('passwd').value;

    let counter = 0;
    users.forEach(el => {
        if (el.email === email && el.password === passwd) {
            document.getElementById('email').value = '';
            document.getElementById('passwd').value = '';
            counter++;
        }
   });
    if (counter === 0) {
        alert('Неудачная авторизация');
    }
    else {
        alert('Успешная авторизация');
        
window.location.href = 'index.html';

    } 
});

document.getElementById('btn-register').addEventListener('click', () => {
    const email = document.getElementById('email-register').value;
    const passwd = document.getElementById('passwd-register').value;

    let newUser = {email: email, password: passwd};
    users.push(newUser);
    alert('Вы успешно зарегестрировали нового пользователя');
    document.getElementById('email-register').value = '';
    document.getElementById('passwd-register').value = '';
})

document.getElementById('register').addEventListener('click', () => {
    document.getElementById('registration').style.display = 'inline';
    document.getElementById('entrance').style.display = 'none';
});

document.getElementById('enter').addEventListener('click', () => {
    document.getElementById('entrance').style.display = 'inline';
    document.getElementById('registration').style.display = 'none';
});

const form = document.getElementById("form");
const textarea = document.getElementById("textarea");
const message = document.getElementById("messages");

form.onsubmit = function () {
    if (textarea.value) {
        const message = document.createElement ("p");
        message.innerHTML = textare.value;
        message.appendChild(message);
        textarea.value = " ";
        textarea.focus()
    }
    return false;
}