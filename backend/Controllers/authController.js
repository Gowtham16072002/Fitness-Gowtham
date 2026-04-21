// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const userModel = require("../models/userModel");

// //TOKEN GENERATOR
// const generateToken = (user) => {
//   return jwt.sign(
//     {
//       id: user._id,
//       role: user.role,
//       emailAddress: user.emailAddress,
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// };

// //LOGIN 
// const login = async (req, res) => {
//   try {
//     const { emailAddress, passWord } = req.body;

//     if (!emailAddress) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }

//     if (!passWord) {
//       return res.status(400).json({
//         success: false,
//         message: "Password is required",
//       });
//     }

//     const user = await userModel.findOne({ emailAddress });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const isMatch = await bcrypt.compare(passWord, user.passWord);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     const token = generateToken(user);

//     return res.cookie("token", token, {
//       httpOnly: true,
//       secure: false, 
//       sameSite: "lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     })
//       .status(200)
//       .json({
//         success: true,
//         message: "Login successful",
//         token, 
//         user: {
//           id: user._id,
//           fullName: user.fullName,
//           emailAddress: user.emailAddress,
//           phoneNumber: user.phoneNumber,
//           role: user.role,
//         },
//       });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Login error",
//       error: error.message,
//     });
//   }
// };

// //SIGNUP
// const signUp = async (req, res) => {
//   try {
//     const { fullName, emailAddress, phoneNumber, passWord, confirmPassword } =
//       req.body;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!fullName) {
//       return res.status(400).json({
//         success: false,
//         message: "Full name is required",
//       });
//     }

//     if (fullName.length < 3 || fullName.length > 20) {
//       return res.status(400).json({
//         success: false,
//         message: "Full name must be 3 to 20 characters",
//       });
//     }

//     if (!emailAddress) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }

//     if (!emailRegex.test(emailAddress)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email format",
//       });
//     }

//     if (!phoneNumber) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number is required",
//       });
//     }

//     if (phoneNumber.toString().length !== 10) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number must be exactly 10 digits",
//       });
//     }

//     if (!passWord) {
//       return res.status(400).json({
//         success: false,
//         message: "Password is required",
//       });
//     }

//     if (passWord.length < 6) {
//       return res.status(400).json({
//         success: false,
//         message: "Password must be at least 6 characters",
//       });
//     }

//     if (!confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Confirm password is required",
//       });
//     }

//     if (passWord != confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Passwords do not match",
//       });
//     }

//     const existingUser = await userModel.findOne({
//       $or: [{ emailAddress }, { phoneNumber }],
//     });

//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(passWord, 10);

//     const user = await userModel.create({
//       fullName,
//       emailAddress,
//       phoneNumber,
//       passWord: hashedPassword,
//       role: "user",
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Signup successful",
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         emailAddress: user.emailAddress,
//         phoneNumber: user.phoneNumber,
//         role: user.role,
//       },
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Signup error",
//       error: error.message,
//     });
//   }
// };

// //LOGOUT
// // const logout = (req, res) => {
// //   res.clearCookie("token");
// //   return res.json({
// //     success: true,
// //     message: "Logout successful",
// //   });
// // };

// const logout = (req, res) => {
//   res.clearCookie("token", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "none",
//   });

//   res.json({
//     success: true,
//     message: "Logged out successfully",
//   });
// };

// //PROFILE
// const profile = async (req, res) => {
//   try {
//     if (req.user) {
//       return res.json({
//         success: true,
//         user: req.user,
//       });
//     }

//     return res.json({
//       success: false,
//       message: "Please login",
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Profile error",
//       error: error.message,
//     });
//   }
// };

// module.exports = { login, signUp, logout, profile };




const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

// TOKEN GENERATOR
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      emailAddress: user.emailAddress,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// COOKIE OPTIONS
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge: 24 * 60 * 60 * 1000,
};

// SANITIZE HELPERS
const sanitizeString = (value) => {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>?/gm, "").trim();
};

const sanitizeEmail = (value) => {
  return sanitizeString(value).toLowerCase();
};

const sanitizePhone = (value) => {
  return String(value || "").replace(/\D/g, "").slice(0, 10);
};

// LOGIN
const login = async (req, res) => {
  try {
    const emailAddress = sanitizeEmail(req.body.emailAddress);
    const passWord = sanitizeString(req.body.passWord);

    if (!emailAddress) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!passWord) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    const user = await userModel.findOne({ emailAddress });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(passWord, user.passWord);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = generateToken(user);

    return res
      .cookie("token", token, cookieOptions)
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          fullName: user.fullName,
          emailAddress: user.emailAddress,
          phoneNumber: user.phoneNumber,
          role: user.role,
        },
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login error",
    });
  }
};

// SIGNUP
const signUp = async (req, res) => {
  try {
    const fullName = sanitizeString(req.body.fullName).replace(/\s+/g, " ");
    const emailAddress = sanitizeEmail(req.body.emailAddress);
    const phoneNumber = sanitizePhone(req.body.phoneNumber);
    const passWord = sanitizeString(req.body.passWord);
    const confirmPassword = sanitizeString(req.body.confirmPassword);

    const nameRegex = /^[A-Za-z ]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!fullName) {
      return res.status(400).json({
        success: false,
        message: "Full name is required",
      });
    }

    if (!nameRegex.test(fullName)) {
      return res.status(400).json({
        success: false,
        message: "Full name must be 3 to 20 letters only",
      });
    }

    if (!emailAddress) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!emailRegex.test(emailAddress)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be exactly 10 digits",
      });
    }

    if (!passWord) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    if (passWord.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    if (!confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Confirm password is required",
      });
    }

    if (passWord !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await userModel.findOne({
      $or: [{ emailAddress }, { phoneNumber }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(passWord, 10);

    const user = await userModel.create({
      fullName,
      emailAddress,
      phoneNumber,
      passWord: hashedPassword,
      role: "user",
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Signup error",
    });
  }
};

// LOGOUT
const logout = (req, res) => {
  res.clearCookie("token", cookieOptions);

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
};

// PROFILE
const profile = async (req, res) => {
  try {
    if (req.user) {
      return res.json({
        success: true,
        user: req.user,
      });
    }

    return res.status(401).json({
      success: false,
      message: "Please login",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Profile error",
    });
  }
};

module.exports = { login, signUp, logout, profile };
