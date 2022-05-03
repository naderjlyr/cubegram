import { IUser } from "../../utils/interfaces/IUser";

export const updateUserAct = (user: IUser) => ({ type: "updateUser", user });
export const clearUserAct = () => ({ type: "clearUser" });

const initialState = { token: "" };

export const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "updateUser":
      return { ...state, ...action.user };
    case "clearUser":
      return { ...initialState };
    default:
      return state;
  }
};
