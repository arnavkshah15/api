const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// POST Route
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets.filter(ch => ch === ch.toLowerCase()).sort().pop() || null;

    // File handling (assuming it's base64 for now)
    const fileValid = file_b64 ? true : false;  // Basic validation
    const fileMimeType = 'doc/pdf';  // Assuming text for now
    const fileSizeKb = file_b64 ? (Buffer.byteLength(file_b64, 'base64') / 1024).toFixed(2) : 0;

    const response = {
        is_success: true,
        user_id: "arnav_shah_15032003", // Replace with dynamic user logic
        email: "ak0339@srmist.edu.in", // Replace with actual email logic
        roll_number: "RA2111003010378", // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: [highestLowercaseAlphabet],
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKb
    };
    res.json(response);
});

// GET Route
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
