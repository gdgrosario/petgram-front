import { FooterActionButtons } from '@components/FooterActionButtons'
import { NavPages } from '@components/NavPages'
import { CardTeam } from '@components/CardTeam'

import { getTeam } from '@helpers/getTeam'

export default function Team ({ history }) {
  return (
    <div className="container-global spacing-for-pages">
      <NavPages titleHeaderPage="Volver" history={history} />

      <section className="team__description">
        <h1 className="team__description__title">Team</h1>
        <p>
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </section>

      {getTeam.map((team) => (
        <CardTeam key={team.id} {...team} />
      ))}

      <FooterActionButtons />
    </div>
  )
}
