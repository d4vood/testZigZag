let telegram_bot_id = '6190131547:AAE_WAKVQmExNBmq-6Df6R2-7SIUWcBbXMg';

let chat_id = 962815011;
let message;
let ready = function () {
  let home_project, interior_design, consultation, interest = [], u_name, email, social, number;
  home_project = document.getElementById('home_project').checked;
  interior_design = document.getElementById('interior_design').checked;
  consultation = document.getElementById('consultation').checked;
  if (home_project) interest.push('Проект дома');
  if (interior_design) interest.push('Дизайн интерьера');
  if (consultation) interest.push('Консультация');
  u_name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  social = document.getElementById('social').value;
  number = document.getElementById('number').value;
  message = 'Что интересует: ' + interest.join(', ') + '\nФИО: ' + u_name + '\nЭлектронная почта: ' + email + '\nМессенджер: '
    + social + '\nТелефон: ' + number;
};
let sendtelegram = async function () {
  ready();
  let settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    'data': JSON.stringify({
      'chat_id': chat_id,
      'text': message,
    }),
  };
  await $.ajax(settings).done(function (response) {
    const className = response.ok ? 'success' : 'error';
    const message = response.ok ? 'Данные были отправлены успешно!' : 'Произошла ошибка при отправке данных!';
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.classList.add(className);
      alert.innerHTML = message;
      setTimeout(() => {
        alert.classList.remove(className);
        alert.innerHTML = '';
      }, 3000);
    }
  });
  document.getElementById('home_project').checked = false;
  document.getElementById('interior_design').checked = false;
  document.getElementById('consultation').checked = false;
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('social').value = '';
  document.getElementById('number').value = '';
  return false;
};
