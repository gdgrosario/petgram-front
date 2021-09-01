import { Hero } from "./components/Hero";
import "./scss/home.scss";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { ReactComponent as Error } from "assets/svgs/404_two.svg";

export function Home() {
  return (
    <>
      <section className="home animate__animated animate__rubberBand">
        <Logo className="icon" />
        
        <Error />
        <Hero />
        
      </section>
    </>
  );
}
