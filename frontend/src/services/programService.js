import api from "./api";

export const programService = {
  getPrograms: () => api.get("/api/programs"),

  updatePrograms: (data, csrfToken) =>
    api.post("/api/programs", data, {
      headers: {
        "x-csrf-token": csrfToken,
      },
      withCredentials: true,
    }),
};