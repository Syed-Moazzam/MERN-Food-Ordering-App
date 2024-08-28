import transporter from '../nodemailerConfig.js';

const sendEmail = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        console.log('user email', email);

        await transporter.sendMail({
            from: `${username} <${email}>`,
            to: process.env.USER,
            subject: 'Contacting Via Food Ordering Application',
            html: `<h2>${message}</h2>`
        });
        return res.send({ status: 'success', message: 'Message Sent Successfully' });

    } catch (error) {
        return res.send({ status: 'error', message: error.message });
    }
}

export { sendEmail };