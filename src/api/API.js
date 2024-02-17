import axios from "axios";

// TODO server ip
// export const API_URL = "http://174.138.41.186/";
export const API_URL = "http://127.0.0.1:5000/";

const API = axios.create({
    withCredentials: "include",
    baseURL: API_URL
});

const getAuthTokenJWT = () => {
    return JSON.parse(localStorage.getItem("authToken"));
};

API.interceptors.request.use((config) => {
    if (getAuthTokenJWT()) {
        config.headers = {
            "Authorization": "Bearer " + getAuthTokenJWT()
        }
    }

    return config;
});


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPartners: (data) => API.get("partners/", data),
    createUser: (data) => API.post("login/", data),
    getResumes: () => API.get("resumes/"),
    getResume: (id) => API.get("resumes/" + id),
    getUser: () => API.get("user/"),
    getWishlist: () => API.get("wishlist/"),
    createWishlist: (id, data) => API.post("wishlist/create/" + id + "/", data),
    deleteWishlist: (id) => API.post("wishlist/delete/" + id),
    getCategories: () => API.get("categories/")
};
