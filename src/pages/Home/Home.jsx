import { Hero } from "./components/Hero";
import { FooterActionButtons } from "components/FooterActionButtons";
import { HeaderHome } from "components/HeaderHome";
import { ContentCircleStories } from "components/Stories/ContentCircleStories";

export function Home() {
  return (
    <>
      <HeaderHome/>
      <section className="container-global home animate__animated animate__rubberBand">
        <ContentCircleStories/>
        <Hero />
      </section>
      <FooterActionButtons/>
    </>
  );
}
