import "./scss/home.scss";
import { Hero } from "./components/Hero";
import { Header } from "layouts/Header";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";

export function Home() {
  return (
    <>
      <Header />
      <section className="home animate__animated animate__rubberBand">
        <Logo className="icon" />
        
        <Hero />
      </section>
    </>
  );
}