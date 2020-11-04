import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT || "http://localhost:5000/";

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const AUTH_SERVICE = {
  signup(userData) {
    console.log(service, userData);
    return service.post("/api/signup", userData);
  },
  login(userData) {
    return service.post("/api/login", userData);
  },
  logout() {
    return service.post("/api/logout", {});
  },
  getAuthenticatedUser() {
    return service.get("/api/isLoggedIn");
  },
};

export default AUTH_SERVICE;
