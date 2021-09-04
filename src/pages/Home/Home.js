import { Hero } from "./components/Hero";
import "./scss/home.scss";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { useContext } from "react";
import { AuthContext } from "context/ContextProvider";

export function Home() {
  //TODO: Refactor 
  const { user: UserState } = useContext(AuthContext)
  const { user, isLoading } = UserState

  console.log(user, isLoading)

  return (
    <>
      <section className="home animate__animated animate__rubberBand">
        <Logo className="icon" />
        {
          user && isLoading && <p>Tu historia </p>
        }
        <Hero />
      </section>
    </>
  );
}