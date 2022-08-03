/*
import { ContentCircleStories } from "components/Stories/CircleStories/ContentCircleStories";
 */
import { HeaderHome } from "@components/HeaderHome";
import { Hero } from "@components/home/Hero";
import { FooterActionButtons } from "@components/FooterActionButtons";
import { HeadInfo } from "@components/HeadInfo";
import { ModalSession } from "@components/auth/ModalSession";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@context/ContextProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  let [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        Math.round(document.documentElement.scrollTop + window.innerHeight) ===
          document.documentElement.offsetHeight &&
        !user &&
        !state
      ) {
        setState(true);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
      setState(false);
    };
  }, []);
  return (
    <>
      <HeadInfo title="Petgram" />
      <HeaderHome />

      <Hero />

      <FooterActionButtons />

      {state && !user && <ModalSession />}
    </>
  );
};

export default Home;
