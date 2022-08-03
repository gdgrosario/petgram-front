import jwtDecode from "jwt-decode";
import { user_token } from "../constants/Auth";
import { getCookie, removeCookies } from "cookies-next";
import { PayloadToken } from "src/models/Auth";

const getAccessToken = () => {
  const userToken = getCookie(user_token);
  if (!userToken) {
    return null;
  }
  return expiredToke(userToken as string) ? null : (userToken as string);
};

const expiredToke = (token: string): boolean => {
  const dataToken = jwtDecode<PayloadToken>(token);
  const { exp } = dataToken;
  const currentDate = (Date.now() + 60) / 1000;
  return currentDate > exp;
};

export { getAccessToken };
