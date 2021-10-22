import { Hero } from "./components/Hero";
import { useContext } from "react";
import { AuthContext } from "context/ContextProvider";
import { FooterActionButtons } from "components/FooterActionButtons";
import { HeaderHome } from "components/HeaderHome";
import { ContentCircleStories } from "components/Stories/ContentCircleStories";

export function Home() {
  const { user: UserState } = useContext(AuthContext)
  const { user, isLoading } = UserState

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
