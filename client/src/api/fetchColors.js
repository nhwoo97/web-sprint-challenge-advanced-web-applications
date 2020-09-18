import axiosWithAuth from "../utils/axiosWithAuth";

export const fetchColorsApi = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
