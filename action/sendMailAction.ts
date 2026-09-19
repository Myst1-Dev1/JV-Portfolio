/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import nodemailer from 'nodemailer';

export async function sendMail(prevState: any, formData: FormData) {
  const name = formData.get('fullName') as string;
  const subject = formData.get('subject') as string;
  const description = formData.get('description') as string;

  if (!name || !description) {
    return { success: false, error: 'Preencha todos os campos obrigatórios.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jvsoftdev15@gmail.com',
      subject: `Nova mensagem de contato: ${subject || name}`,
      text: `Nome: ${name}\n\nMensagem:\n${description}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0c0e15; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #38bdf8;">Nova Proposta / Contato Recebido</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Assunto/Email:</strong> ${subject}</p>
          <hr style="border-color: #1f2637;" />
          <p><strong>Descrição:</strong></p>
          <p style="background: #10131b; padding: 12px; border-radius: 6px; color: #d4d4d8;">${description.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'E-mail enviado com sucesso!' };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, error: 'Erro interno ao tentar enviar a mensagem.' };
  }
}