import { Hero } from "./components/Hero";
import { Header } from "layouts/Header";
import "./scss/home.scss";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { ReactComponent as Error } from "assets/svgs/404_two.svg";

export function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <Logo className="icon" />
        <Error />
        <Hero />
      </section>
    </>
  );
}
