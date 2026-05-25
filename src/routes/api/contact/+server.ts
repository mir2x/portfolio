import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, message } = await request.json();

	if (!name || !email || !message) {
		return json({ error: 'All fields are required.' }, { status: 400 });
	}

	const { error } = await resend.emails.send({
		from: 'Portfolio Contact <onboarding@resend.dev>',
		to: 'mir.tanim.ahmed1@gmail.com',
		replyTo: email,
		subject: `Portfolio message from ${name}`,
		html: `
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
			<p><strong>Message:</strong></p>
			<p>${message.replace(/\n/g, '<br>')}</p>
		`
	});

	if (error) {
		console.error('Resend error:', error);
		return json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
	}

	return json({ success: true });
};
