import { apiAgent, apiErrorHandler, apiRoutes } from "./config";

export const authLoginApi = async (body: any) => {
  try {
    return (await apiAgent().post(apiRoutes.auth.login, body)).data.result;
  } catch (error) {
    apiErrorHandler(error);
  }
};
