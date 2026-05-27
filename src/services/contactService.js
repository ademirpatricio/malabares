import emailjs from "@emailjs/browser";

export async function sendContactForm(data) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are missing.");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: data.name,
      email: data.email,
      instagram: data.instagram,
      service: data.service,
      message: data.message,
    },
    publicKey
  );
}

export async function sendLeadCaptureForm(data) {
  return sendContactForm({
    name: data.name,
    email: data.email,
    instagram: data.whatsapp,
    service: "Análise gratuita da presença digital",
    message: `
WhatsApp: ${data.whatsapp}
Empresa ou negócio: ${data.company}

O que gostaria de melhorar:
${data.objective}
    `.trim(),
  });
}
