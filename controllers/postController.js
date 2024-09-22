const User = require('../models/user');

exports.handlePost = (req, res) => {
  // Destructure and set default values
  const {
    full_name = "Arnav_Shah_",
    dob = "15032003",
    email = "ak0339@srmist.edu.in",
    roll_number = "RA2111003010378",
    data = []
  } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: null,
      email: null,
      roll_number: null,
      numbers: [],
      alphabets: [],
      highest_alphabet: []
    });
  }

  // Create user object with the provided or default data
  const user = new User(full_name, dob, email, roll_number, data);
  const response = user.getResponse();

  res.status(200).json(response);
};