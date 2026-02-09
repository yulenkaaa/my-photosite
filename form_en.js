const TOKEN = "8187248972:AAGW_CTDCs3KiSimikjclfhm-9RO0oXm6Bk";
const CHAT_ID = "1344739217";
document.getElementById("photoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;

  const text = `
🔻🔻🔻 NEW REQUEST 🔻🔻🔻

Full Name: ${form.fullname.value}
Phone Number: ${form.phone.value}
Contact: ${form.contact.value}
Type of Photoshoot: ${form.session.value}
Package: ${form.package.value}
Date: ${form.date.value}
Time: ${form.time.value}
Comment: ${form.message.value}
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
    document.getElementById("status").innerText = "✅ Your request has been sent";
    form.reset();
  })
  .catch(() => {
    document.getElementById("status").innerText = "❌ Error, please try again";
  });
});