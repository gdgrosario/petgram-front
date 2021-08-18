import { Hero } from "./components/Hero";
import { Header } from "layouts/Header";
import "./scss/home.scss";
import Logo from "assets/images/Logo.svg";

export function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <img src={Logo} alt="logo" />
        <Hero />
      </section>
    </>
  );
}
