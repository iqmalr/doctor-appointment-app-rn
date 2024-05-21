import axios from "axios";

// const BASE_URL = "http://192.168.0.108:1337/api";
// const BASE_URL = "http://localhost:1337/api";
// const BASE_URL = "http://192.168.1.244:1337/api";
// const BASE_URL = "http://192.168.1.94:1337/api";
const BASE_URL = "https://strapi-production-946a.up.railway.app/api";
// hospothp
// const BASE_URL = "http://192.168.11.15:1337/api";
const API_KEY = "egvcvug0dpm9scidwmhuha0zqi0sso0x";
// const API_KEY =
//   "1d7f762bf0d85a51ae9829bfaa955eee056204845485473a24f546f65a9f7f435ffcdfb9ab1d2d691f1b83b851ab824bfb34e258d7237ab3d86317fa4afa8d598810a6ee62e633abdb2bd4f173fbcc5c04f66f7de2f1ad8a0f13538a058cc181389ad5ec42a24790b754f349c424c7983f14343b326ee98c1b4be9c958f7f859";
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer" + API_KEY,
  },
});
const getSlider = () => AxiosInstance.get("/sliders?populate=*");
const getCategories = () => AxiosInstance.get("/categories?populate=*");
const getClinics = () => AxiosInstance.get("/clinics?populate=*");
const getClinicsByCategory = (category) =>
  AxiosInstance.get(
    "/clinics?filters[categories][Name][$in]=" + category + "&populate=*"
  );
const createAppointment = (data) => AxiosInstance.post("/appointments", data);
const createMedicalRecord = (data) =>
  AxiosInstance.post("/medical-records", data);
// const getUserAppointments = (email, UserName) =>
//   AxiosInstance.get(
//     "/appointments?filters[email][$regex]=" +
//       email +
//       "$&filters[UserName][$eq]=" +
//       UserName +
//       "&populate=*"
//   );
const getUserMedicalRecord = (email) =>
  AxiosInstance.get(
    "/medical-records?filters[Email][$eq]=" + email + "&populate=*"
  );
const getUserAppointments = (email) =>
  AxiosInstance.get(
    "/appointments?filters[Email][$eq]=" + email + "&populate=*"
  );
// const cancelAppointment = () => AxiosInstance.patch("/appointment/" + id);
const cancelAppointment = (appointmentId) =>
  AxiosInstance.put("/appointment/" + appointmentId);

// http://localhost:1337/api/appointments?filters[email][$regex]=^m\.iqmal\.riffai@gmail\.com$&filters[UserName][$eq]=M%20Riffai&populate=*
export default {
  getSlider,
  getCategories,
  getClinics,
  getClinicsByCategory,
  createAppointment,
  getUserAppointments,
  createMedicalRecord,
  getUserMedicalRecord,
  cancelAppointment,
};
