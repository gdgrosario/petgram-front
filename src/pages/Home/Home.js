import { Hero } from "./components/Hero";
import { Header } from "layouts/Header";
import "./scss/home.scss";
import { ReactComponent as Logo } from "assets/svgs/Logo.svg";
import { ReactComponent as Error } from "assets/svgs/404_two.svg";

/* Pages */
import { Followers } from "pages/Followers/Followers";


export function Home() {
  return (
    <>
     {/*  <Header /> */}
      <Followers/>
      <section className="home animate__animated animate__rubberBand">
        {/* <Logo className="icon" />
        
        <Error />
        <Hero /> */}
        
      </section>
    </>
  );
}
