const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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

    //Insert fields of register form as object
    const newUser = new User({
      fullName,
      email,
      password: passwordHash,
    });

    //Store user object of register form in database
    const savedUser = await newUser.save();

    //Output database user in json format
    res.json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err });
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

    //Generate token for logging user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    //Output token and other user's data in json format
    res.json({
      token,
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

    //Find User of verified token by verified id
    const users = await User.findById(verified.id);
    if (!users) return res.json(false);

    //Output true if user exists
    res.json(true);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const authUser = (req, res) => {
  const user = await User.findById(req.user);

  res.json({
    fullName: user.fullName,
    id: user._id,
  });
};

module.exports = { register, login, tokenIsValid, authUser };
