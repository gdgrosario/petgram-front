/* svgs */
import SearchSvgDark from '@public/assets/svgs/icons/search_dark.svg'

interface ISearchFriends {
  placeholderNickName: string
}
export function SearchFriends ({placeholderNickName}:ISearchFriends) {
  return (
    <div className="box-search separationMargin">
      <SearchSvgDark className="box-search__svg" />

      <input
        type="text"
        className="box-search__inputSearch"
        role="search"
        placeholder={`Busca en los seguidores de ${placeholderNickName}`}
      />
    </div>
  )
}
