import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function CardTeam({ name, img, rol, social }) {
  return (
    <article className="team__card">
      <div className="team__card__user">
        <img src={img} alt={name} width="50" height="50"/>
        <div>
          <h2>{name}</h2>
          <span>{rol}</span>
        </div>
      </div>
      <div>
        {social.map(({ id, icon, link }) => (
          <Link className="team__card__social" key={id} to={link}>
            {icon}
          </Link>
        ))}
      </div>
    </article>
  );
}

CardTeam.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  social: PropTypes.array.isRequired,
};
