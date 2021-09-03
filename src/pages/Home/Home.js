import { Hero } from "./components/Hero";
import "./scss/home.scss";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";

export function Home() {
  return (
    <>
      <section className="home animate__animated animate__rubberBand">
        <Logo className="icon" />
        
        <Hero />
        
      </section>
    </>
  );
}
