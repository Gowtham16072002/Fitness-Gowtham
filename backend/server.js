const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

connectDB();

// Important for HTTPS detection behind proxy (Render, Railway, Nginx, etc.)
app.set("trust proxy", 1);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});