import Axios from "axios";

export const apiRoutes = {
  baseUrl: `/api`,
  // baseUrl: `http://localhost:3000/api`,
  auth: { login: "/auth/login" },
  user: { update: "/user/update", jobs: "/jobs" },
  giveaway: { instagram: "/instagram/giveaway" },
};

export const apiAgent = (token?: string) => {
  const headers = token ? { authorization: token } : {};
  return Axios.create({ baseURL: apiRoutes.baseUrl, headers });
};

export const apiErrorHandler = (error: any) => {
  if (error.response) throw error.response.data?.message || error.response.data?.error_description || "خطا ناشناخته";
  if (String(error) === "Error: Network Error") throw new Error("برقراری ارتباط با سرور مقدور نمی باشد");
  throw error.message || error;
};
