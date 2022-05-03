import { apiAgent, apiErrorHandler, apiRoutes } from "./config";

export const userUpdateApi = async (body: any, token: string) => {
  try {
    const form = new FormData();
    Object.entries(body).map((keyVal: any) => keyVal[1] && form.append(keyVal[0], keyVal[1]));
    return (await apiAgent(token).post(apiRoutes.user.update, form)).data.result;
  } catch (error) {
    apiErrorHandler(error);
  }
};

export const getUserJobsApi = async (token: string) => {
  try {
    return (await apiAgent(token).get(apiRoutes.user.jobs)).data.result;
  } catch (error) {
    apiErrorHandler(error);
  }
};
