import { apiAgent, apiErrorHandler, apiRoutes } from "./config";

export const newGiveawayApi = async (postUrl: string, from: "likes" | "comments", token: string) => {
  try {
    return (await apiAgent(token).post(apiRoutes.giveaway.instagram, { postUrl, from })).data.result;
  } catch (error) {
    apiErrorHandler(error);
  }
};
