const TOKEN = "8187248972:AAGW_CTDCs3KiSimikjclfhm-9RO0oXm6Bk";
const CHAT_ID = "1344739217";
document.getElementById("photoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;

  const text = `
🔻🔻🔻 НОВА ЗАЯВКА 🔻🔻🔻

Ім'я: ${form.fullname.value}
Номер телефону: ${form.phone.value}
Зв'язатися: ${form.contact.value}
Тип фотосесії: ${form.session.value}
Пакет: ${form.package.value}
Дата: ${form.date.value}
Час: ${form.time.value}
Коментар: ${form.message.value}
  `;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  })
  .then(() => {
    document.getElementById("status").innerText = "✅ Заявку надіслано";
    form.reset();
  })
  .catch(() => {
    document.getElementById("status").innerText = "❌ Помилка, спробуйте ще раз";
  });
});