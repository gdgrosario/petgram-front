import { FooterActionButtons } from "components/FooterActionButtons/FooterActionButtons";
import { NavPages } from "components/NavPages/NavPages";
import { CardTeam } from "./CardTeam";

import { getTeam } from "helpers/getTeam";
import "./Team.scss";

export function Team() {
  return (
    <div className="container">
      <NavPages />

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
  );
}
