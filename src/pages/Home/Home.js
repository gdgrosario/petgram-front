import { Hero } from "./components/Hero";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { useContext } from "react";
import { AuthContext } from "context/ContextProvider";
import { FooterActionButtons } from "components/FooterActionButtons/FooterActionButtons";

export function Home() {
  //TODO: Refactor 
  const { user: UserState } = useContext(AuthContext)
  const { user, isLoading } = UserState

  return (
    <>
      <section className="container-global home animate__animated animate__rubberBand">
        <Logo className="icon" />
        {
          user && !isLoading && <p>Tu historia </p>
        }
        <Hero />
      </section>
      <FooterActionButtons/>
    </>
  );
}