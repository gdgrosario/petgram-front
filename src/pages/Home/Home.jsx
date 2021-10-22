import { Hero } from "./components/Hero";
import { useContext } from "react";
import { AuthContext } from "context/ContextProvider";
import { FooterActionButtons } from "components/FooterActionButtons";
import { HeaderHome } from "components/HeaderHome";

export function Home() {
  const { user: UserState } = useContext(AuthContext)
  const { user, isLoading } = UserState

  return (
    <>
      <HeaderHome/>
      <section className="container-global home animate__animated animate__rubberBand">
        {
          user && !isLoading && <p>Tu historia </p>
        }
        <Hero />
      </section>
      <FooterActionButtons/>
    </>
  );
}
