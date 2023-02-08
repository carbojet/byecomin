import nodemailer from 'nodemailer';

const Mail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        port: process.env.MAIL_PORT,
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
        secure: false,
    });

    const mailData = {
        to: `${process.env.MAIL_USERNAME}`,
        from: `"Byecom contact page" <${process.env.MAIL_USERNAME}>`,
        subject: `Message From ${req.body.Name}`,
        html: `<p>Name: ${req.body.Name}</p><p>Email: ${req.body.UserEmail}</p><p>Company: ${req.body.Company}</p><p>Country: ${req.body.Country}</p><p>Message: ${req.body.Message}</p>`,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error)
            return res
                .status(400)
                .send({ message: 'Something went wrong!!', error });
        else
            return res
                .status(200)
                .send({ message: 'Your request has been submitted!!', info });
    });
};

export default Mail;
