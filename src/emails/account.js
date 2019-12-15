const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'farhantahir3@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}.`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'farhantahir3@gmail.com',
        subject: 'You have successfully unsubscribed!',
        text: `Thanks for the using the app ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}