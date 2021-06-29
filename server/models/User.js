const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const favoritesSchema = require('./Favorites');

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }/* ,
    birthday: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true
    }, */

    
    // user can favorite the restaurant with terrible reviews
    // favorites: [favoritesSchema]
});

// add favorites later?

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;
