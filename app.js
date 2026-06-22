// SENIOR MAN — shared behaviour
// No backend on this static build, so the contact form routes straight to
// WhatsApp with the visitor's details pre-filled. Swap WHATSAPP_NUMBER for
// the real line before launch.

const WHATSAPP_NUMBER = "2347037261934"; // your WhatsApp number, country code first, no leading 0 or +

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("field-name").value.trim();
    const email = document.getElementById("field-email").value.trim();
    const goals = document.getElementById("field-goals").value.trim();

    if (!name || !email || !goals) {
      const status = document.getElementById("form-status");
      if (status) {
        status.textContent = "Fill in every field so I know how to help.";
        status.classList.remove("hidden");
      }
      return;
    }

    const message =
      `New Senior Man inquiry\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Goals: ${goals}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", initContactForm);
