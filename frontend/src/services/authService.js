import api from "./api";

export const authService = {
    getCsrfToken: () => api.get("/auth/csrf-token"),

    getProfile: () => api.get("/auth/profile"),

    login: (data) => api.post("/auth/login", data),

    signup: (data) => api.post("/auth/signup", data),

    logout: (csrfToken) =>
        api.post(
            "/auth/logout",
            {},
            {
                headers: {
                    "x-csrf-token": csrfToken,
                },
            }
        ),
};