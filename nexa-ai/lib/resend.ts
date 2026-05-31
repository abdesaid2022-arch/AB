import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name?: string) {
  await resend.emails.send({
    from: 'Nexa AI <onboarding@nexa.ai>',
    to: email,
    subject: 'Welcome to Nexa AI',
    html: `<p>Hello ${name || ''},</p><p>Welcome to Nexa AI! Your intelligent business OS is ready.</p>`
  });
}
