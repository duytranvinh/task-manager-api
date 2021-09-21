const sgMail = require("@sendgrid/mail");

// const sendgridAPIKey =
//     "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: "duytranvinh@nhanhoc.org",
//     from: "sasukenaruto6996@gmail.com",
//     subject: "Test email",
//     text: "Okeokeoke"
// });

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "sasukenaruto6996@gmail.com",
        subject: "Thanks for joining in",
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "sasukenaruto6996@gmail.com",
        subject: "Sorry to see you go",
        text: `Sorry to see you go, ${name}`,
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};