import { useState, useEffect } from "react";
import { getAccessToken } from "@helpers/auth";
import jwtDecode from "jwt-decode";
import { PayloadToken } from "src/models/Auth";

export const useOwner = (idUser: string) => {
  const [owner, setOwner] = useState<boolean>(false);
  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      const payload = jwtDecode<PayloadToken>(token);
      const { sub } = payload;

      if (sub === idUser) {
        setOwner(true);
      } else {
        setOwner(false);
      }
    } else {
      setOwner(false);
    }
  }, [idUser]);

  return owner;
};
