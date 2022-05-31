/*
import { ContentCircleStories } from "components/Stories/CircleStories/ContentCircleStories";
 */
import { HeaderHome } from '@components/HeaderHome'
import { Hero } from '@components/home/Hero'
import { FooterActionButtons } from '@components/FooterActionButtons'
import { HeadInfo } from '@components/HeadInfo'
import { getAccessToken } from '@helpers/auth'
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getAccessToken()
  }, [])
  return (
    <>
      {/* <HeaderHome/>
      <section className="container-global home animate__animated animate__rubberBand">
        <ContentCircleStories/>
      </section>
    */}
      <HeadInfo title="Petgram" />
      <HeaderHome />

      <Hero />

      <FooterActionButtons />
    </>
  )
}

export default Home
