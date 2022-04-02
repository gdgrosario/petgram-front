import Link from "next/link";

export function CardInfoProfile({ number = 0, textCard = "Info Card" }) {
  return (
    <Link href="/">
      <a className="cardProfile">
        <span className="cardProfile__number">{number}</span>
        <p className="cardProfile__textCard">{textCard}</p>
      </a>
    </Link>
  );
}
