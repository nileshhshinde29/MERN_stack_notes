const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'deanna99@ethereal.email',
            pass: 'Jg9vrhyE8WcyKTWs4C',
        },
    });

    let info = await transporter.sendMail({
        from: '"NHS mart" <nileshhshinde29@gmail.com>', // sender address
        to: "iam@gmail.com", // list of receivers
        subject: "Order placed", // Subject line
        text: "Your order has been placed. You will get your order at your address very soon", // plain text body
        html: "<p>Your order has been placed. You will get your order at your address very soon<p/><button>NHS mart</button>", // html body
        attachments: [
            {
                filename: 'image.jpg', // The name you want the file to be saved as when it is received
                path: '/home/am-pc-63/NHS/React/react_Interview_notes_prectice/myNotes/notes/online_mart.js/Backend/assets/image.jpg' // The path to the image file on your server
            }
        ]
    });

    res.json(info);
};

module.exports = sendMail;
