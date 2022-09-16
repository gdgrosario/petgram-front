import { getUsersByNickName } from "@services/User";
import { useState, ChangeEvent } from "react";
import { User } from "../models/User";
import Link from "next/link";
import { FooterActionButtons } from "@components/FooterActionButtons";

const search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersSearch, setUsersSearch] = useState<User[]>();
  const searchUsers = async (sch: string) => {
    setLoading(true);
    if (sch.length > 0) {
      const { data, error } = await getUsersByNickName(sch);
      if (!error) {
        setLoading(false);
        setUsersSearch(data);
      } else {
        setError(error.message);
        setLoading(false);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchUsers(e.target.value);
  };

  return (
    <>
      <main className="container-global">
        <input
          value={search}
          onChange={handleChange}
          type="search"
          className="box-search__inputSearch"
          placeholder="Buscar usuarios"
        />

        {!search && (
          <div className="box-search__content">
            <h3>Recientes</h3>

            <span>No hay búsquedas recientes.</span>
          </div>
        )}

        {loading && search.length > 0 && !error && <p>loading...</p>}
        {usersSearch && usersSearch.length > 0 && !loading
          ? usersSearch.map((usr) => (
              <div key={usr.nickname} className="box-search__content">
                <Link href={`/${usr.nickname}`}>
                  <div className="box-search__content__user">
                    <img src={usr?.avatar} alt="" width={50} height={50} />
                    <div>
                      <h5>{usr.name}</h5>
                      <a>{usr.nickname}</a>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : search.length > 3 && <p>Not Found</p>}

        <FooterActionButtons />
      </main>

      <style jsx>{`
        main {
          display: grid;
          justify-items: center;
        }
      `}</style>
    </>
  );
};

export default search;
