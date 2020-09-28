const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../helpers/email");

const register = async (req, res) => {
  try {
    //Destructure form field and store in variable
    const { fullName, email, password, confirmPassword } = req.body;

    //Register Form field Validation
    //Checks for if fiels is empty
    if (!fullName || !email || !password || !confirmPassword)
      return res.status(400).json({ message: "Please fill up all fields" });

    //Checks for password length of min 8 characters
    if (password.length < 8)
      return res
        .status(400)
        .json({ message: "Password must be of 8 characters long" });

    //Checks whether password and confirm password field match or not
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Both password did not match" });

    //Find existing user of database collection "users"
    const existingUser = await User.findOne({ email: email });

    //Checks for existing user
    if (existingUser)
      return res
        .status(400)
        .json({ message: "User has already been registered" });

    //Generate Salt for password hash
    const salt = await bcrypt.genSalt(10);

    //Hash password
    const passwordHash = await bcrypt.hash(password, salt);

    //Generates token and store token
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET);

    //Insert fields of register form as object
    const newUser = new User({
      fullName,
      email,
      password: passwordHash,
      token,
    });

    //Store user object of register form in database
    const savedUser = await newUser.save();

    //Subject of email
    const emailSubject = "Email Confirmation";

    const emailBody =
      "<p>Please verify your email by clicking on the link below <br> <a href=" +
      process.env.CLIENT_URL +
      "/verifyToken/" +
      token +
      " target='_blank' style='background: black; padding: 10px 20px; color: #fff; border: 0px none; text-decoration: none; margin-top: 10px; display: table; width: auto; font-size: 14px; line-height: 20px; font-family: Sans-Serif;'>Verify</a></p>";

    //Send email
    const verifyEmail = await sendEmail(email, emailSubject, emailBody);

    if (verifyEmail === true) {
      res.json(savedUser);
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const verifyToken = async (req, res) => {
  try {
    //Checks for browser token and store in variable
    const token = req.params.token;

    if (!token || token === null) return res.json(false);

    //Verified jwt app token with browser token
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    //Find User of verified token by verified id
    const user = await User.findOne({ email: verified.email });
    if (!user) return res.json(false);

    user.active = true;

    const updateUser = await user.save();

    //Subject of email
    const emailSubject = "Email Activation";

    const emailBody = `Hello<strong> ${user.fullName}</strong>,<br><br>Your account has been successfully activated!`;

    if (updateUser) {
      //Send email
      const userActivate = await sendEmail(user.email, emailSubject, emailBody);

      if (userActivate === true) return res.json(true);
    }
    res.json(false);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    //Destructure form field and store in variable
    const { email, password } = req.body;

    //Checks for if fiels is empty
    if (!email || !password)
      return res.status(400).json({ message: "Please fill up all the fields" });

    //Find existing user of database collection "users"
    const user = await User.findOne({ email: email });

    //Checks whether user has been registered or not
    if (!user)
      return res.status(400).json({ message: "User has not been registered" });

    //Compare form password with database password
    const isMatch = await bcrypt.compare(password, user.password);

    //Check whether form password match with database password
    if (!isMatch)
      return res.status(400).json({ message: "Password did not match" });

    const active = user.active;
    if (!active)
      return res.status(400).json({ message: "User has not been verified" });

    //Output token and other user's data in json format
    res.json({
      token: user.token,
      user: {
        id: user._id,
        emaiL: user.email,
        fullName: user.fullName,
      },
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const tokenIsValid = async (req, res) => {
  try {
    //Checks for browser token and store in variable
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    //Verified jwt app token with browser token
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    //Find User of verified token by verified email
    const users = await User.findOne({ email: verified.email });
    if (!users) return res.json(false);

    //Output true if user exists
    res.json(true);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email)
      return res.status(400).json({ message: "Please enter your email" });

    const user = await User.findOne({ email: email });

    if (!user) return res.status(400).json({ message: "No user exists" });

    const clientUrl = process.env.CLIENT_URL;
    emailSubject = "Password Reset";
    emailBody = `<p>You can reset your password by clicking the links below <br/><a href="${clientUrl}/changePassword/${user.token}">${clientUrl}/changePassword/${user.token}</a></p>`;

    const resentLink = sendEmail(email, emailSubject, emailBody);

    if (resentLink) {
      res.json(true);
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;

    //Checks for if fiels is empty
    if (!password || !confirmPassword)
      return res.status(400).json({ message: "Please fill up all fields" });

    //Checks for password length of min 8 characters
    if (password.length < 8)
      return res
        .status(400)
        .json({ message: "Password must be of 8 characters long" });

    //Checks whether password and confirm password field match or not
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Both password did not match" });

    const token = req.params.token;

    if (!token || token === null) return res.json(false);

    //Verified jwt app token with browser token
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    //Find User of verified token by verified id
    const user = await User.findOne({ email: verified.email });
    if (!user) return res.json(false);

    //Generate Salt for password hash
    const salt = await bcrypt.genSalt(10);

    //Hash password
    const passwordHash = await bcrypt.hash(password, salt);

    user.password = passwordHash;

    const updateUser = await user.save();

    //Subject of email
    const emailSubject = "Password Change";

    const emailBody = `Hello<strong> ${user.fullName}</strong>,<br><br>Your password has been changed!`;

    if (updateUser) {
      //Send email
      const userActivate = await sendEmail(user.email, emailSubject, emailBody);

      if (userActivate === true) return res.json(true);
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

const authUser = async (req, res) => {
  console.log(req.user);
  const user = await User.findOne({ email: req.user });

  console.log(user);

  res.json({
    fullName: user.fullName,
    id: user._id,
  });
};

module.exports = {
  register,
  verifyToken,
  login,
  tokenIsValid,
  forgotPassword,
  changePassword,
  authUser,
};
