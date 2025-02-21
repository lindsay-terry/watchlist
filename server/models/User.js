const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        username: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true, minlength: [6, 'Password must be at least 6 characters']},
        friends: [{ type: Schema.Types.ObjectId, ref: 'user' },],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//Virtual that keeps friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);
module.exports = User