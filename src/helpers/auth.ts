import jwtDecode, { JwtPayload } from "jwt-decode";
import { user_token } from "../constants/Auth";
import { getCookie, removeCookies } from "cookies-next";

const getAccessToken = () => {
  const userToken = getCookie(user_token);
  if (!userToken) {
    return null;
  }
  return expiredToke(userToken as string) ? null : (userToken as string);
};

const expiredToke = (token: string): boolean => {
  const dataToken = jwtDecode(token);
  const { exp } = dataToken as JwtPayload;
  const currentDate = (Date.now() + 60) / 1000;
  return currentDate > exp;
};

const logout = () => {
  removeCookies(user_token);
};

export { getAccessToken, logout };
