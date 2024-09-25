const UploadSchema = require("../../model/Aggregation/UploadSchema")
const fs = require('fs')
const { parse } = require("json2csv")
const path = require('path')
global.ReadableStream = global.ReadableStream || require('web-streams-polyfill').ReadableStream;
const puppeteer = require('puppeteer');
const handlebars = require("handlebars");


const uploadMultiImageImage = async (req, res) => {

    const image = await req.files[0]?.filename

    try {
        const profile = await UploadSchema.create({
            image,
        })

        res.status(200).json(profile)

    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })

    }

}

const uploadSingleImage = async (req, res) => {

    const image = await req.file.filename // for single only coming value not array

    try {
        const profile = await UploadSchema.create({
            image,
        })
        res.status(200).json(profile)
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })
    }

}


const uploadPDF = async (req, res) => {

    const file = await req.file.filename // for single only coming value not array

    try {
        const profile = await UploadSchema.create({
            file,
        })
        res.status(200).json(profile)
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" })
    }

}

const uploadImageUsingFS = async (req, res) => {

    let data = '';

    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        const folderPath = 'PDFfiles' // Replace with your desired folder path
        const fileName = Date.now() + '-uploadedFS.pdf'; // Change the filename as needed

        const filePath = path.join(folderPath, fileName);

        fs.writeFile(filePath, data, 'binary', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File uploaded successfully');
            }
        });
    });
}

const downloadPdf = async (req, res) => {

    res.setHeader('Content-Disposition', 'attachment; 1708074872707.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    res.download('PDFfiles/1708074872707.pdf')
    // res.sendFile(path.resolve("PDFfiles/1708074872707.pdf"));  // download and sendfile both methods are working.


}
const downloadJSONtoCsv = async (req, res) => {

    res.setHeader('Content-Type', 'text/csv');
    const data = [{ name: 'nilesh', address: "Sangli" }, { name: 'Akshay', address: "Haripur" }, { name: 'nilesh', address: "Sangli" }]
    const newData = parse(data)

    res.send(newData)
}


async function createPDF(req, res) {
    const jsonData = {
        name: 'John Doe',
        jobTitle: 'Senior Web Developer',
        photo: 'https://placekitten.com/200/200', // Replace with your actual photo URL
        email: 'john.doe@example.com',
        phone: '+123 456 7890',
        address: '123 Main Street, Cityville, USA',
        summary: 'Experienced web developer with a strong background in developing award-winning strategies for a diverse clientele. 5+ years of industry experience includes programming, web development, and project management.',
        educationDetails: [
            {
                degree: 'Master of Science',
                major: 'Computer Science',
                school: 'University of Tech',
                graduationYear: 2022
            },
            {
                degree: 'Bachelor of Science',
                major: 'Information Technology',
                school: 'Tech College',
                graduationYear: 2020
            }
        ],
        skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB'],
        experience: [
            {
                title: 'Senior Web Developer',
                company: 'Innovatech Ltd.',
                employmentPeriod: '2020 - Present',
                description: 'Lead the development of web applications, focusing on creating scalable and efficient solutions using modern technologies.'
            },
            {
                title: 'Web Developer',
                company: 'Web Solutions Inc.',
                employmentPeriod: '2018 - 2020',
                description: 'Developed and maintained high-quality, responsive websites and applications.'
            }
        ],
        certifications: [
            {
                name: 'Certified JavaScript Developer',
                issuer: 'TechCertify',
                year: 2021
            },
            {
                name: 'Certified Web Professional',
                issuer: 'WebCert Global',
                year: 2019
            }
        ],
        languages: ['English (Native)', 'Spanish (Fluent)']
    };

    const templateSource = fs.readFileSync('controller/HTMLtempleteForPDFdownload.hbs', 'utf8');

    const template = handlebars.compile(templateSource);

    const html = template(jsonData);

    console.log(html);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();

    // res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');  // to download pdf.
    res.setHeader('Content-Disposition', 'inline; filename=generated.pdf');      // to show pdf.
    res.setHeader('Content-Type', 'application/pdf');

    // Send the PDF as a response
    res.send(pdfBuffer);

};

async () => {
    const data = {
        title: 'Hello World',
        content: 'This is an example PDF generated with Puppeteer and Handlebars.'
    };

    // Define your Handlebars template
    const templateHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>{{title}}</title>
    </head>
    <body>
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </body>
    </html>
  `;

    const template = handlebars.compile(templateHtml);
    const html = template(data);

    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the content of the page to our generated HTML
    await page.setContent(html);

    // Stream the PDF back to the client
    const pdfBuffer = await page.pdf({ format: 'A4' });

    // Close the browser
    await browser.close();

    // Set headers to indicate content type and disposition
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=generated.pdf');

    // Send the PDF as a buffer
    res.send(pdfBuffer);
}



module.exports = { uploadMultiImageImage, uploadSingleImage, uploadPDF, uploadImageUsingFS, downloadPdf, downloadJSONtoCsv, createPDF }