/* svgs */
import SearchSvgDark from "@public/assets/svgs/icons/search_dark.svg";

export function SearchFollowers() {
  return (
    <div className="box-search separationMargin">
      <SearchSvgDark className="box-search__svg" />

      <input
        type="text"
        className="box-search__inputSearch"
        role="search"
        placeholder="Busca en los seguidores de Quimera"
      />
    </div>
  );
}
