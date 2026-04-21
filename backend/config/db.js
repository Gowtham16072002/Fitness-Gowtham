
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.log("DB connection error:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    if (process.env.NODE_ENV !== "production") {
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.error("Database connection failed");

    // Optional: only show detailed error in development
    if (process.env.NODE_ENV !== "production") {
      console.error(error.message);
    }

    process.exit(1);
  }
};

module.exports = connectDB;
