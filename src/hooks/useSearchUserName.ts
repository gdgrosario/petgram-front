import { useEffect, useState } from "react";
import { getUserForUserName } from "@services/User";
import { User } from "../models/User";

export const useSearchUser = (nickName: string) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUserNamefromDB = async () => {
    const getUseruserbyName = nickName
      ? await getUserForUserName(nickName)
      : null;
    nickName && setLoading(false);

    if (getUseruserbyName) {
      const { data, error } = getUseruserbyName;

      if (data?.name) {
        setUser(data);
      } else {
        setUser(null);
      }

      if (error?.message) {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    getUserNamefromDB();
  }, [nickName]);

  return { user, loading, error };
};
