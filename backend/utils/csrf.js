const { doubleCsrf } = require("csrf-csrf");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const { generateCsrfToken, doubleCsrfProtection, invalidCsrfTokenError } =
  doubleCsrf({
    getSecret: () => process.env.CSRF_SECRET,

    // v4 requires this
    getSessionIdentifier: (req) => {
      // Logged-in users: tie CSRF token to JWT cookie
      if (req.cookies?.token) {
        return req.cookies.token;
      }

      // Before login: allow csrf-token generation for public pages/forms
      return `${req.ip || "unknown"}-${req.headers["user-agent"] || "unknown"}`;
    },

    // Make header extraction explicit
    getCsrfTokenFromRequest: (req) => req.headers["x-csrf-token"],

    cookieName: isProduction ? "__Host-csrf-token" : "csrf-token",

    cookieOptions: {
      httpOnly: false,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      path: "/",
    },

    size: 32,
    ignoredMethods: ["GET", "HEAD", "OPTIONS"],
  });

module.exports = {
  generateCsrfToken,
  doubleCsrfProtection,
  invalidCsrfTokenError,
};
