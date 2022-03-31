import Link from "next/link";

export function CardTeam({ name, img, rol, social }) {
  return (
    <article className="team__card">
      <div className="team__card__user">
        <img src={img} alt={name} width="50" height="50" />
        <div>
          <h2>{name}</h2>
          <span>{rol}</span>
        </div>
      </div>
      <div>
        {social.map(({ id, icon, link }) => (
          <Link key={id} href={link}>
            <a className="team__card__social">{icon}</a>
          </Link>
        ))}
      </div>
    </article>
  );
}
