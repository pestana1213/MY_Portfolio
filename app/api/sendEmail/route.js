import { NextResponse } from 'next/server';
export async function GET(request) {
    if (request.url.length < 0)
        return new Response("Error"); // Unreachable
    return new Response("OK");
    // Do stuff
}
export async function POST(req){
    const request = await req.json();
    const mensagem = request.mensagem;
    const subject = request.subject;

    // Check if the code is running on the server side
    if (typeof window === 'undefined') {
        try {
        // Dynamically import nodemailer only on the server side
        const nodemailer = require('nodemailer');

        // Replace these values with your own email server configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
            },
        });
        

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_SEND_TO,
            subject: subject,
            html: mensagem || "Sem mensagem",
        };
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                reject(error);
                return new NextResponse('ERROR');
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info);
                return new NextResponse('OK');
            }
            });
        });
        return new NextResponse('ERROR');

        } catch (error) {
        console.error(error);
        return new NextResponse('ERROR');
        }
    }
    return new NextResponse('ERROR');
}