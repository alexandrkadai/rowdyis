import { EmailTemplate } from '@/app/components/email-template/emailResend';
import { Resend } from 'resend';

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({
  name,
  phone,
  email,
  message,
}: EmailTemplateProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kaldikonly@gmail.com'],
      subject: 'New Customer Message',
      react: EmailTemplate({ name, phone, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
