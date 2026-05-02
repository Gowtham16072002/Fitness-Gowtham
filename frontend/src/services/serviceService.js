import api from "./api";

export const serviceService = {
    getServiceContent: () => api.get("/api/service-content"),

    updateServiceContent: (data, csrfToken) =>
        api.put("/api/service-content", data, {
            headers: {
                "x-csrf-token": csrfToken,
            },
        }),
};