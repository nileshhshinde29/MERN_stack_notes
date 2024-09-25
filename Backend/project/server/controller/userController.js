const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require('../app');
const axios = require('axios');
const fs = require('fs')
const { parse } = require('json2csv');
const PDFDocument = require('pdfkit');


const register = async (req, res) => {

    const { name, email, password, role } = req.body

    const emailExist = await User.findOne({ email });

    try {
        if (emailExist) {
            return res.status(400).json('email already exist!')
        }
        if (!name || !email || !password) {
            return res.status(400).json('validation error')
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const contact = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        })
        return res.status(200).json(contact)
    } catch (error) {
        return res.status(500).json({ 'server error': error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json('validation error')
    }
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json('user not exist')
    }

    try {
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign({
                email,
                id: user.id,
                role: user.role,
            }, process.env.SECRET_JWT_KEY, { expiresIn: "1d" })

            const refreshToken = jwt.sign({
                email,
                id: user.id,
                role: user.role,
            }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1m' });

            // Assigning refresh token in http-only cookie 
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });

            return res.status(200).json(accessToken)
            // return res.render('Home', { accessToken: accessToken }) // this is for ejs
        }
    } catch (error) {
        return res.status(500).json({ 'server error': error })
    }

}
const temp = async (req, res) => {
    res.send('hello');
};

const fetchDataAndSaveAsCSV = async (req, res) => {

    const response = await axios.get('http://localhost:8080/moment/get-moments');
    try {
        const data = response.data;

        const csv = parse(data);

        res.header('Content-Type', 'text/csv');
        res.attachment('filename.csv');

        res.send(csv);

        // const doc = new PDFDocument();

        // // Pipe the PDF into a blob or file on the server
        // res.setHeader('Content-Type', 'application/pdf');
        // res.setHeader('Content-Disposition', 'attachment; filename=download.pdf');

        // // Send the document data to the response
        // doc.pipe(res);

        // // Add some content to the PDF
        // doc.fontSize(10).text(JSON.stringify(data), 100, 80);

        // // Finalize PDF file
        // doc.end();

    } catch (error) {
        return res.status(500).json({ 'server error': error })
    }
}

const self = asyncHandler(async (req, res) => {
    res.send(req.user);
});

module.exports = { register, login, self, temp, fetchDataAndSaveAsCSV }
