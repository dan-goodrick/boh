import nodemailer from 'nodemailer'

const bohEmail = 'admin@buildersofhope.net'
const bohPassword = "BuildersofHope" //TODO get "App Password" specifically for this purpose. You can do this in your Google Account security settings. 
const sendEmail = async (req, res) => {
    const { email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: bohEmail,
                pass: bohPassword,
            },
        });

        const mailOptions = {
            from: bohEmail,
            to: "some@example.com", //TODO get from the form
            subject: 'Contact Builders of Hope',
            text: `Email: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.sendStatus(200);
    } catch (error) {
        console.error('Error sending email:', error);
        res.sendStatus(500);
    }
};

export default sendEmail
