class User {
    constructor(full_name, dob, email, roll_number, data) {
      this.full_name = full_name;
      this.dob = dob;
      this.email = email;
      this.roll_number = roll_number;
      this.data = data;
    }
  
    getUserId() {
      // Replace spaces in the full name and concatenate with dob
      return this.full_name.replace(/ /g, '') + this.dob;
    }
  
    getNumbers() {
      return this.data.filter(item => !isNaN(item));
    }
  
    getAlphabets() {
      return this.data.filter(item => /^[A-Za-z]$/.test(item));
    }
  
    getHighestAlphabet() {
      const alphabets = this.getAlphabets().map(item => item.toLowerCase());
      return alphabets.length ? [alphabets.sort().pop()] : [];
    }
  
    getResponse() {
      return {
        is_success: true,
        user_id: this.getUserId(),
        email: this.email,
        roll_number: this.roll_number,
        numbers: this.getNumbers(),
        alphabets: this.getAlphabets(),
        highest_alphabet: this.getHighestAlphabet()
      };
    }
  }
  
  module.exports = User;