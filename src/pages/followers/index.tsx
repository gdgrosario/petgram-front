/* Components */
import { CardInfoProfile } from '@components/CardInfoProfile'
import { NavPages } from '@components/NavPages'
import { SearchFollowers } from '@components/followers/SearchFollowers/SearchFollowers'
import { CardFriend } from '@components/followers/ListFriends/CardFriend'
import { FooterActionButtons } from '@components/FooterActionButtons'
import { GridCards } from '@components/GridCards'
import { HeadInfo } from '@components/HeadInfo'

export default function followers (props) {
  return (
   <>
      <HeadInfo title="Seguidores" />
      <main className="container-global spacing-for-pages">
        <NavPages
          titleHeaderPage="Seguidores de Quimera"
          history={props.history}
        />

        <GridCards>
          <CardInfoProfile number={200} textCard="Seguidos" />
          <CardInfoProfile number={100} textCard="Seguidores" />
          <CardInfoProfile number={5} textCard="Seguidores en común" />
        </GridCards>

        <SearchFollowers />

        <section className="section-listUser">
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
          <CardFriend userName="simona.7w7" name="Simona" />
        </section>
        <FooterActionButtons />
      </main>
   </>
  )
}
