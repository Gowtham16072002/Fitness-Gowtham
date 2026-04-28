import api from "./api";

export const homeService = {
  getHomeContent: () => api.get("/api/home-content"),

  updateHomeContent: (data, csrfToken) =>
    api.put("/api/home-content", data, {
      headers: {
        "x-csrf-token": csrfToken,
      },
    }),

  uploadHomeImage: (imageData, csrfToken) =>
    api.post("/api/upload", imageData, {
      headers: {
        "x-csrf-token": csrfToken,
      },
    }),
};